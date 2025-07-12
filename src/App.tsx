import React from 'react';
import UploadCard from './components/UploadCard';
import PlatformSelector from './components/PlatformSelector';
import SummaryCard from './components/SummaryCard';
import ShortsCard from './components/ShortsCard';
import ModelInfo from './components/ModelInfo';
import FeedbackButton from './components/FeedbackButton';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-skylrkBg">
      <h1 className="font-futuristic text-4xl mt-8 mb-4 tracking-widest text-skylrkText drop-shadow">YouTube Shorts Generator</h1>
      <UploadCard />
      <PlatformSelector />
      {/* Summary and Shorts suggestions will appear after processing */}
      <SummaryCard />
      <div className="flex flex-col gap-8 mt-8 w-full max-w-2xl">
        {/* Example: Render 3 ShortsCards as placeholders */}
        <ShortsCard />
        <ShortsCard />
        <ShortsCard />
      </div>
      <ModelInfo />
      <FeedbackButton />
    </div>
  );
};

export default App; 