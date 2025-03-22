'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import Masthead from '@/components/Masthead';

export default function Home() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTileClick = (tileNumber: number) => {
    setSelectedTile(tileNumber);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedTile(null);
  };

  return (
    <div className={`flex min-h-screen transition-all duration-300 ease-in-out ${
      selectedTile ? 'w-[50%]' : 'w-full'
    }`}>
      {/* Main Content */}
      <main className={`flex-1 flex flex-col items-center justify-center p-4 perspective-1000 transition-all duration-300 ease-in-out ${
        selectedTile ? 'w-full' : 'w-full'
      }`}>
        <div className="relative z-10">
          <Masthead />
          <motion.div 
            className="w-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <TileContainer 
              selectedTile={selectedTile}
              onTileClick={handleTileClick} 
            />
          </motion.div>
        </div>
      </main>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        selectedTile={selectedTile} 
        onClose={handleCloseSidebar} 
      />
    </div>
  );
}
