'use client';

import { useState, useEffect, useCallback } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import VerticalLayout from '@/components/VerticalLayout';
import Masthead from '@/components/Masthead';

export default function Home() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);

  const handleCloseSidebar = useCallback(() => {
    setSelectedTile(null);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseSidebar();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleCloseSidebar]);

  const handleTileClick = (tile: number) => {
    setSelectedTile(tile === selectedTile ? null : tile);
  };

  const handleSidebarContentChange = (tile: number) => {
    setSelectedTile(tile);
  };

  return (
    <main className="min-h-screen relative">
      {/* Original layout - hidden when sidebar is open */}
      <div className={`flex flex-col items-center justify-center p-24 ${
        selectedTile ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <Masthead onSubItemClick={handleTileClick} />
        <div className="mt-12">
          <TileContainer selectedTile={selectedTile} onTileClick={handleTileClick} />
        </div>
      </div>

      {/* Vertical layout + Sidebar when a tile is selected */}
      {selectedTile && (
        <div className="fixed inset-0 flex">
          <div className="w-1/2">
            <VerticalLayout 
              selectedTile={selectedTile}
              onSubItemClick={handleSidebarContentChange}
            />
          </div>
          <div className="w-1/2">
            <Sidebar selectedTile={selectedTile} onClose={handleCloseSidebar} />
          </div>
        </div>
      )}
    </main>
  );
}
