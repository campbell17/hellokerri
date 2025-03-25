'use client';

import { useState, useEffect, useCallback } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import VerticalLayout from '@/components/VerticalLayout';
import Masthead from '@/components/Masthead';
import Modal from '@/components/Modal';

const contentStyles = {
  p: "text-xl leading-relaxed md:text-2xl mb-8 md:leading-relaxed text-white font-serif"
} as const;

// Define the content for each subitem
const subItemsContent = [
  {
    id: 6,
    title: 'For Jason Z.',
    portraits: [
      { src: "/images/jasonz.jpeg", alt: "Jason Z., Principal Designer at 37signals" },
    ],
    modalPortraits: [
      { src: "/images/jasonz.jpeg", alt: "Jason Z., Principal Designer at 37signals" },
    ],
    content: (
      <>
        <p className={contentStyles.p}>
          I don&apos;t envy the number of portfolios and bios you&apos;re sifting through right now, so I&apos;ll keep this short. The longevity you&apos;ve achieved at 37 Signals is rare in software. I&apos;m happy to say I know the feeling. But at this point in my career, I&apos;m looking for the last place I&apos;m going to work.
        </p>

        <p className={contentStyles.p}>
          Don&apos;t get me wrong, I have decades left. But I want those decades to be stable, energetic, and productive. And I want them to be on your team.
        </p>

        <p className={contentStyles.p}>
          So take a look around, learn a bit about me, and hopefully our gears will mesh.
        </p>

        <p className={contentStyles.p}>
          All the best,
        </p>
      </>
    ),
    name: 'Timothy W. Campbell'
  },
  {
    id: 7,
    title: 'For Jason & David',
    portraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" },
    ],
    modalPortraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" },
    ],
    content: (
      <>
        <p className={contentStyles.p}>
          It&apos;s the honesty that gets me. Nothing is impossible when everyone knows what the score is. And despite the all the great software, books, innovations, and ideas that make 37 Signals incredible, honesty is the thread that ties it all together.
        </p>

        <p className={contentStyles.p}>
          If I make it far enough along for us to meet, I&apos;ll say it to your face, but in the meantime...
        </p>

        <p className={contentStyles.p}>
          Thank you for always doing what&apos;s right.
        </p>
      </>
    ),
    name: 'Timothy W. Campbell'
  },
  {
    id: 8,
    title: 'For The Team',
    portraits: [
      { src: "/images/37signals_logo.jpeg", alt: "37signals logo" }
    ],
    modalPortraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" },
      { src: "/images/jasonz.jpeg", alt: "Jason Z., Principal Designer at 37signals" },
      { src: "/images/37signals_logo.jpeg", alt: "37signals logo" },
      // { src: "/images/michelleh.jpeg", alt: "Michelle H" },
      // { src: "/images/seanm.jpeg", alt: "Sean M" },
      // { src: "/images/adrienm.jpeg", alt: "Adrien M" },
      // { src: "/images/team.png", alt: "...and Co." },
    ],
    content: (
      <>
        <p className={contentStyles.p}>
          Hello, wonderful people making useful software. I&apos;m Tim, and I&apos;m applying to join your design team. This isn&apos;t an opportunity I take lightly, which is why I wanted to thank you, the entire group of potential future colleagues, for adding to the collective strength of 37 Signals. Culture can&apos;t be mandated. It&apos;s an emergent property of the way you work, and preserving it over the long term is no small achievement. If given the chance, I&apos;ll do my part to add to its already sturdy foundation.
        </p>

        <p className={contentStyles.p}>
          Sincerely,
        </p>
      </>
    ),    
    name: 'Timothy W. Campbell'
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

  const handleNextTile = () => {
    if (selectedTile) {
      const nextTile = (selectedTile % 4) + 1;
      setSelectedTile(nextTile);
    }
  };

  const handleSubItemClick = (item: number) => {
    setSelectedSubItem(item);
  };

  const modalContent = selectedSubItem ? subItemsContent.find(item => item.id === selectedSubItem) : null;

  return (
    <main className="min-h-screen relative">
      {/* Desktop layout - hidden on mobile */}
      <div className={`hidden lg:flex flex-col items-center justify-center p-12 transition-opacity duration-150 ${
        selectedTile ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <Masthead onSubItemClick={handleSubItemClick} />
        <div className="mt-12">
          <TileContainer selectedTile={selectedTile} onTileClick={handleTileClick} />
        </div>
      </div>

      {/* Mobile layout - always visible */}
      <div className="lg:hidden">
        <VerticalLayout 
          selectedTile={selectedTile}
          onTileClick={handleTileClick}
          onSubItemClick={handleSubItemClick}
        />
      </div>

      {/* Sidebar - different widths for mobile/desktop */}
      {selectedTile && (
        <div className="fixed inset-0 flex">
          <div className="hidden lg:block w-1/2">
            <VerticalLayout 
              selectedTile={selectedTile}
              onTileClick={handleTileClick}
              onSubItemClick={handleSubItemClick}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Sidebar 
              selectedTile={selectedTile} 
              onClose={handleCloseSidebar}
              onNextTile={handleNextTile}
            />
          </div>
        </div>
      )}

      {/* Modal for subitem content */}
      {modalContent && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          {...modalContent}
        />
      )}
    </main>
  );
}
