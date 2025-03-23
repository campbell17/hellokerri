import { motion } from 'framer-motion';
import Image from 'next/image';

interface MastheadProps {
  onSubItemClick: (tileNumber: number) => void;
}

const subItems = [
  { 
    id: 6, 
    text: "For Jason Z.",
    image: "/images/tim-hat-forest.png",  // Using placeholder for now
    alt: "Experience portrait"
  },
  { 
    id: 7, 
    text: "For Jason & David",
    image: "/images/tim-hat-forest.png",  // Using placeholder for now
    alt: "Projects portrait"
  },
  { 
    id: 8, 
    text: "For The Team",
    image: "/images/tim-hat-forest.png",  // Using placeholder for now
    alt: "Contact portrait"
  }
];

export default function Masthead({ onSubItemClick }: MastheadProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Main heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-8"
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/images/tim-hat-forest.png"
            alt="Tim in the forest"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-7xl font-black tracking-tight">Hey! <span className="font-normal text-gray-500">I&apos;m Tim.</span></h1>
      </motion.div>

      {/* Secondary row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="flex items-center gap-12 justify-center mt-6 mb-4"
      >
        {subItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSubItemClick(item.id)}
            className="flex items-center gap-4 hover:bg-gray-800 p-2 pr-4 rounded-full transition-all duration-20 ease-out"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
            </div>
            <h2 className="text-2xl font-black tracking-tight">{item.text}</h2>
          </button>
        ))}
      </motion.div>
    </div>
  );
} 