import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageData[];
  initialImageIndex: number;
}

export default function Lightbox({ isOpen, onClose, images, initialImageIndex }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialImageIndex);
    }
  }, [isOpen, initialImageIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-[71] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 text-white/60 hover:text-white transition-colors z-[71] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 text-white/60 hover:text-white transition-colors z-[71] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Container */}
        <div 
          className="relative w-full h-full flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 