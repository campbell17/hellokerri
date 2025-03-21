interface TileProps {
  number: number;
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function Tile({ number, isFirst, isLast, isSelected, onClick }: TileProps) {
  return (
    <div
      style={{ backgroundColor: '#e5e7eb' }}
      onClick={onClick}
      className={`w-full transition-all duration-150 ease-out hover:scale-110 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 hover:rounded-lg active:scale-100 active:translate-z-0 active:shadow-none active:duration-50 border border-gray-300 transform-style-3d backface-visibility-hidden relative cursor-pointer ${
        isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : ''
      } ${
        isSelected ? 'scale-110 translate-z-10 bg-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10 rounded-lg' : ''
      }`}
    />
  );
} 