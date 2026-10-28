# Builds the Kuara cover (1920x1080) and portrait (1365x2048) from the Figma screen exports:
# landscape tablets tilted on Kuara purple, in the style of the PinsXP cover.
# Run from the repo root: python3 scripts/kuara-mockups.py
import os
from PIL import Image, ImageDraw, ImageFilter
A=os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/assets/projects/kuara/')
PURPLE=(106,44,143)     # Purple KUARA/01
DEEP=(76,24,108)

def screen(name):
    return Image.open(A+name).convert('RGB')

def device(img, W):
    """Screen inside a dark display bezel, like a tablet in landscape."""
    H=round(img.height*W/img.width); img=img.resize((W,H),Image.LANCZOS)
    b=round(W*0.03); R=round(W*0.05); r=round(W*0.012)
    out=Image.new('RGBA',(W+2*b,H+2*b),(0,0,0,0)); d=ImageDraw.Draw(out)
    d.rounded_rectangle((0,0,out.width-1,out.height-1),R,fill=(58,58,64))          # metal edge
    d.rounded_rectangle((4,4,out.width-5,out.height-5),R-4,fill=(16,16,20))         # glass bezel
    m=Image.new('L',(W,H),0); ImageDraw.Draw(m).rounded_rectangle((0,0,W-1,H-1),r,fill=255)
    out.paste(img,(b,b),m)
    cx=out.width//2; d.ellipse((cx-5,b//2-5,cx+5,b//2+5),fill=(40,40,48))            # camera
    return out

def compose(size, angle=-30, W=1150):
    big=Image.new('RGBA',size,PURPLE+(255,))
    # soft diagonal light, like the gradient behind the PinsXP phones
    g=Image.linear_gradient('L').resize(size).rotate(90)
    big=Image.composite(big, Image.new('RGBA',size,DEEP+(255,)), g.point(lambda v: 150+v*105//255))
    order=['dashboard.png','onboarding.png','qr-enviado.png','sucursales.png','sucursal-creada.png','qr-solicitud.png']
    gap=110; dw=device(screen(order[0]),W).width; dh=round(dw*0.66)
    cols=range(-1, size[0]//(dw+gap)+2)
    i=0
    for c in cols:
        x=c*(dw+gap); off=(c%2)*(dh//2+gap//2)
        for row in range(-1, size[1]//(dh+gap)+2):
            y=row*(dh+gap)+off-dh//3
            dev=device(screen(order[i%len(order)]),W); i+=1
            sh=Image.new('RGBA',dev.size,(20,4,32,150)); sh.putalpha(dev.split()[3].point(lambda v: 150 if v else 0))
            layer=Image.new('RGBA',size,(0,0,0,0)); layer.paste(sh,(x+30,y+50),sh)
            big.alpha_composite(layer.filter(ImageFilter.GaussianBlur(45)))
            big.alpha_composite(dev,(x,y))
    return big.rotate(angle, resample=Image.BICUBIC, fillcolor=PURPLE+(255,))

def crop(img, w, h, dx=0, dy=0):
    cx,cy=img.width//2+dx, img.height//2+dy
    return img.crop((cx-w//2, cy-h//2, cx-w//2+w, cy-h//2+h)).convert('RGB')

big=compose((4600,4600))
crop(big,2880,1620,dx=-120,dy=60).resize((1920,1080),Image.LANCZOS).save(A+"cover.jpg",quality=90)
crop(big,1820,2730,dx=-150,dy=-200).resize((1365,2048),Image.LANCZOS).save(A+"portrait.jpg",quality=90)
