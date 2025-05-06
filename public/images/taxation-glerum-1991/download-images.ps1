# PowerShell script to download the required images for the taxation-glerum-1991 page

# Create the directory if it doesn't exist
$directory = "$PSScriptRoot"
if (-not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory -Force
}

# Define the image URLs - these are placeholders, replace with actual URLs
$imageUrls = @{
    "Jan-Pieter-Glerum-768x527.jpg" = "https://example.com/Jan-Pieter-Glerum-768x527.jpg"
    "Taxatie-Pieter-Glerum-1991.jpg" = "https://example.com/Taxatie-Pieter-Glerum-1991.jpg"
}

# Download each image
foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $directory $image.Key
    Write-Host "Downloading $($image.Key) to $outputPath..."
    
    try {
        Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
        Write-Host "Downloaded $($image.Key) successfully." -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($image.Key): $_" -ForegroundColor Red
    }
}

Write-Host "`nNOTE: This script uses placeholder URLs. Please replace them with the actual image URLs in the script before running it." -ForegroundColor Yellow
Write-Host "Alternatively, you can manually place the following images in this directory:" -ForegroundColor Yellow
Write-Host "1. Jan-Pieter-Glerum-768x527.jpg - A portrait photo of Jan Pieter Glerum" -ForegroundColor Yellow
Write-Host "2. Taxatie-Pieter-Glerum-1991.jpg - The taxation document from 1991" -ForegroundColor Yellow
