import React from 'react';

const FeedbackButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-skylrkAccent/80 rounded-full p-3 shadow-lg hover:scale-110 transition z-50 flex items-center justify-center"
      title="Send Feedback"
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>
  );
};

export default FeedbackButton; 