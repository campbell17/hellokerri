import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Reuse the same content styles from Sidebar
const contentStyles = {
  h2: "text-2xl font-[900] text-gray-900 mt-8 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-2xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif",
  a: "text-sky-600 hover:text-sky-800 transition-colors"
} as const;

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-center justify-center"
          >
            <div className="relative w-full h-full lg:w-[75vw] xl:w-[50vw] lg:h-[90vh] lg:max-h-[90vh] bg-gray-100/95 backdrop-blur-md lg:rounded-lg shadow-xl overflow-hidden">
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Content */}
              <div className="h-full overflow-y-auto p-6 md:p-12">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-8">
                  About This Site
                </h1>

                <div className="space-y-8">
                  {/* Level 0 */}
                  <div className="relative aspect-video mb-8">
                    <Image
                      src="/images/about-this-site/about-level-0.jpg"
                      alt="Level 0"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <p className={contentStyles.p}>
                    This site is built with Next.js, Tailwind CSS, and Framer Motion. It&apos;s designed to be fast, responsive, and accessible.
                  </p>

                  {/* Level 1 */}
                  <div className="relative aspect-video mb-8">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                    >
                      <source src="/images/about-this-site/about-level-1.webm" type="video/webm" />
                      <Image
                        src="/images/about-this-site/about-level-1.jpg"
                        alt="Level 1"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </video>
                  </div>

                  <p className={contentStyles.p}>
                    The design is inspired by the work of 37signals, particularly their focus on simplicity and clarity. The site uses a minimal color palette and typography to create a clean, professional look.
                  </p>

                  {/* Fridge Kernel */}
                  <div className="relative aspect-video mb-8">
                    <Image
                      src="/images/about-this-site/fridge-kernel.jpg"
                      alt="Fridge Kernel"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <p className={contentStyles.p}>
                    The site is built with performance in mind. Images are optimized using Next.js Image component, and animations are handled by Framer Motion for smooth transitions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 