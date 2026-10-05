from PIL import Image, ImageDraw, ImageFont
import os

def create_jit_icon(size, output_path):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer circle/squircle with smooth padding
    pad = int(size * 0.05)
    r = int(size * 0.22)
    
    # Rounded background in JIT Navy #044475
    draw.rounded_rectangle(
        [pad, pad, size - pad, size - pad],
        radius=r,
        fill=(4, 68, 117, 255),
        outline=(241, 177, 68, 255),  # JIT Gold border
        width=max(2, int(size * 0.035))
    )
    
    # Subtle inner decorative ring
    inner_pad = int(size * 0.12)
    draw.rounded_rectangle(
        [inner_pad, inner_pad, size - inner_pad, size - inner_pad],
        radius=int(r * 0.7),
        outline=(241, 177, 68, 80),
        width=max(1, int(size * 0.015))
    )
    
    # Draw Navigation Arrow / Pin in the center
    cx, cy = size // 2, int(size * 0.44)
    scale = size / 200.0
    
    # Stylized navigation chevron/compass pointing up-right
    points = [
        (cx, cy - int(38 * scale)),
        (cx + int(32 * scale), cy + int(30 * scale)),
        (cx, cy + int(18 * scale)),
        (cx - int(32 * scale), cy + int(30 * scale)),
    ]
    draw.polygon(points, fill=(241, 177, 68, 255))
    
    # Center divider in arrow
    right_wing = [
        (cx, cy - int(38 * scale)),
        (cx + int(32 * scale), cy + int(30 * scale)),
        (cx, cy + int(18 * scale)),
    ]
    draw.polygon(right_wing, fill=(224, 159, 48, 255))
    
    # Draw "JIT" text at the bottom
    font = None
    try:
        font_path = "C:\\Windows\\Fonts\\arialbd.ttf"
        if os.path.exists(font_path):
            font = ImageFont.truetype(font_path, int(28 * scale))
    except Exception:
        pass
    
    text = "JIT NAV"
    if font:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        tx = (size - tw) // 2
        ty = int(size * 0.70)
        draw.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))
    
    img.save(output_path, "PNG")
    print(f"Generated icon: {output_path} ({size}x{size})")

if __name__ == "__main__":
    os.makedirs("icons", exist_ok=True)
    create_jit_icon(192, "icons/icon-192.png")
    create_jit_icon(512, "icons/icon-512.png")
    create_jit_icon(64, "icons/favicon.png")
