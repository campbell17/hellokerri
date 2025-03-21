import Tile from './Tile';
import Timeline from './Timeline';

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
    <div className={`flex flex-col items-center ${containerWidth} transition-all duration-150`}>
      <div className={`flex gap-0 w-full h-[60vh]`}>
        {[1, 2, 3, 4, 5].map((tile) => (
          <Tile
            key={tile}
            number={tile}
            isFirst={tile === 1}
            isLast={tile === 5}
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