import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Portrait {
  src: string;
  alt: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalPortraits: Portrait[];
  content: ReactNode;
  name: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, modalPortraits, content, name }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="bg-black w-full h-full md:w-[90vw] md:max-w-6xl md:h-auto md:max-h-[90vh] md:rounded-lg overflow-y-auto p-6 md:p-8 relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title and Portraits */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl md:text-3xl font-black text-white">{title}</h2>
              <div className="flex -space-x-4">
                {modalPortraits.map((portrait, index) => (
                  <div
                    key={index}
                    className="relative w-12 h-12 rounded-full overflow-hidden"
                  >
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            {content}

            {/* Signature */}
            <div className="flex flex-col items-start gap-4 mt-12">
              <div className="w-48 h-24 relative">
                <Image
                  src="/images/sig-tc.png"
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xl md:text-2xl text-white font-serif">{name}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal; 