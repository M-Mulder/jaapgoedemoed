# PowerShell script to remove duplicate artwork files

# Create backup directory
$backupDir = "public/temp_cleanup/duplicates_backup"
New-Item -Path $backupDir -ItemType Directory -Force | Out-Null

# List of duplicates to remove (with backups)
$duplicatesToRemove = @(
    # Duplicates in Interviuw that exist in Large abstract Artworks
    "public/Interviuw/Ancient hand writing 1997, 42 x 30 cm.png",
    "public/Interviuw/Changing pattern with opening I 1990, 90 x 95 cm.jpg",
    "public/Interviuw/Changing pattern with relief I 1990, 100 x 100 cm.jpg",
    "public/Interviuw/Changing tiling on a wooden plank 1990, 60 x 200 cm.png",
    "public/Interviuw/Composition 2014, 100 x 100 cm (2).jpg",
    "public/Interviuw/Composition 2014, 100 x 100 cm.jpg",
    "public/Interviuw/Division of the plane no.png",
    
    # Duplicates in Interviuw that exist in Old stock paper Artworks
    "public/Interviuw/Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm.jpg",
    "public/Interviuw/Les Tramways de Kiew 2013, 40 x 50 cm.jpg",
    
    # Duplicates in Old stock paper Artworks
    "public/Old stock paper Artworks 2005 - 20/Aandeelkunstwerk-Belge-IMG_5244-8-juni-2017.png",
    "public/Old stock paper Artworks 2005 - 20/Aandeelkunstwerk-Donetz--24-01-2019.jpg"
)

# Process each duplicate
foreach ($file in $duplicatesToRemove) {
    if (Test-Path $file) {
        $fileName = Split-Path $file -Leaf
        $backupPath = Join-Path $backupDir $fileName
        
        # Copy to backup
        Copy-Item -Path $file -Destination $backupPath -Force
        Write-Host "Backed up: $file to $backupPath"
        
        # Remove the duplicate
        Remove-Item -Path $file -Force
        Write-Host "Removed duplicate: $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Duplicate removal complete. Backups saved to $backupDir"
