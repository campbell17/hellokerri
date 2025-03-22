import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  selectedTile: number | null;
  onClose: () => void;
}

const tileContent = {
  1: {
    title: "About Me",
    image: "/images/tim-hat-forest.png",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ## Background
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    ## Interests
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.`
  },
  2: {
    title: "Experience",
    image: "/images/tim-hat-forest.png",
    content: `## Professional Journey
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ## Key Achievements
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    ## Company History
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    ## Skills Developed
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

    ## Notable Projects
    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`
  },
  3: {
    title: "Projects",
    image: "/images/tim-hat-forest.png",
    content: `## Featured Work
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ### Project Alpha
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    ### Project Beta
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    ### Project Gamma
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

    ## Open Source Contributions
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

    ## Side Projects
    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.`
  },
  4: {
    title: "Skills",
    image: "/images/tim-hat-forest.png",
    content: `## Technical Expertise
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ## Programming Languages
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    ## Frameworks & Tools
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    ## Soft Skills
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

    ## Certifications
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

    ## Areas of Interest
    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

    ## Current Learning
    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`
  },
  5: {
    title: "Contact",
    image: "/images/tim-hat-forest.png",
    content: `## Get in Touch
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ## Social Media
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    ## Professional Networks
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    ## Availability
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

    ## Preferred Contact Methods
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

    ## Office Hours
    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`
  }
};

const formatContent = (content: string) => {
  return content.split('\n').map((line, i) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('### ')) {
      return <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-4">{trimmedLine.replace('### ', '')}</h3>;
    }
    if (trimmedLine.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{trimmedLine.replace('## ', '')}</h2>;
    }
    if (trimmedLine === '') {
      return <br key={i} />;
    }
    return <p key={i} className="text-gray-600 leading-relaxed mb-4">{trimmedLine}</p>;
  });
};

export default function Sidebar({ isOpen, selectedTile, onClose }: SidebarProps) {
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

  if (!isOpen) return null;

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
                    className="text-2xl font-bold text-gray-900"
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
                    {content?.content && formatContent(content.content)}
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