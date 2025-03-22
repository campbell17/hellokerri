import Tile from './Tile';
import Timeline from './Timeline';
import Image from 'next/image';

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
      {/* Portrait */}
      <div className="absolute -top-12 -left-12 z-20">
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