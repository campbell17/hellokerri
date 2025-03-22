import { motion } from 'framer-motion';
import Timeline from './Timeline';

interface TileProps {
  number: number;
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  onClick: () => void;
  initialDelay: number;
}

const Tile = ({ number, isFirst, isLast, isSelected, onClick, initialDelay }: TileProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.15, delay: initialDelay, ease: "easeOut" }}
    style={{ backgroundColor: '#e5e7eb' }}
    onClick={onClick}
    className={`w-full transition-all duration-150 ease-out hover:scale-110 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 hover:rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 border border-gray-300 transform-style-3d backface-visibility-hidden relative cursor-pointer group ${
      isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : ''
    } ${
      isSelected ? 'scale-110 translate-z-10 bg-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10 rounded-lg' : ''
    }`}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      {/* <span className="text-2xl font-bold">{number}</span> */}
      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        {number === 1 ? "About Me" :
         number === 2 ? "XP" :
         number === 3 ? "Why Now" :
         number === 4 ? "Design" :
         "The Web"}
      </span>
    </div>
  </motion.div>
);

interface TileContainerProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
}

const TOTAL_TILES = 5;

export default function TileContainer({ selectedTile, onTileClick }: TileContainerProps) {
  const containerWidth = selectedTile 
    ? 'w-[800px]' 
    : 'w-[1000px]';

  return (
    <div className={`flex flex-col items-center ${containerWidth} transition-all duration-150 relative`}>
      <div className={`flex gap-0 w-full h-[60vh]`}>
        {[1, 2, 3, 4, 5].map((tile) => (
          <Tile
            key={tile}
            number={tile}
            isFirst={tile === 1}
            isLast={tile === 5}
            isSelected={tile === selectedTile}
            onClick={() => onTileClick(tile)}
            initialDelay={tile * 0.1}
          />
        ))}
      </div>
      <div className="w-full">
        <Timeline 
          selectedTile={selectedTile}
          totalTiles={TOTAL_TILES}
        />
      </div>
    </div>
  );
} 