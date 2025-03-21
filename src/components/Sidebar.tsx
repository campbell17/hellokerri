interface SidebarProps {
  isOpen: boolean;
  selectedTile: number | null;
  isTransitioning: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, selectedTile, isTransitioning, onClose }: SidebarProps) {
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-[640px] bg-white shadow-lg transform transition-transform duration-150 ease-in-out z-10 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-xl font-semibold text-gray-900">Tile {selectedTile}</h2>
          <button 
            onClick={onClose}
            className="mt-4 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 