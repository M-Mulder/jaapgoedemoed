import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// For local development, we'll continue to use the file system
// In production on Vercel, we'll use environment variables to detect and use appropriate storage
import fs from 'fs';
import path from 'path';

// Interface for a guestbook entry
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

// Get the data file path for local development
const dataFilePath = path.join(process.cwd(), 'src/app/api/guestbook/data.json');

// Determine if we're running on Vercel
const isVercel = process.env.VERCEL === '1';

// Add a comment to explain the storage situation
/**
 * IMPORTANT: This implementation uses file system storage which works for local development
 * but NOT in production on Vercel. For production use, you should implement:
 * 
 * 1. A database solution like MongoDB, PostgreSQL via Vercel Postgres, or
 * 2. Vercel KV (Key-Value) store, or
 * 3. External storage like AWS S3
 * 
 * Current workaround: In production on Vercel, comments are stored in memory and will be lost
 * when the serverless function goes cold or is redeployed.
 * 
 * TODO: Implement proper database storage before going to production.
 */

// In-memory store for Vercel environment as a temporary workaround
// Note: This is NOT a production solution as it will reset when functions go cold
// Preloaded with some sample entries for demonstration purposes
let inMemoryEntries: GuestbookEntry[] = [
  {
    "id": "1652651245723",
    "name": "Mikhail",
    "message": "где я могу с вами связаться?)",
    "timestamp": "2025-05-15T22:27:25.723Z"
  },
  {
    "id": "1652651139462",
    "name": "Test User",
    "message": "This is a test comment to verify persistence.",
    "timestamp": "2025-05-15T22:25:39.462Z"
  }
];

// Function to read entries
function getEntries(): GuestbookEntry[] {
  if (isVercel) {
    // Use in-memory storage for Vercel (temporary workaround)
    console.log('Using in-memory storage for entries');
    return inMemoryEntries;
  } else {
    // Use file system for local development
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
}

// Function to save entries
function saveEntries(entries: GuestbookEntry[]): void {
  if (isVercel) {
    // Use in-memory storage for Vercel (temporary workaround)
    console.log('Saving entries to in-memory storage');
    inMemoryEntries = entries;
    
    // Revalidate the guestbook page in the cache
    try {
      revalidatePath('/guestbook');
      console.log('Revalidated guestbook path in cache');
    } catch (revalidateError) {
      console.error('Failed to revalidate path:', revalidateError);
    }
  } else {
    // Use file system for local development
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
