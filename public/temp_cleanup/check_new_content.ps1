# PowerShell script to check new content and ensure proper organization

# Define the 2024 directory
$newContentDir = "public/2024"

# Create a report file
$reportPath = "public/temp_cleanup/new_content_report.txt"
"New Content Report" | Out-File -FilePath $reportPath
"Generated: $(Get-Date)" | Out-File -FilePath $reportPath -Append
"" | Out-File -FilePath $reportPath -Append

# Check what's currently in the 2024 folder
"## Current Content in 2024 Folder" | Out-File -FilePath $reportPath -Append
if (Test-Path $newContentDir) {
    $files = Get-ChildItem -Path $newContentDir -File -Recurse
    
    if ($files.Count -eq 0) {
        "No files found in the 2024 folder." | Out-File -FilePath $reportPath -Append
    } else {
        foreach ($file in $files) {
            "- $($file.Name)" | Out-File -FilePath $reportPath -Append
        }
    }
} else {
    "The 2024 folder does not exist." | Out-File -FilePath $reportPath -Append
}

"" | Out-File -FilePath $reportPath -Append

# Check for files from 2024 that might be in other folders
"## Files from 2024 in Other Folders" | Out-File -FilePath $reportPath -Append

$artworkDirs = @(
    "public/Interviuw",
    "public/Large abstract Artworks 1990 - 20",
    "public/Old stock paper Artworks 2005 - 20",
    "public/Figurative Artworks 1980 -1989",
    "public/James Joyce Artworks",
    "public/Passed Exhibitions"
)

$found2024Files = $false

foreach ($dir in $artworkDirs) {
    if (Test-Path $dir) {
        $files = Get-ChildItem -Path $dir -File -Recurse
        
        foreach ($file in $files) {
            $fileName = $file.Name
            
            # Check if filename contains 2024
            if ($fileName -match "2024" -or $fileName -match "24,") {
                $found2024Files = $true
                "Found 2024 file in $dir : $fileName" | Out-File -FilePath $reportPath -Append
            }
        }
    }
}

if (-not $found2024Files) {
    "No files from 2024 found in other folders." | Out-File -FilePath $reportPath -Append
}

"" | Out-File -FilePath $reportPath -Append

# Check if any files in the 2024 folder should be in a different category
"## Category Recommendations for 2024 Files" | Out-File -FilePath $reportPath -Append

if (Test-Path $newContentDir) {
    $files = Get-ChildItem -Path $newContentDir -File -Recurse
    
    foreach ($file in $files) {
        $fileName = $file.Name.ToLower()
        
        if ($fileName -match "joyce") {
            "- $($file.Name) might belong in the 'James Joyce Artworks' folder" | Out-File -FilePath $reportPath -Append
        }
        elseif ($fileName -match "abstract") {
            "- $($file.Name) might belong in the 'Large abstract Artworks' folder" | Out-File -FilePath $reportPath -Append
        }
        elseif ($fileName -match "stock" -or $fileName -match "paper") {
            "- $($file.Name) might belong in the 'Old stock paper Artworks' folder" | Out-File -FilePath $reportPath -Append
        }
        elseif ($fileName -match "figurative") {
            "- $($file.Name) might belong in the 'Figurative Artworks' folder" | Out-File -FilePath $reportPath -Append
        }
        elseif ($fileName -match "exhibition" -or $fileName -match "expo") {
            "- $($file.Name) might belong in the 'Passed Exhibitions' folder" | Out-File -FilePath $reportPath -Append
        }
    }
}

"" | Out-File -FilePath $reportPath -Append

# Recommendations
"## Recommendations for New Content" | Out-File -FilePath $reportPath -Append
"1. The 2024 folder currently contains hero images which appear to be for the website rather than artwork. Consider creating a separate 'Website Assets' folder for these types of images." | Out-File -FilePath $reportPath -Append
"2. If there are new artworks from 2024, they should be organized both by year (in the 2024 folder) and by category (in the appropriate category folder)." | Out-File -FilePath $reportPath -Append
"3. Consider creating a consistent naming convention for all artwork files, such as 'Title YYYY, dimensions.jpg'." | Out-File -FilePath $reportPath -Append

Write-Host "New content analysis complete. Report saved to $reportPath"
