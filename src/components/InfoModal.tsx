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
  p: "text-xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif",
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
              <div className="h-full overflow-y-auto p-6 md:p-12 flex flex-col gap-6">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-8">
                  How this site came together
                </h1>

                <p className={contentStyles.p}>
                  It began with a choice: update my stale personal site or build something new. 
                </p>

                <p className={contentStyles.p}>
                  My gut told me to build something new.
                </p>

                <p className={contentStyles.p}>
                  &quot;Show you can ship&quot;.
                </p>

                <p className={contentStyles.p}>
                  I drafted a few bullet points, notes, and ideas. Then the timid side of me peeked over my shoulder and added his own: &quot;Do none of these. Just update your site, stupid.&quot;
                </p>

                <p className={contentStyles.p}>
                  I let a day pass. I slept on it. Looking over my notes the next day, it occurred to me there&apos;s no such thing as &quot;just an update&quot;. My personal site was full of signs of neglect after nearly 15 years of steady employment at the same company. I knew if I attempted an update I would spend too much time trying to resolve existing wounds whether they related to the core outcome or not.
                </p>

                <p className={contentStyles.p}>
                  And the core outcome was this: build something simple, interactive, and visually appealing that represented who I was, what I could do, and why I was applying. This set the foundation for every decision thereafter. Having this foundation was crucial in deciding what was a must-have vs. a ~nice-to-have.
                </p>

                <p className={contentStyles.p}>
                  Another critical element was to add a time constraint. I allowed myself 4 days to get the core shipped. This meant whatever it was, it had to be possible for <em>me</em> (not some hero version of me), and it had to be something I&apos;d be proud enough to send directly to the founders. If I winced when I sent the LinkedIn DMs, I failed.
                </p>

                <p className={contentStyles.p}>
                  This also meant I did no design mockups. I knew this was a build-to-know project. With the constraints of my idea in place, I had a general notion of what the mechanics could be. A precise design mockup was not only unnecessary, it would actively derail me. I knew I&apos;d end up trying to match the padding values in the mockup instead of pushing the core forward toward a shippable state. I sketched up a general idea on the tiny whiteboard in my office and got to work.
                </p>

                {/* Fridge Kernel */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/fridge-kernel.jpg"
                    alt="Fridge Kernel"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <p className={contentStyles.p}>
                  I treated this as a loose guide to get me started knowing many or all of its pieces could be replaced as I found more compelling ways to address the core purpose.
                </p>

                <div className="space-y-8">
                  {/* Level 0 */}
                  <div className="relative w-full">
                    <Image
                      src="/images/about-this-site/about-level-0.jpg"
                      alt="Level 0"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">Off to a great start.</p>
                
                  <p className={contentStyles.p}>
                    I knew I wanted large tiles to be the entry point to the content:
                  </p>

                  {/* Level 1 */}
                  <div className="relative w-full mb-8">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-lg"
                    >
                      <source src="/images/about-this-site/about-level-1.webm" type="video/webm" />
                      <Image
                        src="/images/about-this-site/about-level-1.jpg"
                        alt="Level 1"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg"
                      />
                    </video>
                  </div>

                  <p className={contentStyles.p}>
                    The design is inspired by the work of 37signals, particularly their focus on simplicity and clarity. The site uses a minimal color palette and typography to create a clean, professional look.
                  </p>


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