# Script to rename files with apostrophes to simpler names

# Define the source directory
$sourceDir = "public\Old stock paper Artworks 2005 - 20"

# Define the file mappings (old name -> new name)
$fileMappings = @{
    "Société d'Etudes des Entreprises Russes 2007, 40 x 50 cm.jpg" = "Societe-Etudes-Entreprises-Russes-2007.jpg"
    "Société d'Électricité d'Odessa 2006, 40 x 50 cm.jpg" = "Societe-Electricite-Odessa-2006.jpg"
    "Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm.jpg" = "Les-Tramways-Iekaterinoslaw-2013.jpg"
    "Tramways d'Odessa II 2008, 40 x 50 cm.jpg" = "Tramways-Odessa-II-2008.jpg"
}

# Rename the files
foreach ($oldName in $fileMappings.Keys) {
    $oldPath = Join-Path -Path $sourceDir -ChildPath $oldName
    $newPath = Join-Path -Path $sourceDir -ChildPath $fileMappings[$oldName]
    
    if (Test-Path $oldPath) {
        Write-Host "Renaming '$oldName' to '$($fileMappings[$oldName])'"
        Copy-Item -Path $oldPath -Destination $newPath -Force
        Write-Host "File copied successfully"
    } else {
        Write-Host "File not found: $oldPath"
    }
}

Write-Host "File renaming complete"
