import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Reuse the same content styles from Sidebar
const contentStyles = {
  h1: "text-4xl font-black text-gray-900 tracking-tight mb-4",
  h2: "text-2xl font-[900] text-gray-900 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif",
  a: "text-sky-600 hover:text-sky-800 transition-colors"
} as const;

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

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
              <div className="h-full overflow-y-auto p-6 md:p-12 flex flex-col gap-4">

                <h1 className={contentStyles.h1}>
                  What is this?
                </h1>

                <p className={contentStyles.p}>
                  This website is my application for the Web App Designer position at 37 Signals.
                </p>

                <h1 className={contentStyles.h1}>
                  Hello Kerri?
                </h1>

                <p className={contentStyles.p}>
                  Whenever my wife does something she considers foolish, she chastises herself by saying &quot;Hello, Kerri.&quot; It&apos;s cute as hell, so I bought the domain and put it away for a rainy day.
                </p>

                <h2 className={contentStyles.h2}>
                  Changelog
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-27</div>
                    <div>
                      <p className="text-gray-900">Added info section and improved responsive design</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added info section with changelog and todo list</li>
                        <li>• Improved responsive styles for about section</li>
                        <li>• Added more breakpoints for better mobile experience</li>
                        <li>• Adjusted mobile sizes for modals</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-26</div>
                    <div>
                      <p className="text-gray-900">Project details and mobile improvements</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added project detail sidebar with content support (hidden until needed)</li>
                        <li>• Fixed keybind behavior for navigation</li>
                        <li>• Improved mobile responsiveness</li>
                        <li>• Segregated image galleries for better organization</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-25</div>
                    <div>
                      <p className="text-gray-900">UI and navigation improvements</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added URL parameters for deep linking</li>
                        <li>• Improved animation smoothness</li>
                        <li>• Added keyboard navigation support</li>
                        <li>• Fixed text wrapping on mobile</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-24</div>
                    <div>
                      <p className="text-gray-900">Content and UI refinements</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added context and content updates</li>
                        <li>• Improved tile responsiveness and layout</li>
                        <li>• Added letter animations and hover effects</li>
                        <li>• Updated background and softened tile interactions</li>
                        <li>• Fixed image voids and layout issues</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-23</div>
                    <div>
                      <p className="text-gray-900">Modal and layout improvements</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added modal component with animations</li>
                        <li>• Fixed sidebar and layout interactions</li>
                        <li>• Improved font loading and styling</li>
                        <li>• Added vertical layout for sidebar behavior</li>
                        <li>• Fixed component opening and closing logic</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-22</div>
                    <div>
                      <p className="text-gray-900">Core UI components and animations</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added masthead with animations</li>
                        <li>• Implemented background image and transitions</li>
                        <li>• Added hover effects and tile animations</li>
                        <li>• Improved scroll behavior and transitions</li>
                        <li>• Added sidebar with content placeholders</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2024-03-21</div>
                    <div>
                      <p className="text-gray-900">Initial project setup and animations</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Added timeline component with animations</li>
                        <li>• Split out core components</li>
                        <li>• Added click actions and transitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className={contentStyles.h2}>
                  Todos
                </h2>

                <div className="space-y-4 mb-8">
                  <div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>☐ Continue adding work examples</li>
                      <li>☐ Ship nested sidebar for work that has its own section</li>
                      <li>☐ ~ Add touch controls / swipe gestures</li>
                      <li>☐ ~ Fix inconsistent avatar overlap</li>
                      <li>☐ ~ Add styling for code blocks</li>
                    </ul>
                  </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <h1 className={contentStyles.h1}>
                  How this site came together
                </h1>

                <p className={contentStyles.p}>
                  It began with a choice: update my stale personal site or build something new. 
                </p>

                <p className={contentStyles.p}>
                  My gut told me to build something new.
                </p>

                <p className={contentStyles.p}>
                  I drafted a few bullet points, notes, and ideas. Then the timid side of me peeked over my shoulder and added his own: &quot;Do none of these. Just update your site, stupid.&quot;
                </p>

                <p className={contentStyles.p}>
                  I let a day pass. I slept on it. Looking over my notes the next day, it occurred to me there&apos;s no such thing as &quot;just update your site.&quot; My personal site showed all the signs of neglect after spending 14 years at the same company. I had no incentive to update it, so I didn&apos;t. 
                </p>  

                <p className={contentStyles.p}>
                  I knew if I attempted an update I would spend too much time trying to resolve existing wounds whether they related to the core outcome or not. And the core outcome was this: build something simple, interactive, and visually appealing that represented who I was, what I could do, and why I was applying. This set the foundation for every decision thereafter. Having this foundation was crucial in deciding what was a must-have vs. a ~nice-to-have.
                </p>

                <p className={contentStyles.p}>
                  Another critical element was to add a time constraint. I allowed myself 4 days to get the core shipped. This meant whatever it was, it had to be possible for <em>me</em> (not some hero version of me), and it had to be something I&apos;d be proud enough to send directly to the founders. If I winced when I showed them, I failed.
                </p>

                <p className={contentStyles.p}>
                  This also meant I did no design mockups. I knew this was a build-to-know project. With the constraints of my idea in place, I had a general notion of what the mechanics could be. A precise design mockup was not only unnecessary, it would actively derail me. I knew I&apos;d end up trying to match the padding values in the mockup instead of pushing the core forward toward a shippable state. I sketched up a general idea on the tiny whiteboard in my office and got to work.
                </p>

                {/* Fridge Kernel */}
                <div className="relative w-full">
                  <Image
                    src="/images/about-this-site/fridge-kernel.jpg"
                    alt="Fridge Kernel"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/fridge-kernel.jpg')}
                  />
                  {!loadedImages.has('/images/about-this-site/fridge-kernel.jpg') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>
                <p className="text-sm text-gray-500 text-center">Trust me, it made sense in my head.</p>

                <p className={contentStyles.p}>
                  I treated this as a loose guide to get me started knowing many or all of its pieces could be replaced as I found more compelling ways to address the core purpose.
                </p>
  
                <p className={contentStyles.p}>
                  I knew I wanted large tiles with exaggerated hover states to be the entry point to the content:
                </p>

                {/* Level 1 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-1.gif"
                    alt="Level 1"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-1.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-1.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <p className={contentStyles.p}>
                  I softened the corners and added a transition to give them a nice bounce when clicked. At this point I wasn&apos;t worried about the sizes just yet.
                </p>

                {/* Level 2 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-2.gif"
                    alt="Level 2"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-2.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-2.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <p className={contentStyles.p}>
                  Initially, I placed my photo on the corner of the first tile. I assumed that&apos;s where the &quot;about me&quot; content would go. I added a sidebar to hang the content and put enough lorem ipsum in there to see the scroll behavior. You&apos;ll notice a little timeline pip sliding between the tiles as you cliced through. As things fleshed out, however, it seemed more like a distraction, so I ended up scrapping it.
                </p>

                {/* Level 3 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-3.gif"
                    alt="Level 3"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-3.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-3.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <p className={contentStyles.p}>
                  I decided the odd placement of the photo probably wouldn&apos;t hold up as I added more, so I put it in the ubiquitous top-center. I also didn&apos;t like the way the sidebar slid over the main content. I wanted to be able to click through the tiles and have the siebar content hydrate with the corresponding text. As you can see, that decision opened up some crowding issues.
                </p>

                {/* Level 4 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-4.gif"
                    alt="Level 4"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-4.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-4.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <p className={contentStyles.p}>
                  Once I got this far, I switched modes. Something slightly more compelling than lorem ipsum had to go on these pages. I opened the draft template I use to write essays, which is just a markdown file with some notes, and went section by section. Writing the content was invaluable, as it informed a handful of critical design decisions. First, there were too many sections. I knew I could hit all the beats without each one having its own page. I cut out the redundancies and renamed the sections, landing on My Story, My Work, and Why 37 Signals.
                </p>

                <p className={contentStyles.p}>
                  Second, as I crystalized my thoughts, I was reminded what an incredible opportunity this was. I wanted to add something more - something to show my appreciation to the people responsible. I decided to write three letters. One to the Principal Designer, one to the founders, and one to the entire team. Whatever happened, I felt like they should know what it meant to me.
                </p>

                <p className={contentStyles.p}>
                  I added three special buttons in the masthead, each opening its own modal with the contents of the letter. The knock-on effect of this decision was I knew I was going to have to change my approach on mobile. Instead of squishing the tiles into the remaining space and stacking everything when that got too tight, I stripped out the tiles entirely and simplified the main content. I decided to reuse this on desktop when the sidebar gets opened, which solved the odd squishing problem that never felt quite right.
                </p>

                {/* Level 5 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-5.gif"
                    alt="Level 5"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-5.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-5.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <p className={contentStyles.p}>
                  At this point, I felt pretty good. I dug through everything looking for mistakes, typos, and awkward phrasing. I knew I needed to add more to the work section, but one of the things I struggle with is sifting through the years and years of artifacts and deciding which ones show well. I put some recent hits and some representitive pieces showing that I at least have some taste. But something else still felt lacking.
                </p>

                <p className={contentStyles.p}>
                  I called up a friend and former colleague of mine to get his take and hopefully some perspective. As we talked through my career, I realized there wasn&apos;t a tl;dr anywhere. If someone only had 90 seconds to glean what this project was for, and why it mattered, they were going to leave unhappy. I made some quick notes, we finished the call, and I added a fourth section. I put it first in line. Gimme the short version.
                </p>

                {/* Level 6 */}
                <div className="relative w-full mb-8">
                  <Image
                    src="/images/about-this-site/about-level-6.gif"
                    alt="Level 6"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onLoad={() => handleImageLoad('/images/about-this-site/about-level-6.gif')}
                  />
                  {!loadedImages.has('/images/about-this-site/about-level-6.gif') && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                  )}
                </div>

                <h2 className={contentStyles.h2}>
                  What&apos;s next?
                </h2>

                <p className={contentStyles.p}>
                  I have a growing list of nice-to-haves, but adding more to the work section is critical. This will be my sole focus for now.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 