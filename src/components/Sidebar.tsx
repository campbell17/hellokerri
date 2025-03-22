import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  selectedTile: number | null;
  onClose: () => void;
}

const tileContent = {
  1: {
    title: "About Me",
    image: "/images/tim-hat-forest.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  2: {
    title: "Experience",
    image: "/images/tim-hat-forest.png",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  3: {
    title: "Projects",
    image: "/images/tim-hat-forest.png",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  4: {
    title: "Skills",
    image: "/images/tim-hat-forest.png",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  5: {
    title: "Contact",
    image: "/images/tim-hat-forest.png",
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  }
};

export default function Sidebar({ isOpen, selectedTile, onClose }: SidebarProps) {
  if (!isOpen) return null;

  const content = selectedTile ? tileContent[selectedTile as keyof typeof tileContent] : null;

  return (
    <motion.div
      initial={{ x: 640 }}
      animate={{ x: 0 }}
      exit={{ x: 640 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed right-0 top-0 h-full w-[640px] bg-gray-900/95 backdrop-blur-sm border-l border-white/10 shadow-xl"
    >
      <div className="p-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={selectedTile}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="text-2xl font-bold text-white"
            >
              {content?.title}
            </motion.h2>
          </AnimatePresence>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                <img
                  src={content?.image}
                  alt={content?.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                {content?.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
} 