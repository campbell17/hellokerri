import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface MastheadProps {
  onSubItemClick: (id: number) => void;
  isVertical?: boolean;
}


const Masthead: FC<MastheadProps> = ({ isVertical = false }) => {

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

      {/* Secondary row
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
      </div> */}
    </div>
  );
};

export default Masthead; 