interface TimelineProps {
  selectedTile: number | null;
  totalTiles: number;
}

export default function Timeline({ selectedTile, totalTiles }: TimelineProps) {
  return (
    <div className="relative w-full mt-12">
      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20" />
      
      {/* Animated dot */}
      {selectedTile && (
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out"
          style={{
            left: `calc(${(selectedTile - 1) * (100 / totalTiles) + (100 / (totalTiles * 2))}% - 8px)`,
          }}
        />
      )}
    </div>
  );
} 