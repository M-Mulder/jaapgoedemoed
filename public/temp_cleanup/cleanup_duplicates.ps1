# PowerShell script to identify and handle duplicate artwork files

# Define the main artwork directories
$artworkDirs = @(
    "public/Interviuw",
    "public/Large abstract Artworks 1990 - 20",
    "public/Old stock paper Artworks 2005 - 20",
    "public/Figurative Artworks 1980 -1989",
    "public/James Joyce Artworks",
    "public/Passed Exhibitions",
    "public/2018",
    "public/2019",
    "public/2020",
    "public/2021",
    "public/2022",
    "public/2024",
    "public/Youth Artworks"
)

# Create a report file
$reportPath = "public/temp_cleanup/duplicates_report.txt"
"Duplicate Artwork Files Report" | Out-File -FilePath $reportPath
"Generated: $(Get-Date)" | Out-File -FilePath $reportPath -Append
"" | Out-File -FilePath $reportPath -Append

# Create a hashtable to track files by their base name (without extension)
$filesByBaseName = @{}
$filesByContent = @{}

# Function to get normalized base name (remove dimensions and dates for comparison)
function Get-NormalizedBaseName {
    param (
        [string]$fileName
    )
    
    # Remove dimensions pattern (e.g., "100 x 100 cm")
    $normalized = $fileName -replace '\d+ x \d+( x \d+)? cm', ''
    
    # Remove year patterns
    $normalized = $normalized -replace '\d{4}(,|\s|$)', ''
    
    # Remove other common patterns
    $normalized = $normalized -replace 'ca\.\s*', ''
    $normalized = $normalized -replace '\(\d+\)', ''
    $normalized = $normalized -replace 'No\.\s*\d+', ''
    
    # Clean up extra spaces and punctuation
    $normalized = $normalized -replace '\s+', ' '
    $normalized = $normalized.Trim(' ,-.')
    
    return $normalized
}

# First pass: collect all files
foreach ($dir in $artworkDirs) {
    if (Test-Path $dir) {
        $files = Get-ChildItem -Path $dir -File -Recurse
        
        foreach ($file in $files) {
            # Skip non-image files
            if ($file.Extension -notin @('.jpg', '.jpeg', '.png', '.gif', '.svg')) {
                continue
            }
            
            $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
            $normalizedName = Get-NormalizedBaseName $baseName
            
            if (-not $filesByBaseName.ContainsKey($normalizedName)) {
                $filesByBaseName[$normalizedName] = @()
            }
            
            $filesByBaseName[$normalizedName] += $file.FullName
            
            # Also track by file hash for exact duplicates
            $hash = (Get-FileHash -Path $file.FullName -Algorithm MD5).Hash
            
            if (-not $filesByContent.ContainsKey($hash)) {
                $filesByContent[$hash] = @()
            }
            
            $filesByContent[$hash] += $file.FullName
        }
    }
}

# Find duplicates by name
"## Duplicates by Similar Name" | Out-File -FilePath $reportPath -Append
$hasDuplicatesByName = $false

foreach ($normalizedName in $filesByBaseName.Keys) {
    $files = $filesByBaseName[$normalizedName]
    
    if ($files.Count -gt 1) {
        $hasDuplicatesByName = $true
        
        "Found $($files.Count) files with similar name: '$normalizedName'" | Out-File -FilePath $reportPath -Append
        
        foreach ($file in $files) {
            "  - $file" | Out-File -FilePath $reportPath -Append
        }
        
        "" | Out-File -FilePath $reportPath -Append
    }
}

if (-not $hasDuplicatesByName) {
    "No duplicates by similar name found." | Out-File -FilePath $reportPath -Append
}

"" | Out-File -FilePath $reportPath -Append

# Find exact duplicates by content
"## Exact Duplicates (Same File Content)" | Out-File -FilePath $reportPath -Append
$hasExactDuplicates = $false

foreach ($hash in $filesByContent.Keys) {
    $files = $filesByContent[$hash]
    
    if ($files.Count -gt 1) {
        $hasExactDuplicates = $true
        
        "Found $($files.Count) identical files:" | Out-File -FilePath $reportPath -Append
        
        foreach ($file in $files) {
            "  - $file" | Out-File -FilePath $reportPath -Append
        }
        
        "" | Out-File -FilePath $reportPath -Append
    }
}

if (-not $hasExactDuplicates) {
    "No exact duplicates found." | Out-File -FilePath $reportPath -Append
}

# Specific known duplicates
"" | Out-File -FilePath $reportPath -Append
"## Known Duplicates" | Out-File -FilePath $reportPath -Append

$knownDuplicates = @(
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Ancient hand writing 1997, 42 x 30 cm.png";
        "Duplicate" = "public/Interviuw/Ancient hand writing 1997, 42 x 30 cm.png"
    },
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg";
        "Duplicate" = "public/Interviuw/Changing pattern with opening I 1990, 90 x 95 cm.jpg"
    },
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Changing pattern with relief I 1990, 100 x 100 cm.jpg";
        "Duplicate" = "public/Interviuw/Changing pattern with relief I 1990, 100 x 100 cm.jpg"
    },
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png";
        "Duplicate" = "public/Interviuw/Changing tiling on a wooden plank 1990, 60 x 200 cm.png"
    },
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm (2).jpg";
        "Duplicate" = "public/Interviuw/Composition 2014, 100 x 100 cm (2).jpg"
    },
    @{
        "Original" = "public/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm.jpg";
        "Duplicate" = "public/Interviuw/Composition 2014, 100 x 100 cm.jpg"
    },
    @{
        "Original" = "public/Old stock paper Artworks 2005 - 20/Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm.jpg";
        "Duplicate" = "public/Interviuw/Les Tramways d'Iékaterinoslaw 2013, 40 x 50 cm.jpg"
    },
    @{
        "Original" = "public/Old stock paper Artworks 2005 - 20/Les Tramways de Kiew 2013, 40 x 50 cm.jpg";
        "Duplicate" = "public/Interviuw/Les Tramways de Kiew 2013, 40 x 50 cm.jpg"
    }
)

foreach ($pair in $knownDuplicates) {
    $original = $pair["Original"]
    $duplicate = $pair["Duplicate"]
    
    if ((Test-Path $original) -and (Test-Path $duplicate)) {
        "Confirmed duplicate:" | Out-File -FilePath $reportPath -Append
        "  Original: $original" | Out-File -FilePath $reportPath -Append
        "  Duplicate: $duplicate" | Out-File -FilePath $reportPath -Append
        "" | Out-File -FilePath $reportPath -Append
    }
}

# Recommendations
"" | Out-File -FilePath $reportPath -Append
"## Recommendations" | Out-File -FilePath $reportPath -Append
"1. The 'Interviuw' folder contains several duplicates that should be removed as they exist in their proper category folders." | Out-File -FilePath $reportPath -Append
"2. Consider standardizing file naming conventions across all artwork collections." | Out-File -FilePath $reportPath -Append
"3. Review the 'Old stock paper Artworks' folder for similar artworks with different years that might be better organized." | Out-File -FilePath $reportPath -Append

Write-Host "Duplicate analysis complete. Report saved to $reportPath"
