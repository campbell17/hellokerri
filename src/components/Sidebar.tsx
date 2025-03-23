import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface SidebarProps {
  selectedTile: number | null;
  onClose: () => void;
}

// Reusable content styles
const contentStyles = {
  h2: "text-2xl font-[900] text-gray-900 mt-8 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-gray-600 leading-relaxed mb-4 font-[400]"
} as const;

const tileContent = {
  1: {
    title: "About Me",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    )
  },
  2: {
    title: "What I Can Do",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Professional Journey</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className={contentStyles.h2}>Key Achievements</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className={contentStyles.h2}>Company History</h2>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  3: {
    title: "Why 37 Signals? Why Now?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Featured Work</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h3 className={contentStyles.h3}>Project Alpha</h3>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3 className={contentStyles.h3}>Project Beta</h3>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  4: {
    title: "Why Design?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Technical Expertise</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className={contentStyles.h2}>Programming Languages</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className={contentStyles.h2}>Frameworks & Tools</h2>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  5: {
    title: "Why the Web?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Get in Touch</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className={contentStyles.h2}>Social Media</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className={contentStyles.h2}>Professional Networks</h2>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  6: {
    title: "Experience",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Professional Journey</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Key Achievements</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Skills & Expertise</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  },
  7: {
    title: "Projects",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Featured Work</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Open Source</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Side Projects</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  },
  8: {
    title: "Contact",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Get in Touch</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Social Media</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Professional Networks</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  }
};

export default function Sidebar({ selectedTile, onClose }: SidebarProps) {
  const content = selectedTile ? tileContent[selectedTile as keyof typeof tileContent] : null;

  // Reset scroll position after fade out
  useEffect(() => {
    if (selectedTile) {
      const timer = setTimeout(() => {
        const sidebar = document.querySelector('.sidebar-content');
        if (sidebar) {
          sidebar.scrollTop = 0;
        }
      }, 150); // Match the fade duration
      return () => clearTimeout(timer);
    }
  }, [selectedTile]);

  if (!selectedTile) return null;

  return (
    <>
      {/* Close Button */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
          onClick={onClose}
          className="fixed right-[49%] top-7 text-white/60 hover:text-white transition-colors z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed right-0 top-0 h-full w-[50%] bg-gray-100/95 backdrop-blur-sm border-l border-gray-200/20 shadow-xl"
      >
        <div className="h-full overflow-y-auto sidebar-content">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <AnimatePresence mode="wait">
                {selectedTile && (
                  <motion.h1 
                    key={selectedTile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="text-4xl font-black text-gray-900 tracking-tight"
                  >
                    {content?.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {selectedTile && (
                <motion.div
                  key={selectedTile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={content?.image || ''}
                      alt={content?.title || ''}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="space-y-2">
                    {content?.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
} 