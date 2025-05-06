"use client";

import React, { useState, useEffect, FormEvent } from 'react';

// Define the structure of a guestbook entry
interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string; // Store timestamp as ISO string
}

const GuestbookPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Placeholder for fetching entries - replace with API call later
  useEffect(() => {
    // Simulate fetching data
    const fetchEntries = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // In a real app, fetch from '/api/guestbook'
        // For now, use dummy data or leave empty
        const dummyEntries: GuestbookEntry[] = [
          { id: '1', name: 'Alice', message: 'Lovely website!', timestamp: new Date().toISOString() },
          { id: '2', name: 'Bob', message: 'Great collection of art.', timestamp: new Date(Date.now() - 3600 * 1000).toISOString() }, // 1 hour ago
        ];
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setEntries(dummyEntries);
      } catch (err) {
        setError('Failed to load guestbook entries.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Name and message cannot be empty.");
      return;
    }
    setError(null);

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(), // Temporary ID generation
      name,
      message,
      timestamp: new Date().toISOString(),
    };

    // Simulate adding entry - replace with POST request later
    try {
      // In a real app, POST to '/api/guestbook'
      // For now, just update local state
      setEntries(prevEntries => [newEntry, ...prevEntries]); // Add to the top
      setName(''); // Clear form
      setMessage(''); // Clear form
    } catch (err) {
      setError('Failed to submit entry.');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Guestbook</h1>

      {/* Submission Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Entries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : entries.length === 0 ? (
          <p>No comments yet. Be the first to leave one!</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <p className="text-gray-800 mb-2">{entry.message}</p>
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>- {entry.name}</span>
                <span>{new Date(entry.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GuestbookPage;
