'use client';

import { useState, useEffect, useCallback } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import VerticalLayout from '@/components/VerticalLayout';
import Masthead from '@/components/Masthead';
import Modal from '@/components/Modal';

// Define the content for each subitem
const subItemsContent = [
  {
    id: 6,
    title: 'For Jason Z.',
    portraits: [
      { src: "/images/jasonz.jpeg", alt: "Jason Z., Principal Designer at 37signals" },
    ],
    content: "So avoiding my math homework only makes sense in the context of having a choice in the matter. I thought staring into space or sliding off my chair onto the kitchen floor were viable alternative options. They were not. The first step is to get good at offloading the act of starting to the same parts of your brain that handle basic functions. When faced with a sink full of dishes, for example, if I think \"I should really do these\" I'm already dead. I can't think, I need to act. Instead of taking any time to even form an opinion, I turn on the warm water and open the dishwasher. By the time I realize what's happening, the job is half done and inertia is doing all the heavy lifting. I can even daydream if I want.",
    name: 'Tim'
  },
  {
    id: 7,
    title: 'For Jason & David',
    portraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" }
    ],
    content: "Each project in my portfolio represents a unique challenge overcome and a creative solution delivered. From mobile applications to web platforms, I bring ideas to life with precision and passion.",
    name: 'Tim'
  },
  {
    id: 8,
    title: 'For The Team',
    portraits: [
      { src: "/images/37signals_logo.jpeg", alt: "37signals logo" }
    ],
    content: "I'm always excited to discuss new opportunities and collaborations. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
    name: 'Tim'
  }
];

export default function Home() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(null);

  const handleCloseSidebar = useCallback(() => {
    setSelectedTile(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSubItem(null);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSubItem) {
          handleCloseModal();
        } else {
          handleCloseSidebar();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleCloseSidebar, handleCloseModal, selectedSubItem]);

  const handleTileClick = (tile: number) => {
    setSelectedTile(tile === selectedTile ? null : tile);
  };

  const handleSubItemClick = (item: number) => {
    setSelectedSubItem(item);
  };

  const getModalContent = (id: number) => {
    return subItemsContent.find(item => item.id === id) || {
      title: '',
      portraits: [],
      content: '',
      name: 'Tim'
    };
  };

  return (
    <main className="min-h-screen relative">
      {/* Original layout - hidden when sidebar is open */}
      <div className={`flex flex-col items-center justify-center p-12 ${
        selectedTile ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <Masthead onSubItemClick={handleSubItemClick} />
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
              onTileClick={handleTileClick}
              onSubItemClick={handleSubItemClick}
            />
          </div>
          <div className="w-1/2">
            <Sidebar selectedTile={selectedTile} onClose={handleCloseSidebar} />
          </div>
        </div>
      )}

      {/* Modal for subitem content */}
      {selectedSubItem && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          {...getModalContent(selectedSubItem)}
        />
      )}
    </main>
  );
}
