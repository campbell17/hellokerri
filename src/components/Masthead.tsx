import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Masthead() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-8 mb-8 justify-center"
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
  );
} 