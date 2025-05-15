import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

// Interface for a guestbook entry
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

// Get the data file path
const dataFilePath = path.join(process.cwd(), 'src/app/api/guestbook/data.json');

// Function to read entries from the JSON file
function getEntries(): GuestbookEntry[] {
  try {
    // Check if file exists
    if (!fs.existsSync(dataFilePath)) {
      console.log(`Data file not found at: ${dataFilePath}, initializing with empty array`);
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf8');
      return [];
    }
    
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    console.log(`Successfully read guestbook entries from: ${dataFilePath}`);
    
    if (!fileContents || fileContents.trim() === '') {
      console.log('File exists but is empty, returning empty array');
      return [];
    }
    
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading entries:', error);
    // Create the file with an empty array if it doesn't exist or has issues
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf8');
    } catch (writeError) {
      console.error('Failed to initialize data file:', writeError);
    }
    return [];
  }
}

// Function to write entries to the JSON file
function saveEntries(entries: GuestbookEntry[]): void {
  try {
    // Ensure the directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      console.log(`Creating directory: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the entries to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(entries, null, 2), 'utf8');
    console.log(`Successfully saved ${entries.length} entries to: ${dataFilePath}`);
    
    // Revalidate the guestbook page in the cache
    revalidatePath('/guestbook');
    console.log('Revalidated guestbook path in cache');
  } catch (error) {
    console.error('Error saving entries:', error);
    throw new Error(`Failed to save entries: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// GET handler for retrieving all entries
export async function GET() {
  const entries = getEntries();
  return NextResponse.json(entries);
}

// POST handler for adding a new entry
export async function POST(request: Request) {
  console.log('POST request received for guestbook entry');
  try {
    const data = await request.json();
    console.log('Received data:', data);
    
    // Validate the data
    if (!data.name || !data.message) {
      console.log('Validation failed: missing name or message');
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }
    
    // Create a new entry
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: data.name.trim(),
      message: data.message.trim(),
      timestamp: new Date().toISOString(),
    };
    console.log('Created new entry:', newEntry);
    
    // Get existing entries and add the new one at the beginning
    const entries = getEntries();
    console.log(`Retrieved ${entries.length} existing entries`);
    const updatedEntries = [newEntry, ...entries];
    
    // Save the updated entries
    try {
      saveEntries(updatedEntries);
      console.log('Entries saved successfully');
    } catch (saveError) {
      console.error('Failed to save entries:', saveError);
      return NextResponse.json(
        { error: 'Failed to save entry to the database' },
        { status: 500 }
      );
    }
    
    // Ensure the cache is invalidated to show new entries
    try {
      revalidatePath('/guestbook');
      console.log('Path revalidated successfully');
    } catch (revalidateError) {
      console.error('Failed to revalidate path:', revalidateError);
      // Continue even if revalidation fails
    }
    
    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { error: 'Failed to add entry' },
      { status: 500 }
    );
  }
}
