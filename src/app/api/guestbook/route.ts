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
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading entries:', error);
    return [];
  }
}

// Function to write entries to the JSON file
function saveEntries(entries: GuestbookEntry[]): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(entries, null, 2));
    // Revalidate the guestbook page in the cache
    revalidatePath('/guestbook');
  } catch (error) {
    console.error('Error saving entries:', error);
  }
}

// GET handler for retrieving all entries
export async function GET() {
  const entries = getEntries();
  return NextResponse.json(entries);
}

// POST handler for adding a new entry
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the data
    if (!data.name || !data.message) {
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
    
    // Get existing entries and add the new one at the beginning
    const entries = getEntries();
    const updatedEntries = [newEntry, ...entries];
    
    // Save the updated entries
    saveEntries(updatedEntries);
    
    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { error: 'Failed to add entry' },
      { status: 500 }
    );
  }
}
