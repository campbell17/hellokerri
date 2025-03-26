import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import React from 'react';
import Lightbox from './Lightbox';

interface SidebarProps {
  selectedTile: number | null;
  onClose: () => void;
  onNextTile: () => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
}

// Reusable content styles
const contentStyles = {
  h2: "text-2xl font-[900] text-gray-900 mt-8 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-2xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif",
  a: "text-sky-600 hover:text-sky-800 transition-colors"
} as const;

interface TileContent {
  title: string;
  image: string | null;
  content: ((handleImageClick: (index: number) => void) => React.ReactNode) | React.ReactNode;
}

const tileContent: Record<number, TileContent> = {
  1: {
    title: "The Short Version",
    image: null,
    content: (
      <>
        <h2 className={contentStyles.h2}>Here&apos;s What You Need to Know</h2>
        <ul className="space-y-4 list-disc list-outside ml-5">
          <li className={contentStyles.p}>
            I was the sole designer on <a href="https://www.fulcrumapp.com" target="_blank" rel="noopener noreferrer" className={contentStyles.a}>Fulcrum</a> for its first 10 years while it grew from a simple idea to $12M+ ARR with 2,000+ customers.
          </li>
          <li className={contentStyles.p}>
            This included web app, mobile Apps, branding, marketing website, print materials.
          </li>
          <li className={contentStyles.p}>
            I&apos;m used to working with Rails, HTML, CSS, as well as React. They didn&apos;t ask me to learn how to code. I did it to speed us up. 
          </li>
          <li className={contentStyles.p}>
            In addition to working on Fulcrum, I was also solely responsible for designing and shipping the branding, website, and print / trade show materials for our parent company, Spatial Networks.
          </li>
          <li className={contentStyles.p}>
            I write a lot and I write for fun. You can read what I publish on <a href="https://campbellseventeen.substack.com" target="_blank" rel="noopener noreferrer" className={contentStyles.a}>Substack</a>.
          </li>
          <li className={contentStyles.p}>
            I enjoy sports and I love Formula 1. I haven&apos;t missed a race in 25 years.
          </li>
        </ul>
        <p className={contentStyles.p}>
          To dig a little deeper, read on...
        </p>

      </>
    )
  },
  
  2: {
    title: "My Story",
    image: null,
    content: (
      <>
        <p className={contentStyles.p}>
          Fourteen years and seven months ago, I joined Spatial Networks as their 12th employee and first design hire. They needed... everything. My title was UI Designer, but I did it all, online and in print. But we&apos;ll come back to that.
        </p>

        <p className={contentStyles.p}>
          Before that, I founded a design agency called Whiteshark Creations with a colleague, though I realized agency life wasn&apos;t my calling and I signed over my portion the business soon after.
        </p>

        <p className={contentStyles.p}>
          Prior to going solo, my design career began its infancy, when Macromedia was still a household name and Web 2.0 was hitting it&apos;s bubbly prime. I started as a web designer and this is where I first clapped eyes on naked HTML & CSS - No WYSIWYG editor to hide all the crimes. We had dedicated developers to write all the code, so my exposure and practice only came in fits and starts. I wouldn&apos;t feel the power of `git push origin master` until my first year working at Spatial Networks.
        </p>

        <p className={contentStyles.p}>
          When you&apos;re the only designer for a company with big ambitions, becoming a generalist is a matter of survival. I have sketchbooks with pages chock full of logos, mobile app screens, mobile app icons, and trade show pull-up banners for offshoots of ideas that didn&apos;t (and never would) exist.
        </p>

        <p className={contentStyles.p}>
          I loved it.
        </p>

        <p className={contentStyles.p}>
          But what I loved most was working on the web apps and the marketing websites. Since we were so small, everyone had to be trusted to make what they were doing count without much (or any) oversight. I was shocked at how much creative freedom I was given. This was the first time I was encouraged to just build. Everyone who needed to see it before it went live took their peek, gave it a nod, maybe asked for a minor tweak, then simply said &quot;Looks sweet, man. Ship it&quot;.
        </p>

        <p className={contentStyles.p}>
          We took a few cracks at different product ideas. Allinspections, the product I was actually hired to help create, couldn&apos;t find its niche and had to be sunsetted after 18 months. The CEO called me into his office. I was proud of the work we did, but when he told me we had to shut it down, I worried that would be my final meeting at Spatial Networks. Instead, he offered me the opportunity to head up something new: Fulcrum.
        </p>

        <p className={contentStyles.p}>
          Since 2012, this has been the flagship product of Spatial Networks and my number one source of design activity. Unlike prior attempts, Fulcrum struck just the right balance of utility, ease of use, customizability, and extensibility. We were still super lean back then, but now we had people counting on our product. It felt so good to talk to customers about their issues and ideas and be able to mesh them with ours to give their companies leverage just from using our software.
        </p>

        <p className={contentStyles.p}>
          Since then, we grew every month, steady as a rock. We found product market fit. Our founders understood the importance of keeping the team tight. People who didn&apos;t perform didn&apos;t last. I was responsible for the marketing website, the web app, and the mobile app design, all while continuing to support the corporate design materials and marketing for our parent company. It&apos;s wild to compare how we operate now with what we achieved back then with so little, but what I learned about simply putting your head down and shipping was invaluable.

        </p>

      </>
    )
  },
  3: {
    title: "My Work",
    image: null,
    content: (handleImageClick: (index: number) => void) => (
      <>
        <p className={contentStyles.p}>
          I knew I wanted to be a designer when I realized I wasn&apos;t afraid to get paid.
        </p>

        <p className={contentStyles.p}>
          I&apos;ll explain...
        </p>

        <p className={contentStyles.p}>
          I went to art school where I majored in illustration and photography. Needless to say, after graduation I worked in sporting goods fitting people for running shoes (I was damn good, by the way). I never dug into how to make money with my art because I never felt comfortable with the idea of something so subjective being scrutinized in that way. Like how people who know they&apos;re about to get ripped off scrutinize the gleam in their car salesman&apos;s eye. 
        </p>

        <p className={contentStyles.p}>
          But I was always technically sharp and to me, design was more technical. If someone needed a logo, no problem. Logos cost this much. I fell in love with design because it was the perfect combination of drawing a sublime portrait and troubleshooting my neighbor&apos;s Dell. It always starts with logos, flyers, posters, brochures... so many brochures. In the beginning it was mostly print. When I started, web design was still young. But I kept my eye on it and dabbled where I could and eventually, it&apos;s all I did.
        </p>

        <p className={contentStyles.p}>
          If design called to my logical side, the web called to my preternatural lust for improvement. When I sent that file entitled &quot;business-card-CEO-front_FINAL-FINAL2.pdf&quot; to the printer for that run of 10,000, the mouse-up event on the send button to his hotmail.com business address was what the racing instructors used to call a Pampers™ moment. On the web, however, I could fix a typo faster than that same PDF would load in Adobe Acrobat. I&apos;m not condoning sloppiness, of course. Diapers are expensive.
        </p>

        <p className={contentStyles.p}>
          The following is a collection of some of my work, followed by a few of my favorites by other designers and builders.
        </p>
        <h2 className={contentStyles.h2}>Some of my work (I&apos;m adding/curating as we speak - pardon the dust):</h2>
        <div className="flex flex-col gap-8 pt-12">
          {workImages.slice(0, 18).map((image, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 ${!image.fullWidth ? 'lg:w-1/2' : 'w-full'}`}
            >
              <div className="cursor-pointer" onClick={() => handleImageClick(index)}>
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={1000} 
                  height={1000}
                  className="transition-opacity hover:opacity-[90%]" 
                />
              </div>
              <p className="text-sm text-gray-500 mb-4">{image.alt}</p>
            </div>
          ))}
        </div>
        <h2 className={contentStyles.h2}>Some of my favorite work by others:</h2>
        {workImages.slice(18, 22).map((image, index) => (
          <div key={index + 18} className="flex flex-col gap-2">
            <div className="cursor-pointer" onClick={() => handleImageClick(index + 18)}>
              <Image 
                src={image.src}
                alt={image.alt}
                width={1000} 
                height={1000}
                className="transition-opacity" 
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">{image.alt}</p>
          </div>
        ))}
      </>
    )
  },
  4: {
    title: "Why 37 Signals? Why Now?",
    image: null,
    content: (
      <>
        <Image src="/images/carpe-diem.png" alt="Branding" width={1000} height={1000} />
        <p className={contentStyles.p}>
          Software company culture is often misrepresented. People think culture can be manufactured with the right perks or free lunches or weekly challenges in Slack. &quot;What&apos;s your favorite summer song? The one with the most heart reactions wins an Amazon gift card!&quot;
        </p>

        <p className={contentStyles.p}>
          These companies are unserious.
        </p>

        <p className={contentStyles.p}>
          It&apos;s not all their fault. It takes bravery to break out of the inertia of the status quo, and it&apos;s been said that most people don&apos;t want to succeed - they want to avoid failure. And when you fill your company with people like that, that&apos;s the culture that will emerge. People start turning a blind eye to obvious problems. Stagnation sets in, leading to major celebrations for effort instead of outcome because the outcomes are fewer and farther between.
        </p>

        <p className={contentStyles.p}>
          It&apos;s no wonder it&apos;s impossible to tell what a company is like until you work there.
        </p>

        <p className={contentStyles.p}>
          But I don&apos;t want to know about your flag football league. I want to know how you work. Does the way you translate ideas into something a person can click in a web browser make sense?
        </p>

        <p className={contentStyles.p}>
          Which leads me to why I&apos;m applying to work at 37 Signals.
        </p>

        <p className={contentStyles.p}>
          Over the years as the public faces of the company, Jason, David, and Ryan were always fearless pillars of transparency to me, which by itself was enough to know I wanted to be a part of whatever they were doing. Intellectual honesty like that is unconscionably rare. But when I read Shape Up in 2019, something else happened. A part of my brain I didn&apos;t know existed woke up. I felt like my eyes had been closed this whole time and now I could see what we were up against. I knew 37 Signals was lean by design, so the odds of a design position opening up at the right time were slim. So if I couldn&apos;t work <em>at</em> 37 Signals, at least we could work <em>like</em> 37 Signals. I read it on Saturday, wrote the pitch to implement it on Sunday, and presented it to product leadership on Monday. If I had anything to do with it, this was the only way I wanted to work.
        </p>

        <p className={contentStyles.p}>
          As for the position you&apos;re hiring for now, a Web App Product Designer: this was the most on-the-nose job description I&apos;ve ever read. While my design career covers the entire range of roles, the last half-decade was exclusively dedicated to enhancing and improving our web app. My energy comes from seeing the feature spun up on a git branch, not in Figma. My most rewarding recent work, and the thing that kept me going through some difficult changes, was working hand-in-hand with 1 developer, workshopping ideas about our feature, and finding the best way to ship something under the constraints we were given.
        </p>

        <p className={contentStyles.p}>
          Also, as if it wasn&apos;t obvious already, I love to write.
        </p>

        <p className={contentStyles.p}>
          I have a story to tell about the arc of my 14 year-long stint with Fulcrum, but that&apos;s best shared in person over a meal. In my mind I had a plan. End my career here. But if the opportunity ever arose to work at 37 Signals...end my career there instead.
        </p>

        <p className={contentStyles.p}>
          I&apos;ve got a few decades of great work left.
        </p>

        <p className={contentStyles.p}>
          Let&apos;s do it together.
        </p>

      </>
    )
  },
  5: {
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
  6: {
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
  7: {
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
  8: {
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
  }
};

const workImages = [
  // Gallery 1: My Work
  { src: "/images/work/branding/logo-cercana2.jpg", alt: "Cercana Systems", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-cercana-full.jpg", alt: "Cercana Systems", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-liminallab.jpg", alt: "Liminal Lab", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-liminallab-full.jpg", alt: "Liminal Lab", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-fulcrum.jpg", alt: "Fulcrum", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-fulcrum-circle.jpg", alt: "Fulcrum", fullWidth: true, gallery: 1 },
  { src: "/images/work/web/fulcrum-social-opt.jpg", alt: "A shred of press", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-divide.jpg", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide1.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide2.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide3.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide4.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide5.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide6.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/asset-divide7.webp", alt: "Divide", fullWidth: true, gallery: 1 },
  { src: "/images/work/branding/logo-sni.jpg", alt: "Spatial Networks, Inc", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/allinspections-ad2.png", alt: "Allinspections Ad", fullWidth: true, gallery: 1 },
  { src: "/images/work/other/allinspections-ad.jpg", alt: "Allinspections Ad", fullWidth: true, gallery: 1 },
  // Gallery 2: Others' Work
  { src: "/images/work/others/stripe-press.jpg", alt: "For visual balance, color usage, and succulently 3D rendered books: Stripe Press", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/maggie.jpg", alt: "For impeccable illustration, long-form idea cultivation, and writing that's tight as a drum: Maggie Appleton", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/ddc.jpg", alt: "For the three E's of design (Energy, Enthusiasm, and Effort) and a staggering preponderance of work: Aaron Draplin", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/levelsio.jpg", alt: "For \"You can just build things\": Levels.io", fullWidth: true, gallery: 2 },
];

interface ProjectDetails {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const projectDetails: Record<string, ProjectDetails> = {
  "Cercana Systems": {
    title: "Cercana Systems",
    description: "A comprehensive branding project for Cercana Systems, including logo design, brand guidelines, and marketing materials. The project focused on creating a modern, professional identity that reflected their position in the technology sector.",
    images: [
      { src: "/images/work/branding/logo-cercana2.jpg", alt: "Cercana Systems Logo", caption: "Primary logo design" },
      { src: "/images/work/branding/logo-cercana-full.jpg", alt: "Cercana Systems Full Brand", caption: "Extended brand elements" },
      // Add more images as needed
    ]
  },
  "Liminal Lab": {
    title: "Liminal Lab",
    description: "Brand identity design for Liminal Lab, focusing on creating a distinctive visual language that represents their innovative approach to research and development.",
    images: [
      { src: "/images/work/branding/logo-liminallab.jpg", alt: "Liminal Lab Logo", caption: "Primary logo design" },
      { src: "/images/work/branding/logo-liminallab-full.jpg", alt: "Liminal Lab Full Brand", caption: "Extended brand elements" },
      // Add more images as needed
    ]
  },
  // Add more projects as needed
};

export default function Sidebar({ 
  selectedTile, 
  onClose, 
  onNextTile,
  selectedProject,
  setSelectedProject 
}: SidebarProps) {
  const content = selectedTile ? tileContent[selectedTile as keyof typeof tileContent] : null;
  const nextTileId = selectedTile ? (selectedTile === 4 ? 1 : selectedTile + 1) : null;
  const nextTileContent = nextTileId ? tileContent[nextTileId as keyof typeof tileContent] : null;
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [currentGallery, setCurrentGallery] = useState<number | null>(null);

  // Reset scroll position after fade out
  useEffect(() => {
    if (selectedTile) {
      const timer = setTimeout(() => {
        const sidebar = document.querySelector('.sidebar-content');
        if (sidebar) {
          sidebar.scrollTop = 0;
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedTile]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImageIndex !== null) {
          setLightboxImageIndex(null);
          setCurrentGallery(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxImageIndex, selectedProject, setSelectedProject, onClose]);

  if (!selectedTile) return null;

  const handleImageClick = (index: number) => {
    const clickedImage = workImages[index];
    if (clickedImage.gallery === 1) { // Only handle clicks on work images
      // Check if we have project details for this image
      if (projectDetails[clickedImage.alt]) {
        setSelectedProject(clickedImage.alt);
      } else {
        // If no project details, show lightbox
        setCurrentGallery(clickedImage.gallery);
        setLightboxImageIndex(index);
      }
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // Filter images for the current gallery
  const currentGalleryImages = currentGallery 
    ? workImages.filter(img => img.gallery === currentGallery)
    : [];

  return (
    <>
      <Lightbox
        isOpen={lightboxImageIndex !== null}
        onClose={() => {
          setLightboxImageIndex(null);
          setCurrentGallery(null);
        }}
        images={currentGalleryImages}
        initialImageIndex={lightboxImageIndex !== null 
          ? currentGalleryImages.findIndex(img => img === workImages[lightboxImageIndex])
          : 0
        }
      />

      {/* Close Button */}
      <AnimatePresence>
        {!selectedProject && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0, 
                delay: 0, 
              }
            }}
            onClick={onClose}
            className="fixed right-4 lg:right-[49%] top-7 text-white/60 hover:text-white transition-colors z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: selectedProject ? "-10%" : 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed right-0 top-0 h-full w-[98vw] lg:w-[50%] bg-gray-100/95 lg:bg-gray-100/95 backdrop-blur-md border-l border-gray-200/20 shadow-xl z-50"
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
                    {typeof content?.content === 'function' 
                      ? content.content(handleImageClick)
                      : content?.content}
                  </div>
                  
                  {/* Navigation Button */}
                  <div className="mt-8">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, delay: 0.3, ease: "easeOut" }}
                      onClick={() => {
                        if (selectedProject) {
                          setSelectedProject(null);
                        }
                        onNextTile();
                      }}
                      className="w-full bg-gray-900 text-white hover:text-white flex justify-center items-center gap-4 hover:bg-gray-800 p-8 rounded-full transition-all duration-150 ease-out"
                    >
                      <h2 className="text-xl font-black tracking-tight">
                        {nextTileId === 1 ? `back to ${nextTileContent?.title}` : nextTileContent?.title}
                      </h2>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Project Details Sidebar */}
      <AnimatePresence>
        {selectedProject && projectDetails[selectedProject] && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed right-0 top-0 h-full w-[98vw] lg:w-[50%] bg-white shadow-xl z-[60]"
          >
            <div className="h-full overflow-y-auto">
              <div className="p-12">
                {/* Close Button */}
                <AnimatePresence>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, delay: 0.3, ease: "easeOut" }}
                    onClick={handleCloseProject}
                    className="fixed right-[98vw] lg:right-[50%] top-0 h-full w-[5%] transition-colors hover:bg-gray-100/95 flex items-center justify-center group back-button"
                  >
                    <span className="writing-mode-vertical rotate-[-90deg] top-[5%] text-[1.5rem] font-[900] border-2 border-slate-300/20 bg-gray-100/95 text-gray-500 group-hover:text-black tracking-tight rounded-full px-4 py-2 transition-colors">
                      BACK
                    </span>
                  </motion.button>
                </AnimatePresence>

                {/* Project Title */}
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                  {projectDetails[selectedProject].title}
                </h2>

                {/* Project Description */}
                <p className="text-xl text-gray-600 mb-12">
                  {projectDetails[selectedProject].description}
                </p>

                {/* Project Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectDetails[selectedProject].images.map((image, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="relative aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      {image.caption && (
                        <p className="text-sm text-gray-500">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 