'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTile(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleTileClick = (tile: number) => {
    if (selectedTile === tile) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTile(tile);
      setIsTransitioning(false);
    }, 150); // Match the transition duration
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <main className={`flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 perspective-1000 transition-all duration-150 ${
        selectedTile ? 'mr-[640px]' : 'mr-0'
      }`}>
        <div className={`flex gap-0 w-full transition-all duration-150 ${
          selectedTile 
            ? 'max-w-[70vw] md:max-w-[40vw]' 
            : 'max-w-[90vw] md:max-w-[60vw]'
        } h-[60vh]`}>
          {[1, 2, 3, 4, 5].map((tile) => (
            <div
              key={tile}
              style={{ backgroundColor: '#e5e7eb' }}
              onClick={() => handleTileClick(tile)}
              className={`w-full transition-all duration-150 ease-out hover:scale-110 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 hover:rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 border border-gray-300 transform-style-3d backface-visibility-hidden relative cursor-pointer ${
                tile === 1 ? 'rounded-l-lg' : tile === 5 ? 'rounded-r-lg' : ''
              }`}
            />
          ))}
        </div>
      </main>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[640px] bg-white shadow-lg transform transition-transform duration-150 ease-in-out z-10 ${
          selectedTile ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-xl font-semibold text-gray-900">Tile {selectedTile}</h2>
            <button 
              onClick={() => setSelectedTile(null)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
