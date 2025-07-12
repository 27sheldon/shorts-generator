import React from 'react';

const ModelInfo = () => {
  return (
    <div className="fixed bottom-6 left-6 bg-skylrkCard/80 rounded-xl px-4 py-2 shadow-lg font-clean text-xs text-skylrkText/80 backdrop-blur-xl z-50">
      <span className="font-futuristic text-skylrkAccent mr-2">AI Model:</span>
      <span>OpenAI Whisper + GPT-4 (placeholder)</span>
      <span className="ml-2 italic text-skylrkText/60">Fast, accurate, and explains each step.</span>
    </div>
  );
};

export default ModelInfo; 