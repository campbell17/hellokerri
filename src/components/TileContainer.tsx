import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Timeline from './Timeline';

interface TileProps {
  number: number;
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  initialDelay: number;
}

const Tile = ({ number, isFirst, isLast, isSelected, onClick, onMouseEnter, onMouseLeave, initialDelay }: TileProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.15, delay: initialDelay, ease: "easeOut" }}
    style={{ backgroundColor: '#e5e7eb' }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-full transition-all duration-150 ease-out hover:scale-110 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 hover:rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 border border-gray-300 transform-style-3d backface-visibility-hidden relative cursor-pointer ${
      isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : ''
    } ${
      isSelected ? 'scale-110 translate-z-10 bg-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10 rounded-lg' : ''
    }`}
  >
    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
      {number}
    </div>
  </motion.div>
);

interface TileContainerProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
}

const TOTAL_TILES = 5;

export default function TileContainer({ selectedTile, onTileClick }: TileContainerProps) {
  const [isFirstTileHovered, setIsFirstTileHovered] = useState(false);
  const containerWidth = selectedTile 
    ? 'w-[800px]' 
    : 'w-[1000px]';

  const shouldMovePortrait = isFirstTileHovered || selectedTile === 1;
  const isFirstTileSelected = selectedTile === 1;

  return (
    <div className={`flex flex-col items-center ${containerWidth} transition-all duration-150 relative`}>
      {/* Portrait */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.5, ease: "easeOut" }}
        className={`absolute -top-12 -left-12 z-20 transition-all duration-150 ease-out transform-gpu ${
          shouldMovePortrait ? '-translate-x-2 -translate-y-2' : ''
        } ${
          isFirstTileSelected ? 'scale-110 translate-z-10' : ''
        }`}
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/images/tim-hat-forest.png"
            alt="Tim in the forest"
            width={128}
            height={128}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>

      <div className={`flex gap-0 w-full h-[60vh]`}>
        {[1, 2, 3, 4, 5].map((tile) => (
          <Tile
            key={tile}
            number={tile}
            isFirst={tile === 1}
            isLast={tile === 5}
            isSelected={tile === selectedTile}
            onClick={() => onTileClick(tile)}
            onMouseEnter={() => tile === 1 && setIsFirstTileHovered(true)}
            onMouseLeave={() => tile === 1 && setIsFirstTileHovered(false)}
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