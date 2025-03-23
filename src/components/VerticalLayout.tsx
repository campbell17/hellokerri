import { motion } from 'framer-motion';
import Masthead from './Masthead';

interface VerticalLayoutProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
  onSubItemClick: (tileNumber: number) => void;
}

const VerticalTile = ({ number, isSelected, onClick }: { 
  number: number; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.15, delay: number * 0.1, ease: "easeOut" }}
    style={{ backgroundColor: '#e5e7eb' }}
    onClick={onClick}
    className={`w-full transition-all duration-150 ease-out hover:scale-105 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 border border-gray-300 transform-style-3d backface-visibility-hidden relative cursor-pointer group mb-4 p-4 ${
      isSelected ? 'scale-105 translate-z-10 bg-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10' : ''
    }`}
  >
    <div className="flex flex-col items-center justify-center text-gray-600">
      <span className="text-lg font-medium">
        {number === 1 ? "What I Am" :
         number === 2 ? "What I Do" :
         number === 3 ? "Why Now?" :
         ""}
      </span>
    </div>
  </motion.div>
);

export default function VerticalLayout({ selectedTile, onTileClick, onSubItemClick }: VerticalLayoutProps) {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 py-8 gap-12">
      <div className="w-full">
        <Masthead onSubItemClick={onSubItemClick} />
      </div>
      
      <div className="w-full space-y-4">
        {[1, 2, 3].map((tile) => (
          <VerticalTile
            key={tile}
            number={tile}
            isSelected={tile === selectedTile}
            onClick={() => onTileClick(tile)}
          />
        ))}
      </div>
    </div>
  );
} 