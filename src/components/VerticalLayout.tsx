import { motion } from 'framer-motion';
import Masthead from './Masthead';
import { tiles } from './TileContainer';

interface VerticalLayoutProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
  onSubItemClick: (id: number) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
}

const subItems = tiles.map(tile => ({
  id: tile.id,
  text: tile.title,
  portraits: [
    { src: "/images/tim-hat-forest.png", alt: "Tim portrait" }
  ]
}));

export default function VerticalLayout({ 
  selectedTile, 
  onTileClick, 
  onSubItemClick,
  selectedProject,
  setSelectedProject
}: VerticalLayoutProps) {
  const handleTileClick = (tileNumber: number) => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    onTileClick(tileNumber);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col w-full max-w-2xl px-4 py-8 gap-12 relative z-0"
    >
      <div className="w-full">
        <Masthead onSubItemClick={onSubItemClick} isVertical={true} />
      </div>
      
      <div className="w-full space-y-2">
        {subItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.15,
              delay: 1 + (index * 0.1),
              ease: "easeOut" 
            }}
            onClick={() => handleTileClick(item.id)}
            className={`text-gray-500 hover:text-white flex items-center gap-4 hover:bg-gray-800 py-2 px-4 rounded-full transition-all duration-150 ease-out ${
              selectedTile === item.id ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <h2 className="text-xl font-black tracking-tight">{item.text}</h2>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 