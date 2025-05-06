# PowerShell script to organize website assets

# Create website assets directory
$websiteAssetsDir = "public/Website Assets"
New-Item -Path $websiteAssetsDir -ItemType Directory -Force | Out-Null

# Create subdirectories
$heroImagesDir = Join-Path $websiteAssetsDir "Hero Images"
$iconsDir = Join-Path $websiteAssetsDir "Icons"
New-Item -Path $heroImagesDir -ItemType Directory -Force | Out-Null
New-Item -Path $iconsDir -ItemType Directory -Force | Out-Null

# Move hero images from 2024 folder to Hero Images folder
$heroImages = @(
    "public/2024/hero_image_1.jpg",
    "public/2024/hero_image_2.jpg"
)

foreach ($image in $heroImages) {
    if (Test-Path $image) {
        $fileName = Split-Path $image -Leaf
        $destPath = Join-Path $heroImagesDir $fileName
        
        # Copy to new location
        Copy-Item -Path $image -Destination $destPath -Force
        Write-Host "Moved: $image to $destPath"
    } else {
        Write-Host "File not found: $image"
    }
}

# Move SVG icons to Icons folder
$svgIcons = @(
    "public/file.svg",
    "public/globe.svg",
    "public/next.svg",
    "public/vercel.svg",
    "public/window.svg"
)

foreach ($icon in $svgIcons) {
    if (Test-Path $icon) {
        $fileName = Split-Path $icon -Leaf
        $destPath = Join-Path $iconsDir $fileName
        
        # Copy to new location
        Copy-Item -Path $icon -Destination $destPath -Force
        Write-Host "Moved: $icon to $destPath"
    } else {
        Write-Host "File not found: $icon"
    }
}

Write-Host "Website assets organization complete."
