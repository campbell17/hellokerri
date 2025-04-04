import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface Portrait {
  src: string;
  alt: string;
}

interface SubItem {
  id: number;
  text: string;
  portraits: Portrait[];
}

interface MastheadProps {
  onSubItemClick: (id: number) => void;
  isVertical?: boolean;
}

function StackedPortraits({ portraits }: { portraits: Portrait[] }) {
  return (
    <div className="relative flex items-center">
      {portraits.map((portrait, index) => (
        <div 
          key={index}
          className="relative w-10 h-10 rounded-full overflow-hidden"
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

const Masthead: FC<MastheadProps> = ({ onSubItemClick, isVertical = false }) => {
  const subItems: SubItem[] = [
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

  return (
    <div className={`flex gap-12 ${isVertical ? 'flex-col items-start justify-start' : 'items-center justify-center'}`}>
      {/* Main heading */}
      <motion.div 
        initial={{ opacity: 0, y: isVertical ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center ${isVertical ? 'gap-4' : 'gap-8'}`}>
        <div className={`relative rounded-full overflow-hidden ${isVertical ? 'w-16 h-16' : ' w-32 h-32'}`}>
          <Image
            src="/images/tim-hat-forest.png"
            alt="Tim in the forest"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className={`font-black tracking-tight ${isVertical ? 'text-4xl' : 'text-7xl'}`}>Hey! <span className="font-normal text-gray-500">I&apos;m Tim.</span></h1>
      </motion.div>

      {/* Secondary row */}
      <div className="flex items-start gap-2 flex-col justify-center">
        {subItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.30,
              delay: 0.5 + (index * 0.1),
              ease: "easeOut" 
            }}
            onClick={() => onSubItemClick(item.id)}
            className="text-gray-500 hover:text-white flex items-center gap-4 hover:bg-gray-800 p-2 pr-4 rounded-full transition-all duration-20 ease-out"
          >
            <StackedPortraits portraits={item.portraits} />
            <h2 className="text-xl font-black tracking-tight">{item.text}</h2>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Masthead; 