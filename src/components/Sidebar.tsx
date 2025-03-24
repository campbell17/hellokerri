import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface SidebarProps {
  selectedTile: number | null;
  onClose: () => void;
  onNextTile: () => void;
}

// Reusable content styles
const contentStyles = {
  h2: "text-2xl font-[900] text-gray-900 mt-8 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-2xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif"
} as const;

const tileContent = {
  1: {
    title: "My Story",
    image: null,
    content: (
      <>
        <p className={contentStyles.p}>
          Fourteen years and seven months ago, I joined Spatial Networks as their 12th employee and first design hire. They needed...everything. My title was UI Designer, but I did it all, online and in print. But we&apos;ll come back to that.
        </p>

        <p className={contentStyles.p}>
          Before that, I founded a design agency called Whiteshark Creations with a colleague, though I realized agency life wasn&apos;t my calling and I signed over my portion the business soon after.
        </p>

        <p className={contentStyles.p}>
          Prior to going solo, my design career began its infancy, when Macromedia was still a household name and Web 2.0 was hitting it&apos;s bubbly prime. I started as a web designer and this is where I first clapped eyes on naked HTML & CSS - No WYSIWYG editor to hide all the crimes. We had dedicated developers to write all the code, so my exposure and practice only came in fits and starts. I wouldn&apos;t feel the power of `git push origin master` until my first year working at Spatial Networks.
        </p>

        <p className={contentStyles.p}>
          When you&apos;re the only designer for the rabid firehose of ideas we called a CEO, becoming a generalist is a matter of survival. I have sketchbooks with pages chock full of logos, mobile app screens, mobile app icons, trade show pull-up banners for offshoots of ideas that didn&apos;t (and never would) exist.
        </p>

        <p className={contentStyles.p}>
          I loved it.
        </p>

        <p className={contentStyles.p}>
          But what I loved most was working on the web apps and the marketing websites. Since we were so small, everyone had to be trusted to make what they were doing count without much (or any) oversight. I was shocked at how much creative freedom I was given. This was the first time I was encouraged to just build. Everyone who needed to see it before it went live took their peek, gave it a nod, maybe asked for a minor tweak, then simply said &quot;Looks sweet, man. Ship it&quot;.
        </p>

        <p className={contentStyles.p}>
          We took a few cracks at different product ideas. Allinspections, the product I was actually hired to help create, couldn&apos;t find its niche and had to be sunsetted after 18 months. The CEO called me into his office in what I was certain would be my final meeting at Spatial Networks. Instead, he offered me the opportunity to head up something new: Fulcrum.
        </p>

        <p className={contentStyles.p}>
          Since 2012, this has been the flagship product of Spatial Networks and my number one source of design activity. Unlike prior attempts, Fulcrum struck just the right balance of utility, ease of use, customizability, and extensibility. We were still super lean back then, but now we had people counting on our product. It felt so good to talk to customers about their issues and ideas and be able to mesh them with ours to give their companies leverage just from using our software.
        </p>

      </>
    )
  },
  2: {
    title: "My Work",
    image: null,
    content: (
      <>
        <p className={contentStyles.p}>
          I knew I wanted to be a designer when I realized I wasn&apos;t afraid to get paid for it.
        </p>

        <p className={contentStyles.p}>
          I&apos;ll explain...
        </p>

        <p className={contentStyles.p}>
          I went to art school where I majored in illustration and photography. Needless to say, after graduation I worked in sporting goods fitting people for running shoes (I was damn good, by the way). I never dug into how to make money with my art because I never felt comfortable with the idea of something so subjective being scrutinized in that way. Like how people who know they&apos;re about to get ripped off scrutinize the gleam in their car salesman&apos;s eye. 
        </p>

        <p className={contentStyles.p}>
          But I was always technically sharp and to me, design was more technical. If someone needed a logo, no problem. Logos cost this much. I fell in love with design because it was the perfect combination of drawing a sublime portrait and troubleshooting my neighbor&apos;s Dell. It always starts with logos, flyers, posters, brochures...so many brochures. In the beginning it was mostly print. When I started, web design was still young. But I kept my eye on it and dabbled where I could and eventually, it&apos;s all I did.
        </p>

        <p className={contentStyles.p}>
          If design called to my logical side, the web called to my preternatural lust for improvement. When I sent that file entitled &quot;business_card_CEO_front_FINAL_FINAL2.pdf&quot; to the printer for that run of 10,000, the mouse-up event on the send button to his hotmail.com business address was what the racing instructors used to call a Pampers™ moment. On the web, however, I could fix a typo faster than that same PDF would load in Adobe Acrobat. I&apos;m not condoning sloppiness, of course. Diapers are expensive.
        </p>

        <p className={contentStyles.p}>
          There&apos;s always too much to show, but somehow still not enough.
        </p>
        <div className="flex flex-col gap-12 justify-center items-center pt-12">
          <Image src="/images/work/branding/cercana-logo-stacked-primary.svg" alt="Branding" width={600} height={1000} />
          <Image src="/images/work/branding/divide-logo.png" alt="Branding" width={600} height={1000} />
          <Image src="/images/work/branding/app-icons-2.png" alt="Branding" width={1000} height={1000} />
          <Image src="/images/work/branding/liminal-lab-logo-vector.svg" alt="Branding" width={1000} height={1000} />
        </div>
      </>
    )
  },
  3: {
    title: "Why 37 Signals? Why Now?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Featured Work</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h3 className={contentStyles.h3}>Project Alpha</h3>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3 className={contentStyles.h3}>Project Beta</h3>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  4: {
    title: "Why Design?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Technical Expertise</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className={contentStyles.h2}>Programming Languages</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className={contentStyles.h2}>Frameworks & Tools</h2>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  5: {
    title: "Why the Web?",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Get in Touch</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className={contentStyles.h2}>Social Media</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className={contentStyles.h2}>Professional Networks</h2>
        <p className={contentStyles.p}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    )
  },
  6: {
    title: "Experience",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Professional Journey</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Key Achievements</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Skills & Expertise</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  },
  7: {
    title: "Projects",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Featured Work</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Open Source</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Side Projects</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  },
  8: {
    title: "Contact",
    image: "/images/tim-hat-forest.png",
    content: (
      <>
        <h2 className={contentStyles.h2}>Get in Touch</h2>
        <p className={contentStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2 className={contentStyles.h2}>Social Media</h2>
        <p className={contentStyles.p}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2 className={contentStyles.h2}>Professional Networks</h2>
        <p className={contentStyles.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    )
  }
};

export default function Sidebar({ selectedTile, onClose, onNextTile }: SidebarProps) {
  const content = selectedTile ? tileContent[selectedTile as keyof typeof tileContent] : null;
  const nextTileId = selectedTile ? (selectedTile % 3) + 1 : null;
  const nextTileContent = nextTileId ? tileContent[nextTileId as keyof typeof tileContent] : null;

  // Reset scroll position after fade out
  useEffect(() => {
    if (selectedTile) {
      const timer = setTimeout(() => {
        const sidebar = document.querySelector('.sidebar-content');
        if (sidebar) {
          sidebar.scrollTop = 0;
        }
      }, 150); // Match the fade duration
      return () => clearTimeout(timer);
    }
  }, [selectedTile]);

  if (!selectedTile) return null;

  return (
    <>
      {/* Close Button */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
          onClick={onClose}
          className="fixed right-[49%] top-7 text-white/60 hover:text-white transition-colors z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed right-0 top-0 h-full w-[50%] bg-gray-100/95 backdrop-blur-sm border-l border-gray-200/20 shadow-xl"
      >
        <div className="h-full overflow-y-auto sidebar-content">
          <div className="p-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <AnimatePresence mode="wait">
                {selectedTile && (
                  <motion.h1 
                    key={selectedTile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="text-4xl font-black text-gray-900 tracking-tight"
                  >
                    {content?.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {selectedTile && (
                <motion.div
                  key={selectedTile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  {content?.image && (
                    <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                      <Image
                        src={content?.image || ''}
                        alt={content?.title || ''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="space-y-2 flex flex-col gap-4">
                    {content?.content}
                  </div>
                  
                  {/* Navigation Button */}
                  <div className="mt-8">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, delay: 0.3, ease: "easeOut" }}
                      onClick={onNextTile}
                      className="w-full bg-gray-900 text-white hover:text-white flex justify-center items-center gap-4 hover:bg-gray-800 p-8 rounded-full transition-all duration-150 ease-out"
                    >
                      <h2 className="text-xl font-black tracking-tight">{nextTileContent?.title}</h2>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
} 