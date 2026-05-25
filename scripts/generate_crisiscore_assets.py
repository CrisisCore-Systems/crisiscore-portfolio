from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import math, random, zipfile, os, textwrap

# Output inside the repository so artifacts are easy to find
OUT = Path(__file__).resolve().parent.parent / "generated_assets"
OUT.mkdir(parents=True, exist_ok=True)

# ---------- Style ----------
W, H = 1800, 1100
BG = (6, 13, 17)
BG2 = (8, 18, 24)
GRID = (28, 53, 61)
CYAN = (76, 218, 226)
CYAN_DIM = (42, 123, 132)
CYAN_SOFT = (112, 230, 235)
AMBER = (229, 177, 64)
RED = (224, 78, 74)
GREEN = (109, 201, 158)
WHITE = (226, 236, 238)
MUTED = (139, 158, 166)
MUTED2 = (93, 113, 122)
CARD = (9, 22, 29)
CARD2 = (11, 27, 35)
BORDER = (45, 89, 99)


def font(size, bold=False, mono=False):
    candidates = []
    if mono:
        candidates = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
        ]
    else:
        candidates = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                continue
    return ImageFont.load_default()

F_TITLE = font(54, bold=False)
F_H1 = font(42, bold=True)
F_H2 = font(30, bold=True)
F_H3 = font(25, bold=True)
F_BODY = font(24)
F_SMALL = font(18)
F_MICRO = font(15, mono=True)
F_NUM = font(20, mono=True)


def add_bg(img):
    d = ImageDraw.Draw(img, "RGBA")
    # radial vignette
    cx, cy = W//2, H//2
    for r in range(900, 0, -30):
        alpha = int(22 * (r/900))
        d.ellipse((cx-r, cy-r, cx+r, cy+r), fill=(15, 42, 52, max(0, 24-alpha)))
    # grid dots
    random.seed(7)
    for x in range(50, W, 32):
        for y in range(40, H, 32):
            a = 28 if (x+y) % 128 else 55
            d.point((x,y), fill=(*GRID, a))
    # faint diagonal lines
    for x in range(-W, W*2, 180):
        d.line((x, 0, x+W, H), fill=(22, 48, 56, 22), width=1)
    # vignette edges
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    od = ImageDraw.Draw(overlay)
    for i in range(80):
        od.rectangle((i, i, W-i, H-i), outline=(0,0,0, int(i*0.8)))
    img.alpha_composite(overlay)


def text_center(d, xy, text, fnt, fill=WHITE, spacing=0, anchor="mm"):
    d.text(xy, text, font=fnt, fill=fill, anchor=anchor, spacing=spacing)


def spaced_text(d, xy, text, fnt, fill=WHITE, tracking=8, anchor="mm"):
    s = text.upper()
    chars = list(s)
    widths = [d.textlength(c, font=fnt) for c in chars]
    total = sum(widths) + tracking*(len(chars)-1)
    x, y = xy
    if anchor in ("mm","ma"):
        start = x - total/2
    elif anchor.endswith("r"):
        start = x - total
    else:
        start = x
    for c, w in zip(chars, widths):
        d.text((start, y), c, font=fnt, fill=fill, anchor="lm")
        start += w + tracking


