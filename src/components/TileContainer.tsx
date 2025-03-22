import Tile from './Tile';
import Timeline from './Timeline';
import Image from 'next/image';
import { useState } from 'react';

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
      <div className={`absolute -top-12 -left-12 z-20 transition-all duration-150 ease-out transform-gpu ${
        shouldMovePortrait ? '-translate-x-2 -translate-y-2' : ''
      } ${
        isFirstTileSelected ? 'scale-110 translate-z-10' : ''
      }`}>
        <div className="relative w-32 h-32">
          <Image
            src="/images/tim-hat-forest.png"
            alt="Tim in forest"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>

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