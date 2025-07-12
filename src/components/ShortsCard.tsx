import React from 'react';

const ShortsCard = () => {
  return (
    <div className="bg-skylrkCard/80 rounded-3xl shadow-xl p-6 flex flex-col items-center gap-4 backdrop-blur-xl relative overflow-hidden" style={{ minHeight: 260 }}>
      {/* Blurred floating effect */}
      <div className="absolute inset-0 z-0 blur-2xl opacity-40" style={{ background: 'linear-gradient(120deg, #b2e0e6 40%, #eaf6fb 100%)' }} />
      <div className="z-10 w-full flex flex-col items-center">
        {/* Video preview placeholder */}
        <div className="w-40 h-64 bg-skylrkAccent/30 rounded-2xl mb-4 flex items-center justify-center shadow-inner">
          <span className="text-skylrkText/60 font-futuristic">Video Preview</span>
        </div>
        {/* Subtitle editor placeholder */}
        <textarea
          className="w-full rounded-xl p-2 bg-white/60 text-skylrkText font-clean mb-2 resize-none focus:ring-2 focus:ring-skylrkAccent outline-none"
          rows={2}
          placeholder="Edit subtitles..."
        />
        <button className="px-5 py-2 rounded-xl bg-skylrkAccent text-white font-futuristic shadow hover:scale-105 transition">
          Download
        </button>
      </div>
    </div>
  );
};

export default ShortsCard; 