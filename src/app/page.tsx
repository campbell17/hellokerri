'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import TileContainer from '@/components/TileContainer';
import Sidebar from '@/components/Sidebar';
import VerticalLayout from '@/components/VerticalLayout';
import Masthead from '@/components/Masthead';
import Modal from '@/components/Modal';
import InfoModal from '@/components/InfoModal';
import { useSearchParams, useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';

const contentStyles = {
  p: "text-xl leading-relaxed md:text-2xl mb-8 md:leading-relaxed text-white font-serif"
} as const;

// Define the content for each subitem
const subItemsContent = [
  {
    id: 6,
    alias: 'forjasonz',
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
    alias: 'forjason_dhh',
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
          If I make it far enough along for us to meet, I&apos;ll say it face to face, but in the meantime...
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
    alias: 'fortheteam',
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

function HomeContent() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [currentGallery, setCurrentGallery] = useState<number | string | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle URL parameters on initial load
  useEffect(() => {
    const alias = searchParams.get('letter');
    if (alias) {
      const item = subItemsContent.find(item => item.alias === alias);
      if (item) {
        setSelectedSubItem(item.id);
      }
    }
  }, [searchParams]);

  const handleCloseSidebar = useCallback(() => {
    setSelectedTile(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSubItem(null);
    // Remove the letter parameter from URL when closing modal
    const params = new URLSearchParams(searchParams.toString());
    params.delete('letter');
    router.replace(`?${params.toString()}`);
  }, [router, searchParams]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // First check if lightbox is open (handled by Sidebar component)
        if (lightboxImageIndex !== null) {
          setLightboxImageIndex(null);
          setCurrentGallery(null);
          return;
        }
        
        // Then check if project details sidebar is open
        if (selectedProject) {
          setSelectedProject(null);
          return;
        }
        
        // Then check if modal is open
        if (selectedSubItem) {
          handleCloseModal();
          return;
        }
        
        // Then check if info modal is open
        if (isInfoModalOpen) {
          setIsInfoModalOpen(false);
          return;
        }
        
        // Finally, check if main sidebar is open
        if (selectedTile) {
          handleCloseSidebar();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleCloseSidebar, handleCloseModal, selectedSubItem, selectedProject, selectedTile, lightboxImageIndex, setLightboxImageIndex, setCurrentGallery, isInfoModalOpen]);

  const handleTileClick = (tile: number) => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    setSelectedTile(tile === selectedTile ? null : tile);
  };

  const handleSubItemClick = (item: number) => {
    setSelectedSubItem(item);
    // Add the letter parameter to URL when opening modal
    const params = new URLSearchParams(searchParams.toString());
    const alias = subItemsContent.find(content => content.id === item)?.alias;
    if (alias) {
      params.set('letter', alias);
      router.replace(`?${params.toString()}`);
    }
  };

  const modalContent = selectedSubItem ? subItemsContent.find(item => item.id === selectedSubItem) : null;

  return (
    <main className="min-h-screen relative">
      {/* Desktop layout - hidden on mobile */}
      <div className={`hidden lg:flex flex-col items-center justify-center p-12 transition-all duration-300 ease-in-out ${
        selectedTile ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <Masthead onSubItemClick={handleSubItemClick} />
        <div className="mt-12">
          <TileContainer selectedTile={selectedTile} onTileClick={handleTileClick} />
        </div>
      </div>

      {/* Mobile layout - always visible */}
      <div className="lg:hidden transition-all duration-300 ease-in-out">
        <VerticalLayout 
          selectedTile={selectedTile}
          onTileClick={handleTileClick}
          onSubItemClick={handleSubItemClick}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </div>
      {/* Info Icon - Fixed Position
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
        onClick={() => setIsInfoModalOpen(true)}
        className="fixed bottom-4 lg:bottom-unset top-unset lg:top-4 right-4 text-gray-500 hover:text-white transition-colors z-[0] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.button> */}

      {/* Sidebar - different widths for mobile/desktop */}
      {selectedTile && (
        <div className="fixed inset-0 flex transition-all duration-300 ease-in-out">
          <div className="hidden lg:block w-1/2">
            <VerticalLayout 
              selectedTile={selectedTile}
              onTileClick={handleTileClick}
              onSubItemClick={handleSubItemClick}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Suspense>
              <Sidebar 
                selectedTile={selectedTile}
                onClose={handleCloseSidebar}
                onTileClick={handleTileClick}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                lightboxImageIndex={lightboxImageIndex}
                setLightboxImageIndex={setLightboxImageIndex}
                currentGallery={currentGallery}
                setCurrentGallery={setCurrentGallery}
              />
            </Suspense>
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

      {/* Info Modal */}
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
