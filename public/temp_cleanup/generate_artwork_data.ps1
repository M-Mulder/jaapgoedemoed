# PowerShell script to generate comprehensive artwork data from the public folders

# Define the output file
$outputFile = "src/lib/updated-artwork-data.ts"

# Define the main artwork directories to scan
$artworkDirs = @(
    "public/Figurative Artworks 1980 -1989",
    "public/James Joyce Artworks",
    "public/Large abstract Artworks 1990 - 20",
    "public/Old stock paper Artworks 2005 - 20",
    "public/Interviuw",
    "public/Passed Exhibitions",
    "public/2018",
    "public/2019",
    "public/2020",
    "public/2021",
    "public/2022",
    "public/2024",
    "public/Youth Artworks"
)

# Create a hashtable to track processed files to avoid duplicates
$processedFiles = @{}

# Function to extract year from filename
function Get-YearFromFilename {
    param (
        [string]$fileName
    )
    
    # Try to extract year using regex
    if ($fileName -match '\b(19\d\d|20\d\d)\b') {
        return [int]$matches[1]
    }
    
    # Default to current year if no year found
    return (Get-Date).Year
}

# Function to extract dimensions from filename
function Get-DimensionsFromFilename {
    param (
        [string]$fileName
    )
    
    # Try to extract dimensions using regex
    if ($fileName -match '(\d+\s*x\s*\d+(?:\s*x\s*\d+)?\s*cm)') {
        return $matches[1]
    }
    
    # Default dimensions if not found
    return "Dimensions unknown"
}

# Function to extract medium from filename and category
function Get-MediumFromFilename {
    param (
        [string]$fileName,
        [string]$category
    )
    
    # Default medium based on category
    $defaultMedium = switch ($category) {
        "abstract" { "Mixed media on canvas" }
        "paper" { "Mixed media on paper" }
        "joyce" { "Mixed media" }
        "figurative" { "Oil on canvas" }
        "porcupine" { "Porcupine quills on panel" }
        "youth" { "Oil on carton" }
        default { "Mixed media" }
    }
    
    # Try to extract medium using regex
    if ($fileName -match '(oil|acrylic|mixed media|gouache|watercolor|pencil|charcoal|ink)') {
        return (Get-Culture).TextInfo.ToTitleCase($matches[1])
    }
    
    # Return default medium
    return $defaultMedium
}

# Function to generate a slug from title
function Get-SlugFromTitle {
    param (
        [string]$title
    )
    
    # Convert to lowercase
    $slug = $title.ToLower()
    
    # Replace spaces with hyphens
    $slug = $slug -replace '\s+', '-'
    
    # Remove special characters
    $slug = $slug -replace '[^a-z0-9\-]', ''
    
    # Remove multiple hyphens
    $slug = $slug -replace '-+', '-'
    
    # Trim hyphens from start and end
    $slug = $slug.Trim('-')
    
    return $slug
}

# Function to determine category based on directory and filename
function Get-CategoryFromPath {
    param (
        [string]$path,
        [string]$fileName
    )
    
    if ($path -match "Figurative Artworks") {
        return "figurative"
    }
    elseif ($path -match "James Joyce") {
        return "joyce"
    }
    elseif ($path -match "Large abstract") {
        return "abstract"
    }
    elseif ($path -match "Old stock paper") {
        return "paper"
    }
    elseif ($fileName -match "porcupine|quill") {
        return "porcupine"
    }
    elseif ($path -match "Youth") {
        return "youth"
    }
    else {
        # Try to determine from filename
        if ($fileName -match "abstract|composition|pattern|tiling|division") {
            return "abstract"
        }
        elseif ($fileName -match "joyce|james") {
            return "joyce"
        }
        elseif ($fileName -match "paper|stock|tramway|chemin|bouteille") {
            return "paper"
        }
        elseif ($fileName -match "portrait|figure|egyptian") {
            return "figurative"
        }
        else {
            return "others"
        }
    }
}

