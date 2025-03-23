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
    content: 'With over a decade of experience in software development, I&apos;ve had the privilege of working on diverse projects that have shaped my expertise in creating intuitive and impactful digital solutions.',
    name: 'Tim'
  },
  {
    id: 7,
    title: 'For Jason & David',
    portraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" }
    ],
    content: 'Each project in my portfolio represents a unique challenge overcome and a creative solution delivered. From mobile applications to web platforms, I bring ideas to life with precision and passion.',
    name: 'Tim'
  },
  {
    id: 8,
    title: 'For The Team',
    portraits: [
      { src: "/images/37signals_logo.jpeg", alt: "37signals logo" }
    ],
    content: 'I&apos;m always excited to discuss new opportunities and collaborations. Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.',
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
        handleCloseSidebar();
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleCloseSidebar, handleCloseModal]);

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
      <div className={`flex flex-col items-center justify-center p-24 ${
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