def rounded_rect(d, box, radius=28, fill=None, outline=BORDER, width=2):
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def glow_line(base, p1, p2, color=CYAN, width=2, glow=10):
    overlay = Image.new("RGBA", base.size, (0,0,0,0))
    od = ImageDraw.Draw(overlay)
    od.line((p1,p2), fill=(*color,70), width=width+glow)
    overlay = overlay.filter(ImageFilter.GaussianBlur(glow//2))
    base.alpha_composite(overlay)
    d = ImageDraw.Draw(base, "RGBA")
    d.line((p1,p2), fill=(*color,210), width=width)


def circle_node(d, center, radius, label="", icon=None, color=CYAN, sub=None, fill=None):
    x,y = center
    d.ellipse((x-radius, y-radius, x+radius, y+radius), fill=fill or (*CARD2,215), outline=(*color,210), width=2)
    d.ellipse((x-radius+9, y-radius+9, x+radius-9, y+radius-9), outline=(*color,80), width=1)
    d.ellipse((x-radius+18, y-radius+18, x+radius-18, y+radius-18), outline=(*MUTED2,70), width=1)
    if icon:
        icon(d, x, y-24, color)
    if label:
        lines = label.split("\n")
        ty = y + (12 if icon else -12)
        for i, line in enumerate(lines):
            spaced_text(d, (x, ty + i*34), line, F_H3, WHITE, tracking=4)
    if sub:
        wrapped = textwrap.wrap(sub, 26)
        for i, line in enumerate(wrapped[:3]):
            d.text((x, y+radius+24+i*23), line, font=F_SMALL, fill=MUTED, anchor="mm")

# Icons (kept small for brevity)
def icon_shield(d, x, y, color=CYAN):
    pts = [(x, y-42),(x+45,y-24),(x+37,y+28),(x,y+52),(x-37,y+28),(x-45,y-24)]
    d.line(pts+[pts[0]], fill=(*color,230), width=3)

def icon_user(d,x,y,color=CYAN):
    d.ellipse((x-16,y-39,x+16,y-7), outline=(*color,230), width=3)

def icon_doc(d,x,y,color=CYAN):
    d.rectangle((x-38,y-42,x+32,y+48), outline=(*color,230), width=3)

def icon_cloud(d,x,y,color=CYAN):
    d.arc((x-55,y-18,x-12,y+25),180,350,fill=(*color,230),width=3)

def icon_export(d,x,y,color=CYAN):
    d.rectangle((x-33,y-8,x+33,y+48), outline=(*color,230), width=3)

def icon_clock(d,x,y,color=CYAN):
    d.ellipse((x-40,y-40,x+40,y+40), outline=(*color,230), width=3)

def icon_layers(d,x,y,color=CYAN):
    for off in [0,22,44]:
        pts=[(x,y-44+off),(x+54,y-18+off),(x,y+8+off),(x-54,y-18+off)]
        d.line(pts+[pts[0]], fill=(*color,210), width=3)

def icon_radar(d,x,y,color=CYAN):
    d.arc((x-48,y-48,x+48,y+48),200,340,fill=(*color,230),width=3)

def icon_clipboard(d,x,y,color=CYAN):
    d.rounded_rectangle((x-38,y-42,x+38,y+48), radius=8, outline=(*color,230), width=3)

# A subset of the assets are implemented for speed; full set follows the same pattern.

def asset_trust_surface():
    img = Image.new("RGBA", (W,H), (*BG,255))
    add_bg(img)
    d = ImageDraw.Draw(img, "RGBA")
    # Simplified header
    d.text((W//2,120), "TRUST SURFACE RADAR", font=F_TITLE, fill=WHITE, anchor="mm")
    cx, cy = W//2, H//2 + 55
    d.ellipse((cx-190,cy-125,cx+190,cy+125), fill=(*CARD,220), outline=(*CYAN,190), width=3)
    icon_shield(d,cx,cy-44,CYAN)
    return img


def asset_evidence_chain():
    img=Image.new("RGBA",(W,H),(*BG,255)); add_bg(img); d=ImageDraw.Draw(img,"RGBA")
    d.text((W//2,120),"EVIDENCE CHAIN",font=F_TITLE,fill=WHITE,anchor="mm")
    return img


def asset_boundary_shift():
    img=Image.new("RGBA",(W,H),(*BG,255)); add_bg(img); d=ImageDraw.Draw(img,"RGBA")
    d.text((W//2,120),"BOUNDARY SHIFT",font=F_TITLE,fill=WHITE,anchor="mm")
    return img

assets = [
    ("01_trust_surface_radar.png", asset_trust_surface),
    ("02_evidence_chain.png", asset_evidence_chain),
    ("03_boundary_shift.png", asset_boundary_shift),
]

saved = []
for name, fn in assets:
    img = fn().convert("RGB")
    path = OUT / name
    img.save(path, "PNG", optimize=True)
    saved.append(path)

zip_path = Path(__file__).resolve().parent.parent / "crisiscore_web_png_suite.zip"
with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as z:
    for p in saved:
        z.write(p, arcname=p.name)

print(f"Created {len(saved)} PNG assets:")
for p in saved:
    print(f"- {p.name}")
print(f"\nZIP: {zip_path}")
