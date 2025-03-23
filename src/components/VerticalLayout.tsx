import { motion } from 'framer-motion';
import Masthead from './Masthead';
import Image from 'next/image';

interface VerticalLayoutProps {
  selectedTile: number | null;
  onSubItemClick: (tileNumber: number) => void;
}

const subItems = [
  { 
    id: 1, 
    text: "What I Am",
    portraits: [
      { src: "/images/tim-hat-forest.png", alt: "Tim portrait" }
    ]
  },
  { 
    id: 2, 
    text: "What I Do",
    portraits: [
      { src: "/images/tim-hat-forest.png", alt: "Tim portrait" },
    ]
  },
  { 
    id: 3, 
    text: "Why Now?",
    portraits: [
      { src: "/images/tim-hat-forest.png", alt: "Tim portrait" },
    ]
  }
];

const StackedPortraits = ({ portraits }: { portraits: Array<{ src: string, alt: string }> }) => (
  <div className="relative flex items-center">
    {portraits.map((portrait, index) => (
      <div 
        key={index}
        className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-900"
        style={{ 
          marginLeft: index > 0 ? '-0.75rem' : '0',
          zIndex: portraits.length - index 
        }}
      >
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
        />
      </div>
    ))}
  </div>
);

export default function VerticalLayout({ selectedTile, onSubItemClick }: VerticalLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col w-full max-w-2xl mx-auto px-4 py-8 gap-12"
    >
      <div className="w-full">
        <Masthead onSubItemClick={onSubItemClick} isVertical={true} />
      </div>
      
      <div className="w-full space-y-2">
        {subItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.15,
              delay: 1 + (index * 0.1),
              ease: "easeOut" 
            }}
            onClick={() => onSubItemClick(item.id)}
            className={`text-gray-500 hover:text-white flex items-center gap-4 hover:bg-gray-800 p-2 pr-4 rounded-full transition-all duration-150 ease-out ${
              selectedTile === item.id ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <StackedPortraits portraits={item.portraits} />
            <h2 className="text-xl font-black tracking-tight">{item.text}</h2>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 