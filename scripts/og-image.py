# Builds the default social-sharing image (1200x630) used when a page has no image of its own.
#   python3 scripts/og-image.py   → public/og-default.jpg
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1200, 630
PURPLE, FUCHSIA = (102, 0, 191), (201, 0, 157)
FONTS = '/usr/share/fonts/truetype/google-fonts/'

# Diagonal brand gradient
big = Image.linear_gradient('L').resize((1700, 1700)).rotate(35)
grad = big.crop(((1700 - W) // 2, (1700 - H) // 2, (1700 + W) // 2, (1700 + H) // 2))
img = Image.composite(Image.new('RGB', (W, H), FUCHSIA), Image.new('RGB', (W, H), PURPLE), grad)

# Case-study covers as a tilted grid of cards on the right, bleeding off the edge
ROOT = os.path.join(HERE, '../src/assets/projects/')
covers = ['home/pinsxp.jpg', 'kuara/cover.jpg', 'finaer-fivy/cover.jpg', 'mercantil/cover.jpg', 'in99/cover.jpg', 'crudebeauty/cover.jpg']
CW, CH, GAP = 290, 163, 20
img = img.convert('RGBA')
layer = Image.new('RGBA', (900, 900), (0, 0, 0, 0))
for i, name in enumerate(covers):
    col, row = i % 2, i // 2
    cover = Image.open(ROOT + name).convert('RGB')
    cover = ImageOps.fit(cover, (CW, CH), Image.LANCZOS)
    mask = Image.new('L', (CW, CH), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, CW - 1, CH - 1), 18, fill=255)
    x, y = 90 + col * (CW + GAP), 80 + row * (CH + GAP) + col * 60
    shadow = Image.new('RGBA', layer.size, (0, 0, 0, 0))
    shadow.paste(Image.new('RGBA', (CW, CH), (40, 0, 70, 140)), (x + 8, y + 14), mask)
    layer.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(14)))
    layer.paste(cover, (x, y), mask)
layer = layer.rotate(-12, resample=Image.BICUBIC)
img.alpha_composite(layer, (615, -150))
img = img.convert('RGB')

d = ImageDraw.Draw(img)
bold, semi, light = (ImageFont.truetype(FONTS + f, s) for f, s in (('Poppins-Bold.ttf', 78), ('Poppins-Medium.ttf', 34), ('Poppins-Regular.ttf', 28)))
d.text((70, 190), 'Emely', font=bold, fill='white')
d.text((70, 275), 'Aponte', font=bold, fill='white')
d.text((72, 395), 'Senior Product & UX/UI Designer', font=semi, fill='white')
d.text((72, 450), 'Design systems · Fintech · Proptech', font=light, fill=(240, 220, 250))
d.text((72, 545), 'emelyaponte.com', font=light, fill=(240, 220, 250))

img.save(os.path.join(HERE, '../public/og-default.jpg'), quality=90)
print('built public/og-default.jpg')
