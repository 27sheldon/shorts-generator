import React, { useRef } from 'react';

const UploadCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-skylrkCard/80 rounded-3xl shadow-xl p-8 flex flex-col items-center mb-8 backdrop-blur-xl" style={{ minWidth: 340 }}>
      <div className="text-lg font-futuristic mb-4 tracking-widest">Upload Video or Paste YouTube Link</div>
      <input
        type="text"
        placeholder="Paste YouTube link here..."
        className="w-full mb-4 px-4 py-2 rounded-xl bg-white/60 border-none focus:ring-2 focus:ring-skylrkAccent outline-none text-skylrkText font-clean"
      />
      <div className="flex items-center gap-4">
        <button
          className="px-6 py-2 rounded-xl bg-skylrkAccent text-white font-futuristic shadow hover:scale-105 transition"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Video
        </button>
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default UploadCard; 