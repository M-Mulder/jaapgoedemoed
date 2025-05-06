"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// Define the structure of a guestbook entry
interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

// Generate a simple math challenge
const generateMathChallenge = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return {
    question: `${num1} + ${num2}`,
    answer: (num1 + num2).toString()
  };
};

const GuestbookPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize with placeholder challenge that will be replaced on client
  const [challenge, setChallenge] = useState({ question: 'Loading...', answer: '' });
  const [userAnswer, setUserAnswer] = useState('');
  
  // Initialize the math challenge on client-side only
  useEffect(() => {
    setChallenge(generateMathChallenge());
  }, []);

  // Fetch entries from API
  useEffect(() => {
    const fetchEntries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/guestbook');
        if (!response.ok) {
          throw new Error('Failed to fetch entries');
        }
        const data = await response.json();
        setEntries(data);
      } catch (err) {
        console.error('Error fetching entries:', err);
        setError('Failed to load guestbook entries. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  // Generate a new challenge when the form is submitted
  const refreshChallenge = () => {
    setChallenge(generateMathChallenge());
    setUserAnswer('');
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    // Form validation
    if (!name.trim() || !message.trim()) {
      setError("Name and message cannot be empty.");
      return;
    }
    
    // Verify challenge answer
    if (userAnswer !== challenge.answer) {
      setError("Incorrect answer to the verification question. Please try again.");
      refreshChallenge();
      return;
    }

    // Submit the new entry to the API
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit entry');
      }

      // Get the new entry back from the response
      const newEntry = await response.json();
      
      // Update the entries state
      setEntries(prevEntries => [newEntry, ...prevEntries]);
      
      // Clear form
      setName('');
      setMessage('');
      setUserAnswer('');
      refreshChallenge();
      
      // Show success message
      setSuccess("Thank you for signing the guestbook!");
      
      // Refresh the page to ensure data is updated with the Next.js cache
      router.refresh();
      
      // Scroll to the top of entries after submission
      setTimeout(() => {
        const entriesSection = document.getElementById('entries-section');
        if (entriesSection) {
          entriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      console.error('Error submitting entry:', err);
      setError('Failed to save your entry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container-narrow py-16">
      <h1 className="page-title mb-12">Guestbook</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Submission Form */}
        <div>
          <h2 className="section-title mb-6">Sign the Guestbook</h2>
          
          <div className="bg-background-light p-6 rounded-lg border border-border">
            {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-800/50 rounded text-red-200">
                <p>{error}</p>
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-900/20 border border-green-800/50 rounded text-green-200">
                <p>{success}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text font-serif mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text font-serif mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="Share your thoughts about the artworks or website..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {/* Verification Challenge */}
              <div>
                <label htmlFor="verification" className="block text-text font-serif mb-2">
                  Verification: What is {challenge.question}?
                </label>
                <input
                  type="text"
                  id="verification"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="Enter your answer"
                  required
                  disabled={isSubmitting || challenge.question === 'Loading...'}
                />
                <p className="text-sm text-text-muted mt-1">Simple verification to prevent spam</p>
              </div>
              
              <button
                type="submit"
                className={`px-6 py-3 bg-accent text-white font-medium rounded-md transition-colors ${
                  isSubmitting || challenge.question === 'Loading...' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent/90'
                }`}
                disabled={isSubmitting || challenge.question === 'Loading...'}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Comment'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Display Entries */}
        <div id="entries-section">
          <h2 className="section-title mb-6">Recent Comments</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
          ) : entries.length === 0 ? (
            <div className="bg-background-light p-6 rounded-lg border border-border text-center">
              <p className="text-text-muted">No comments yet. Be the first to sign the guestbook!</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {entries.map((entry) => (
                <div key={entry.id} className="p-4 bg-background-light rounded-lg border border-border">
                  <p className="text-text mb-3">{entry.message}</p>
                  <div className="flex justify-between items-center text-sm text-text-muted">
                    <span className="font-medium">— {entry.name}</span>
                    <span>{formatDate(entry.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default GuestbookPage;
