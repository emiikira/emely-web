# Builds the thumbnails (1200x627) for the CV, in the style of the site: brand gradient + the first page of the PDF.
#   python3 scripts/cv-thumbnail.py   → public/og/cv-es.jpg and public/og/cv-en.jpg
# Needs the first page of each CV rendered as PNG: pdftoppm -r 110 -f 1 -l 1 -png public/cv/<file>.pdf /tmp/cvp/<es|en>
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1200, 627
PURPLE, FUCHSIA = (102, 0, 191), (201, 0, 157)
FONTS = '/usr/share/fonts/truetype/google-fonts/'
COPY = {
    'es': ('Currículum', 'Emely Aponte', 'Senior Product Designer', 'Versión en español'),
    'en': ('Résumé', 'Emely Aponte', 'Senior Product Designer', 'English version'),
}


def build(lang):
    big = Image.linear_gradient('L').resize((1700, 1700)).rotate(35)
    grad = big.crop(((1700 - W) // 2, (1700 - H) // 2, (1700 + W) // 2, (1700 + H) // 2))
    img = Image.composite(Image.new('RGB', (W, H), FUCHSIA), Image.new('RGB', (W, H), PURPLE), grad).convert('RGBA')

    # First page of the CV, slightly tilted, with a soft shadow
    page = Image.open(f'/tmp/cvp/{lang}-1.png').convert('RGB')
    pw = 400
    page = page.resize((pw, round(page.height * pw / page.width)), Image.LANCZOS)
    card = Image.new('RGBA', (pw + 6, page.height + 6), (255, 255, 255, 255))
    card.paste(page, (3, 3))
    card = card.rotate(8, expand=True, resample=Image.BICUBIC)
    shadow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    pos = (690, -60)
    shadow.paste(Image.new('RGBA', card.size, (40, 0, 70, 150)), (pos[0] + 14, pos[1] + 24), card.split()[3])
    img.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(22)))
    img.alpha_composite(card, pos)

    d = ImageDraw.Draw(img)
    bold = ImageFont.truetype(FONTS + 'Poppins-Bold.ttf', 74)
    med = ImageFont.truetype(FONTS + 'Poppins-Medium.ttf', 34)
    reg = ImageFont.truetype(FONTS + 'Poppins-Regular.ttf', 28)
    title, name, role, cta = COPY[lang]
    d.text((70, 170), title, font=bold, fill='white')
    d.text((72, 285), name, font=med, fill='white')
    d.text((72, 335), role, font=reg, fill=(240, 220, 250))
    # Language tag, in the shape of the site's pills
    pill = (72, 440, 72 + 330, 440 + 64)
    pill_w = d.textlength(cta, font=ImageFont.truetype(FONTS + 'Poppins-Medium.ttf', 26))
    pill = (72, 440, 72 + round(pill_w) + 68, 440 + 64)
    d.rounded_rectangle(pill, 32, fill='white')
    d.text((pill[0] + 34, pill[1] + 14), cta, font=ImageFont.truetype(FONTS + 'Poppins-Medium.ttf', 26), fill=PURPLE)
    d.text((72, 560), 'emelyaponte.com', font=reg, fill=(240, 220, 250))

    out = os.path.join(HERE, f'../public/og/cv-{lang}.jpg')
    img.convert('RGB').save(out, quality=90)
    print('built', out)


for lang in COPY:
    build(lang)
