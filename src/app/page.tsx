'use client';

import { useState, useEffect } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);

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
    setSelectedTile(tile);
  };

  return (
    <div className={`flex min-h-screen transition-all duration-300 ease-in-out ${
      selectedTile ? 'w-[50%]' : 'w-full'
    }`}>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 perspective-1000">
        <div className="w-full flex items-center justify-center">
          <TileContainer 
            selectedTile={selectedTile}
            onTileClick={handleTileClick}
          />
        </div>
      </main>

      {/* Sidebar */}
      <Sidebar
        isOpen={selectedTile !== null}
        selectedTile={selectedTile}
        onClose={() => setSelectedTile(null)}
      />
    </div>
  );
}
