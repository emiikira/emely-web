# Builds the default social-sharing image (1200x630) used when a page has no image of its own.
#   python3 scripts/og-image.py   → public/og-default.jpg
import os

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1200, 630
PURPLE, FUCHSIA = (102, 0, 191), (201, 0, 157)
FONTS = '/usr/share/fonts/truetype/google-fonts/'

# Diagonal brand gradient
big = Image.linear_gradient('L').resize((1700, 1700)).rotate(35)
grad = big.crop(((1700 - W) // 2, (1700 - H) // 2, (1700 + W) // 2, (1700 + H) // 2))
img = Image.composite(Image.new('RGB', (W, H), FUCHSIA), Image.new('RGB', (W, H), PURPLE), grad)

# Portrait in a circle, on the right
photo = Image.open(os.path.join(HERE, '../src/assets/photos/emely-square.jpg')).convert('RGB').resize((460, 460), Image.LANCZOS)
mask = Image.new('L', (460, 460), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 459, 459), fill=255)
ring = Image.new('RGB', (480, 480), (255, 255, 255))
ringmask = Image.new('L', (480, 480), 0)
ImageDraw.Draw(ringmask).ellipse((0, 0, 479, 479), fill=255)
img.paste(ring, (660, 75), ringmask)
img.paste(photo, (670, 85), mask)

d = ImageDraw.Draw(img)
bold, semi, light = (ImageFont.truetype(FONTS + f, s) for f, s in (('Poppins-Bold.ttf', 78), ('Poppins-Medium.ttf', 34), ('Poppins-Regular.ttf', 28)))
d.text((70, 190), 'Emely', font=bold, fill='white')
d.text((70, 275), 'Aponte', font=bold, fill='white')
d.text((72, 395), 'Senior Product & UX/UI Designer', font=semi, fill='white')
d.text((72, 450), 'Design systems · Fintech · Proptech', font=light, fill=(240, 220, 250))
d.text((72, 545), 'emelyaponte.com', font=light, fill=(240, 220, 250))

img.save(os.path.join(HERE, '../public/og-default.jpg'), quality=90)
print('built public/og-default.jpg')
