'use client';

import { useState, useEffect } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

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
      <main className={`flex-1 flex flex-col items-center justify-center p-4 perspective-1000 transition-all duration-300 ease-in-out ${
        selectedTile ? 'w-full' : 'w-full'
      }`}>
        <div className="flex items-center gap-8 mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/images/tim-hat-forest.png"
              alt="Tim in the forest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className="text-6xl font-bold font-['Boldonse']">Hello.</h1>
        </div>
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
