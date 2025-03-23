import { motion } from 'framer-motion';
import Image from 'next/image';

interface MastheadProps {
  onSubItemClick: (tileNumber: number) => void;
}

interface Portrait {
  src: string;
  alt: string;
}

const subItems = [
  { 
    id: 6, 
    text: "For Jason Z.",
    portraits: [
      { src: "/images/jasonz.jpeg", alt: "Jason Z., Principal Designer at 37signals" },
    ]
  },
  { 
    id: 7, 
    text: "For Jason & David",
    portraits: [
      { src: "/images/jasonf.jpeg", alt: "Jason Fried, Started and runs 37signals" },
      { src: "/images/dhh.jpeg", alt: "David Heinemeier Hansson, Co-owner & CTO of 37signals" }
    ]
  },
  { 
    id: 8, 
    text: "For The Team",
    portraits: [
      { src: "/images/37signals_logo.jpeg", alt: "37signals logo" }
    ]
  }
];

function StackedPortraits({ portraits }: { portraits: Portrait[] }) {
  return (
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
}

export default function Masthead({ onSubItemClick }: MastheadProps) {
  return (
    <div className="flex items-center justify-center gap-12">
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
        className="flex items-start gap-2 flex-col justify-center"
      >
        {subItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSubItemClick(item.id)}
            className="text-gray-500 hover:text-white flex items-center gap-4 hover:bg-gray-800 p-2 pr-4 rounded-full transition-all duration-20 ease-out"
          >
            <StackedPortraits portraits={item.portraits} />
            <h2 className="text-xl font-black tracking-tight">{item.text}</h2>
          </button>
        ))}
      </motion.div>
    </div>
  );
} 