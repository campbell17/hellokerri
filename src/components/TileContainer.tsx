import { motion } from 'framer-motion';

export interface TileConfig {
  id: number;
  title: string;
  backgroundImage: string;
}

export const tiles: TileConfig[] = [
  {
    id: 1,
    title: "In Short...",
    backgroundImage: "/images/the-short-version.jpg"
  },
  {
    id: 2,
    title: "My Story",
    backgroundImage: "/images/my-story.jpg"
  },
  {
    id: 3,
    title: "My Work",
    backgroundImage: "/images/my-work2.png"
  },
  {
    id: 4,
    title: "Why 37 Signals?",
    backgroundImage: "/images/why37signals3.jpg"
  }
];

interface TileProps {
  config: TileConfig;
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  onClick: () => void;
  initialDelay: number;
}

const Tile = ({ config, isFirst, isLast, isSelected, onClick, initialDelay }: TileProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.15, delay: initialDelay, ease: "easeOut" }}
    style={config.backgroundImage ? {
      backgroundImage: `url(${config.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    } : { backgroundColor: '#e5e7eb' }}
    onClick={onClick}
    className={`overflow-hidden w-full transition-all duration-150 ease-out hover:scale-105 hover:translate-z-10 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 hover:rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 transform-style-3d backface-visibility-hidden relative cursor-pointer group ${
      isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : ''
    } ${
      isSelected ? 'scale-105 translate-z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10 rounded-lg' : ''
    }`}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Base overlay with gradient */}
      <div className={`absolute inset-0 transition-opacity duration-150 group-hover:block ${
        config.backgroundImage ? 
          'bg-gradient-to-br from-sky-900/80 via-slate-900/70 to-black/60' : 
          ''
      }`}></div>
      
      {/* Hover overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-150 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-black/70`}></div>

      <span className="text-xl font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white relative z-10">
        {config.title}
      </span>
    </div>
  </motion.div>
);

interface TileContainerProps {
  selectedTile: number | null;
  onTileClick: (tile: number) => void;
}

export default function TileContainer({ selectedTile, onTileClick }: TileContainerProps) {
  const containerWidth = selectedTile 
    ? 'w-[800px]' 
    : 'w-[1000px]';

  return (
    <div className={`flex flex-col items-center ${containerWidth} transition-all duration-150 relative`}>
      <div className={`flex gap-0 w-full h-[60vh]`}>
        {tiles.map((tile) => (
          <Tile
            key={tile.id}
            config={tile}
            isFirst={tile.id === 1}
            isLast={tile.id === 4}
            isSelected={tile.id === selectedTile}
            onClick={() => onTileClick(tile.id)}
            initialDelay={tile.id * 0.1}
          />
        ))}
      </div>
    </div>
  );
} 