# Function to clean up title from filename
function Get-CleanTitle {
    param (
        [string]$fileName
    )
    
    # Remove file extension
    $title = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
    
    # Remove year and dimensions pattern
    $title = $title -replace '\b(19\d\d|20\d\d)\b.*$', ''
    $title = $title -replace '\d+\s*x\s*\d+(?:\s*x\s*\d+)?\s*cm.*$', ''
    
    # Remove common prefixes/suffixes
    $title = $title -replace '^(The-|the-)', ''
    
    # Replace hyphens with spaces
    $title = $title -replace '-', ' '
    
    # Clean up extra spaces
    $title = $title -replace '\s+', ' '
    
    # Trim spaces
    $title = $title.Trim()
    
    # Capitalize first letter of each word
    $title = (Get-Culture).TextInfo.ToTitleCase($title)
    
    return $title
}

# Function to generate a description based on title, year, and category
function Get-Description {
    param (
        [string]$title,
        [int]$year,
        [string]$category,
        [string]$medium
    )
    
    $descriptions = @{
        "abstract" = @(
            "A geometric composition exploring spatial relationships and color harmony, with carefully balanced elements creating a meditative visual experience.",
            "A sophisticated arrangement of forms and colors that investigates the relationship between structure and intuition in abstract composition.",
            "An exploration of pattern and rhythm through geometric abstraction, creating a dynamic visual field that rewards extended viewing."
        )
        "paper" = @(
            "A mixed media work incorporating historical documents and ephemera, exploring themes of memory, history, and cultural exchange.",
            "A composition that integrates archival materials with contemporary artistic elements, creating a dialogue between past and present.",
            "A work that transforms historical paper documents into a contemporary artistic statement, preserving fragments of cultural memory."
        )
        "joyce" = @(
            "A work inspired by the literary innovations of James Joyce, translating textual complexity into visual form.",
            "An artistic response to Joyce's literary experiments, exploring the relationship between language and visual expression.",
            "A composition that draws on Joycean themes of consciousness, memory, and urban experience."
        )
        "figurative" = @(
            "A figurative work that balances representational elements with abstract compositional principles, creating a dynamic tension between recognition and formal exploration.",
            "A composition that reinterprets traditional figurative approaches through a contemporary lens, exploring the expressive potential of the human form.",
            "A work that investigates the relationship between figure and ground, creating a spatial ambiguity that activates the entire pictorial field."
        )
        "porcupine" = @(
            "An innovative work incorporating porcupine quills as a primary medium, creating a textured surface with natural materials that explores pattern and form.",
            "A composition that utilizes the unique material properties of porcupine quills to create visual rhythms and textural contrasts.",
            "An experimental work that transforms natural materials into a sophisticated exploration of line, pattern, and dimensional space."
        )
        "youth" = @(
            "An early work demonstrating the artist's formative explorations of color, form, and composition.",
            "A piece from the artist's developmental period, showing the emergence of themes and approaches that would characterize later work.",
            "An early composition revealing the artist's initial investigations into pictorial space and expressive potential."
        )
        "others" = @(
            "A work that explores alternative materials and approaches, expanding the artist's visual vocabulary beyond traditional media.",
            "An experimental composition that investigates the expressive potential of unconventional materials and techniques.",
            "A piece that demonstrates the artist's ongoing interest in material exploration and process-based approaches to composition."
        )
    }
    
    # Get random description from appropriate category
    $categoryDescriptions = $descriptions[$category]
    $baseDescription = $categoryDescriptions[(Get-Random -Maximum $categoryDescriptions.Count)]
    
    # Add year-specific context
    $yearContext = if ($year -lt 1990) {
        "Created during the artist's early period, "
    } elseif ($year -lt 2000) {
        "Part of the artist's explorations in the 1990s, "
    } elseif ($year -lt 2010) {
        "Developed during the artist's mature period, "
    } else {
        "A recent work that "
    }
    
    # Add medium-specific detail
    $mediumDetail = switch -Wildcard ($medium) {
        "*oil*" { "The oil medium allows for rich color relationships and textural depth." }
        "*acrylic*" { "The acrylic medium provides vibrant color and precise edge control." }
        "*mixed media*" { "The mixed media approach enables complex material relationships and textural variation." }
        "*paper*" { "The work on paper demonstrates the artist's facility with delicate materials and intimate scale." }
        "*canvas*" { "The canvas support provides an ideal surface for the artist's compositional approach." }
        "*quill*" { "The natural materials create a unique textural quality and dimensional presence." }
        default { "The chosen medium perfectly suits the artist's conceptual and formal intentions." }
    }
    
    return "$yearContext$baseDescription $mediumDetail"
}

