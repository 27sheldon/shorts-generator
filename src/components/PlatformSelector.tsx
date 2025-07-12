import React, { useState } from 'react';

const platforms = [
  { name: 'YouTube Shorts', value: 'youtube' },
  { name: 'Instagram Reels', value: 'instagram' },
  { name: 'TikTok Reels', value: 'tiktok' },
];

const PlatformSelector = () => {
  const [selected, setSelected] = useState('youtube');

  return (
    <div className="flex gap-6 mb-8">
      {platforms.map((p) => (
        <button
          key={p.value}
          className={`px-6 py-2 rounded-2xl font-futuristic text-lg shadow-md transition backdrop-blur-xl ${selected === p.value ? 'bg-skylrkAccent text-white scale-105' : 'bg-skylrkCard/70 text-skylrkText hover:bg-skylrkAccent/40'}`}
          onClick={() => setSelected(p.value)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
};

export default PlatformSelector; 