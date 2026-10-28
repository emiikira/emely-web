# Builds the cover (1920x1080) and the portrait card (1365x2048) of each case study from its real screens:
# devices tilted in a diagonal grid over the project's brand colour, in the style of the PinsXP cover.
#
#   python3 scripts/case-mockups.py            → every case
#   python3 scripts/case-mockups.py mercantil  → one case
#
# Screens live in src/assets/projects/<case>/screens/. Outputs: <case>/cover.jpg and <case>/portrait.jpg.
import os
import sys

from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/assets/projects/')

CASES = {
    'mercantil': {
        'device': 'phone',
        'color': (1, 78, 156),  # Mercantil blue, from the app
        'screens': ['home.jpg', 'tarjetas.jpg', 'transferir.jpg', 'resumen.jpg', 'login.jpg', 'cuenta.jpg',
                    'tarjetas-credito.jpg', 'pagar-tarjeta.jpg'],
    },
    'in99': {
        'device': 'phone',
        'color': (51, 213, 109),  # in99 green, from the login screen
        'screens': ['home.png', 'gastos.png', 'login.png'],
    },
    'crudebeauty': {
        'device': 'phone',
        'color': (122, 46, 10),  # amber of the CrudeBeauty oil bottles
        'status_bar': True,  # screens were exported without a status bar
        'screens': ['home.png', 'producto.png', 'carrito.jpg', 'pago.jpg', 'blog.jpg'],
    },
    'kuara': {
        'device': 'tablet',
        'color': (106, 44, 143),  # Purple KUARA/01
        'screens': ['dashboard.png', 'onboarding.png', 'qr-enviado.png', 'sucursales.png', 'sucursal-creada.png',
                    'qr-solicitud.png'],
    },
}

# Screen width inside the big canvas; the crops below are scaled by 2/3, so a phone lands at ~375 px (its native size)
PHONE_W, TABLET_W = 560, 1150
PHONE_RATIO = 812 / 375


def load(case, name, device, status_bar=False):
    img = Image.open(os.path.join(ROOT, case, 'screens', name)).convert('RGB')
    if status_bar:
        # Room for the dynamic island, in the colour of the screen's top edge
        pad = round(img.width * 0.12)
        top = img.crop((0, 0, img.width, 1)).resize((1, 1)).getpixel((0, 0))
        framed = Image.new('RGB', (img.width, img.height + pad), top)
        framed.paste(img, (0, pad))
        img = framed
    if device == 'phone':
        # Long scrolling pages show their first screen
        h = round(img.width * PHONE_RATIO)
        if img.height > h:
            img = img.crop((0, 0, img.width, h))
    return img


def phone(img, w):
    h = round(w * PHONE_RATIO)
    img = img.resize((w, h), Image.LANCZOS)
    b = round(w * 0.045)  # bezel
    out = Image.new('RGBA', (w + 2 * b, h + 2 * b), (0, 0, 0, 0))
    d = ImageDraw.Draw(out)
    R = round(out.width * 0.16)
    d.rounded_rectangle((0, 0, out.width - 1, out.height - 1), R, fill=(70, 72, 78))  # metal edge
    d.rounded_rectangle((5, 5, out.width - 6, out.height - 6), R - 5, fill=(14, 14, 16))  # bezel
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), R - b, fill=255)
    out.paste(img, (b, b), mask)
    iw, ih = round(w * 0.27), round(w * 0.075)  # dynamic island
    top = b + round(w * 0.025)
    d.rounded_rectangle((out.width // 2 - iw // 2, top, out.width // 2 + iw // 2, top + ih), ih // 2, fill=(8, 8, 10))
    return out


def tablet(img, w):
    h = round(img.height * w / img.width)
    img = img.resize((w, h), Image.LANCZOS)
    b, R, r = round(w * 0.03), round(w * 0.05), round(w * 0.012)
    out = Image.new('RGBA', (w + 2 * b, h + 2 * b), (0, 0, 0, 0))
    d = ImageDraw.Draw(out)
    d.rounded_rectangle((0, 0, out.width - 1, out.height - 1), R, fill=(58, 58, 64))
    d.rounded_rectangle((4, 4, out.width - 5, out.height - 5), R - 4, fill=(16, 16, 20))
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), r, fill=255)
    out.paste(img, (b, b), mask)
    cx = out.width // 2
    d.ellipse((cx - 5, b // 2 - 5, cx + 5, b // 2 + 5), fill=(40, 40, 48))
    return out


def compose(case, size=(4600, 4600), angle=-30):
    cfg = CASES[case]
    base = cfg['color']
    deep = tuple(round(c * 0.72) for c in base)
    # Soft diagonal light over the brand colour
    canvas = Image.new('RGBA', size, base + (255,))
    light = Image.linear_gradient('L').resize(size).rotate(90)
    canvas = Image.composite(canvas, Image.new('RGBA', size, deep + (255,)), light.point(lambda v: 150 + v * 105 // 255))

    make = phone if cfg['device'] == 'phone' else tablet
    width = PHONE_W if cfg['device'] == 'phone' else TABLET_W
    devices = [make(load(case, name, cfg['device'], cfg.get('status_bar', False)), width) for name in cfg['screens']]
    dw, dh = devices[0].size
    gap = 80 if cfg['device'] == 'phone' else 110
    step_y = dh + gap if cfg['device'] == 'phone' else round(dw * 0.66) + gap

    for col in range(-1, size[0] // (dw + gap) + 2):
        x = col * (dw + gap)
        offset = (col % 2) * (step_y // 2)
        for row in range(-1, size[1] // step_y + 2):
            y = row * step_y + offset - step_y // 3
            # Neighbours (above, below and in the next columns) always show a different screen
            dev = devices[(row + col * 2) % len(devices)]
            shadow = Image.new('RGBA', size, (0, 0, 0, 0))
            tint = Image.new('RGBA', dev.size, tuple(round(c * 0.25) for c in base) + (150,))
            shadow.paste(tint, (x + 30, y + 50), dev.split()[3])
            canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(45)))
            canvas.alpha_composite(dev, (x, y))
    return canvas.rotate(angle, resample=Image.BICUBIC, fillcolor=base + (255,))


def crop(img, w, h, dx=0, dy=0):
    cx, cy = img.width // 2 + dx, img.height // 2 + dy
    return img.crop((cx - w // 2, cy - h // 2, cx - w // 2 + w, cy - h // 2 + h)).convert('RGB')


def build(case):
    big = compose(case)
    out = os.path.join(ROOT, case)
    crop(big, 2880, 1620, dx=-120, dy=60).resize((1920, 1080), Image.LANCZOS).save(os.path.join(out, 'cover.jpg'), quality=90)
    crop(big, 1820, 2730, dx=-150, dy=-200).resize((1365, 2048), Image.LANCZOS).save(os.path.join(out, 'portrait.jpg'), quality=90)
    print('built', case)


if __name__ == '__main__':
    for name in sys.argv[1:] or CASES:
        build(name)
