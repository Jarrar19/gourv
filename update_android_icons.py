from PIL import Image
import os

sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
}

src_icon = "icons/icon-512.png"
if os.path.exists(src_icon):
    img = Image.open(src_icon)
    base_res = "android/app/src/main/res"
    
    for folder, dim in sizes.items():
        target_dir = os.path.join(base_res, folder)
        if os.path.exists(target_dir):
            resized = img.resize((dim, dim), Image.Resampling.LANCZOS)
            resized.save(os.path.join(target_dir, "ic_launcher.png"), "PNG")
            resized.save(os.path.join(target_dir, "ic_launcher_round.png"), "PNG")
            resized.save(os.path.join(target_dir, "ic_launcher_foreground.png"), "PNG")
            print(f"Updated icons in {folder} ({dim}x{dim})")

print("Android mipmap icons updated successfully!")
