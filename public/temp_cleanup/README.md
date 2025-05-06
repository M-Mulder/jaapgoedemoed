# Artwork Collection Cleanup Tools

This directory contains scripts to help organize and clean up the artwork collection for Jaap Goedemoed's website.

## Overview

The artwork collection is spread across multiple folders:
- Year-based folders (2018, 2019, 2020, 2021, 2022, 2024)
- Category-based folders (Figurative Artworks, James Joyce Artworks, Large abstract Artworks, etc.)
- Other folders (Interviuw, Passed Exhibitions, etc.)

These scripts help identify and resolve issues such as duplicate files and improper organization.

## Scripts

### 1. cleanup_duplicates.ps1

This script analyzes the artwork collection to identify duplicate files across different folders. It generates a comprehensive report that includes:
- Files with similar names
- Files with identical content
- Known duplicates that have been manually identified
- Recommendations for cleanup

**Usage:**
```
powershell -ExecutionPolicy Bypass -File public/temp_cleanup/cleanup_duplicates.ps1
```

### 2. remove_duplicates.ps1

This script removes identified duplicate files, creating backups before deletion. It focuses on:
- Duplicates in the Interviuw folder that exist in their proper category folders
- Redundant files with different naming conventions

**Usage:**
```
powershell -ExecutionPolicy Bypass -File public/temp_cleanup/remove_duplicates.ps1
```

### 3. check_new_content.ps1

This script examines the new content in the 2024 folder and checks if it's properly organized. It also looks for 2024 files that might be in other folders. The report includes:
- Current content in the 2024 folder
- Files from 2024 found in other folders
- Category recommendations for 2024 files
- General recommendations for organizing new content

**Usage:**
```
powershell -ExecutionPolicy Bypass -File public/temp_cleanup/check_new_content.ps1
```

## Recommended Workflow

1. First, run `cleanup_duplicates.ps1` to generate a report of all duplicates
2. Review the report at `public/temp_cleanup/duplicates_report.txt`
3. If the identified duplicates look correct, run `remove_duplicates.ps1` to clean them up
4. Run `check_new_content.ps1` to analyze the new content
5. Review the report at `public/temp_cleanup/new_content_report.txt`
6. Manually organize any new content based on the recommendations

## Backup

All removed files are backed up to `public/temp_cleanup/duplicates_backup/` before deletion. If you need to restore any files, you can find them there.

## Recommendations for Future Organization

1. **Consistent Naming Convention**: Use a standard format like "Title YYYY, dimensions.jpg" for all artwork files
2. **Dual Organization**: For new artworks, consider placing them both in year folders and category folders
3. **Website Assets**: Create a separate folder for website-specific images (like hero images) that aren't actual artworks
4. **Avoid Duplicates**: Ensure that each artwork appears in only one location to prevent confusion and save space
