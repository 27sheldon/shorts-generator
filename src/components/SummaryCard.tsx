import React from 'react';

const SummaryCard = () => {
  return (
    <div className="bg-skylrkCard/70 rounded-3xl shadow-lg p-6 flex flex-col items-center mb-8 max-w-xl mx-auto backdrop-blur-xl">
      <div className="font-futuristic text-base mb-2 tracking-widest">Interactive Summary</div>
      <div className="font-clean text-skylrkText/80 text-center">
        {/* Placeholder for AI-generated summary. Will be interactive. */}
        <span className="italic">Summary of your video will appear here...</span>
      </div>
    </div>
  );
};

export default SummaryCard; 