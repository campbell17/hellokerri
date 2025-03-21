import Tile from './Tile';

interface TileContainerProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
}

export default function TileContainer({ selectedTile, onTileClick }: TileContainerProps) {
  return (
    <div className={`flex gap-0 w-full transition-all duration-150 ${
      selectedTile 
        ? 'max-w-[70vw] md:max-w-[40vw]' 
        : 'max-w-[90vw] md:max-w-[60vw]'
    } h-[60vh]`}>
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
  );
} 