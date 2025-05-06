# PowerShell script to update imports in the necessary files

# Define the files to update
$filesToUpdate = @(
    "src/app/page.tsx",
    "src/app/artworks/page.tsx",
    "src/app/artworks/[slug]/page.tsx",
    "src/app/info/serious-art-piece/page.tsx",
    "src/app/artworks/composition-2017/page.tsx",
    "src/app/artworks/composition-no-2-2022/page.tsx",
    "src/app/artworks/porcupine-artworks/page.tsx"
)

# Function to update imports in a file
function Update-Imports {
    param (
        [string]$filePath
    )
    
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        
        # Replace import statements
        $updatedContent = $content -replace "import \{ artworks(.*) from '@/lib/placeholder-data';", "import { artworks$1 } from '@/lib/updated-artwork-data';"
        
        # Write the updated content back to the file
        Set-Content -Path $filePath -Value $updatedContent
        
        Write-Host "Updated imports in $filePath"
    } else {
        Write-Host "File not found: $filePath"
    }
}

# Update imports in each file
foreach ($file in $filesToUpdate) {
    Update-Imports -filePath $file
}

Write-Host "Import updates complete."
