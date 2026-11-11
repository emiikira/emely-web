# One-off patch of the "previous experience" paragraph of both CV PDFs (text taken from LinkedIn).
# The CVs are single A4 pages: the top is kept, the paragraph is rewritten, and what is below is moved down.
#   python3 scripts/cv-previous-experience.py   (run from the repo root; needs `pip install pymupdf`)
import os

import pymupdf as fitz

CV = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../public/cv/')
FONTS = '/usr/share/fonts/truetype/google-fonts/'
SIZE, LEAD, X0, X1 = 8.6, 12.0, 43.0, 553.0
BOLD_COLOR, TEXT_COLOR = (0x17 / 255, 0x13 / 255, 0x1F / 255), (0x26 / 255, 0x22 / 255, 0x2E / 255)
TOP_CUT, BOTTOM_CUT = 607, 641  # the paragraph sits between these two y values

FILES = {
    'CV_Emely_Aponte_Tovar.pdf': (
        'Experiencia previa (2015 – 2017):',
        ' diseñadora gráfica digital en Topitop (pasantía), La Web Mercadeo Interactivo y Seis Grados Media, en Caracas, '
        "con campañas para marcas como L'Oréal Professionnel y Ron Roble Viejo.",
    ),
    'CV_Emely_Aponte_EN.pdf': (
        'Earlier experience (2015 – 2017):',
        ' digital graphic designer at Topitop (internship), La Web Mercadeo Interactivo and Seis Grados Media in Caracas, '
        "with campaigns for brands such as L'Oréal Professionnel and Ron Roble Viejo.",
    ),
}

bold = fitz.Font(fontfile=FONTS + 'Poppins-Bold.ttf')
regular = fitz.Font(fontfile=FONTS + 'Poppins-Regular.ttf')


def wrap(label, text):
    """Greedy wrap of the bold label + regular text into lines of (word, is_bold)."""
    words = [(w, True) for w in label.split()] + [(w, False) for w in text.split()]
    lines, current, width = [], [], 0.0
    space = regular.text_length(' ', SIZE)
    for word, is_bold in words:
        w = (bold if is_bold else regular).text_length(word, SIZE)
        if current and width + space + w > X1 - X0:
            lines.append(current)
            current, width = [], 0.0
        width += (space if current else 0) + w
        current.append((word, is_bold))
    lines.append(current)
    return lines


for name, (label, text) in FILES.items():
    path = CV + name
    src = fitz.open(path)
    page = src[0]
    width, height = page.rect.width, page.rect.height
    origin_y = next(s['origin'][1] for b in page.get_text('dict')['blocks'] for l in b.get('lines', []) for s in l['spans']
                    if s['text'].startswith(label[:10]))
    lines = wrap(label, text)
    delta = (len(lines) - 2) * LEAD

    out = fitz.open()
    new = out.new_page(width=width, height=height)
    new.show_pdf_page(fitz.Rect(0, 0, width, TOP_CUT), src, 0, clip=fitz.Rect(0, 0, width, TOP_CUT))
    new.show_pdf_page(fitz.Rect(0, BOTTOM_CUT + delta, width, height + delta), src, 0, clip=fitz.Rect(0, BOTTOM_CUT, width, height))
    new.insert_font(fontname='pb', fontfile=FONTS + 'Poppins-Bold.ttf')
    new.insert_font(fontname='pr', fontfile=FONTS + 'Poppins-Regular.ttf')
    for i, line in enumerate(lines):
        x = X0
        for word, is_bold in line:
            font = bold if is_bold else regular
            new.insert_text((x, origin_y + i * LEAD), word, fontname='pb' if is_bold else 'pr', fontsize=SIZE,
                            color=BOLD_COLOR if is_bold else TEXT_COLOR)
            x += font.text_length(word + ' ', SIZE)
    for link in page.get_links():
        r = link['from']
        if r.y0 > BOTTOM_CUT:
            r = fitz.Rect(r.x0, r.y0 + delta, r.x1, r.y1 + delta)
        new.insert_link({**link, 'from': r})
    out.set_metadata(src.metadata)
    out.save(path + '.tmp', garbage=3, deflate=True)
    os.replace(path + '.tmp', path)
    print(name, len(lines), 'lines, shift', delta)