# Initialize artwork ID counter
$idCounter = 1

# Initialize array to hold artwork data
$artworks = @()

# Process each directory
foreach ($dir in $artworkDirs) {
    if (Test-Path $dir) {
        $files = Get-ChildItem -Path $dir -File -Recurse -Include *.jpg,*.jpeg,*.png,*.gif
        
        foreach ($file in $files) {
            # Skip if we've already processed this file (by checking basename without extension)
            $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
            if ($processedFiles.ContainsKey($baseName)) {
                continue
            }
            
            # Skip files that are likely duplicates (very similar names)
            $isDuplicate = $false
            foreach ($processedName in $processedFiles.Keys) {
                # If names are very similar (e.g. differ only by a number suffix or slight variation)
                if (($processedName -replace '[0-9\-\(\)]', '') -eq ($baseName -replace '[0-9\-\(\)]', '')) {
                    $isDuplicate = $true
                    break
                }
            }
            
            if ($isDuplicate) {
                continue
            }
            
            # Mark as processed
            $processedFiles[$baseName] = $true
            
            # Extract information from filename
            $category = Get-CategoryFromPath -path $dir -fileName $file.Name
            $title = Get-CleanTitle -fileName $file.Name
            $year = Get-YearFromFilename -fileName $file.Name
            $dimensions = Get-DimensionsFromFilename -fileName $file.Name
            $medium = Get-MediumFromFilename -fileName $file.Name -category $category
            $slug = Get-SlugFromTitle -title $title
            
            # Generate description
            $description = Get-Description -title $title -year $year -category $category -medium $medium
            
            # Determine if featured (featured items are more recent or in specific categories)
            $featured = ($year -ge 2015) -or ($category -eq "porcupine") -or ($title -match "composition")
            
            # Create relative path for imagePath
            $relativePath = $file.FullName -replace [regex]::Escape("$PWD\"), ""
            $relativePath = $relativePath -replace "\\", "/"
            $relativePath = "/" + ($relativePath -replace "^public/", "")
            
            # Create artwork object
            $artwork = @{
                id = $idCounter.ToString()
                title = $title
                slug = $slug
                year = $year
                description = $description
                medium = $medium
                dimensions = $dimensions
                imagePath = $relativePath
                featured = $featured
                category = $category
            }
            
            # Add to artworks array
            $artworks += $artwork
            
            # Increment ID counter
            $idCounter++
        }
    }
}

# Sort artworks by year (newest first)
$artworks = $artworks | Sort-Object -Property @{Expression = "year"; Descending = $true}, @{Expression = "title"; Descending = $false}

# Generate TypeScript file content
$tsContent = @"
// Types for our placeholder data
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  year: number;
  description: string;
  medium: string;
  dimensions: string;
  imagePath: string;
  featured: boolean;
  category?: string; // Added to help with categorization
}

export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'solo' | 'group';
  description: string;
}

export interface Photograph {
  id: string;
  title: string;
  slug: string;
  year: number;
  description: string;
  location: string;
  imagePath: string;
}

// Artworks Collection - Auto-generated from public folders
export const artworks: Artwork[] = [
"@

# Add each artwork as a TypeScript object
foreach ($artwork in $artworks) {
    $tsContent += @"

  {
    id: '$($artwork.id)',
    title: '$($artwork.title -replace "'", "\'")',
    slug: '$($artwork.slug)',
    year: $($artwork.year),
    description: '$($artwork.description -replace "'", "\'")',
    medium: '$($artwork.medium -replace "'", "\'")',
    dimensions: '$($artwork.dimensions -replace "'", "\'")',
    imagePath: '$($artwork.imagePath)',
    featured: $($artwork.featured.ToString().ToLower()),
    category: '$($artwork.category)'
  },
"@
}

# Close the array
$tsContent += @"

];

// Import existing exhibitions, photographs, etc. from placeholder-data.ts
// This ensures we don't lose any existing data
import { exhibitions, photographs, atelierInfo, biographyContent, artistStatement, processDescription, ethnographicInfluence } from './placeholder-data';
export { exhibitions, photographs, atelierInfo, biographyContent, artistStatement, processDescription, ethnographicInfluence };
"@

# Write to file
$tsContent | Out-File -FilePath $outputFile -Encoding utf8

Write-Host "Generated artwork data with $($artworks.Count) artworks to $outputFile"
