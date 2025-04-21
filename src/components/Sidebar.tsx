import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import React from 'react';
import Lightbox from './Lightbox';
import Link from 'next/link';

interface SidebarProps {
  selectedTile: number | null;
  onClose: () => void;
  onTileClick: (tile: number) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
  lightboxImageIndex: number | null;
  setLightboxImageIndex: (index: number | null) => void;
  currentGallery: number | string | null;
  setCurrentGallery: (gallery: number | string | null) => void;
}

// Reusable content styles
const contentStyles = {
  h2: "text-2xl font-[900] text-gray-900 mt-8 mb-4",
  h3: "text-xl font-[900] text-gray-800 mt-6 mb-4",
  p: "text-2xl text-gray-600 leading-relaxed mb-4 font-[400] font-serif",
  a: "text-sky-600 hover:text-sky-800 transition-colors",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6",
  caption: "text-sm text-gray-500 mb-4",
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
            I&apos;m used to working with Rails, HTML, CSS, as well as JS/React. They didn&apos;t ask me to learn how to code. I did it to speed us up. 
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
          Fourteen years ago, a geospatial technology company named Spatial Networks hired me as their 12th employee and first designer. They needed... everything. My title was UI Designer, but I did it all, online and in print. But we&apos;ll come back to that.
        </p>

        <p className={contentStyles.p}>
          Before that, I founded a design agency called Whiteshark Creations with an engineering colleague. We worked with some great clients in our first year, but I realized agency life wasn&apos;t my calling and I left for other design pursuits.
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
          But what I loved most was working on the web apps and the marketing websites. Since we were so small, everyone had to be trusted to make what they were doing count without much (or any) oversight. This was the first time I was encouraged to simply address the customer problem and build. There was no time for hand-wringing. 
        </p>

        <p className={contentStyles.p}>
          We took a few cracks at different product ideas. Allinspections, the product I was actually hired to help create, couldn&apos;t find its niche and had to be sunsetted after 18 months. The CEO called me into his office. I was proud of the work we did, but when he told me we had to shut it down, I worried that would be my final meeting at Spatial Networks. Instead, he offered me the opportunity to head up something new: Fulcrum.
        </p>

        <p className={contentStyles.p}>
          Since 2012, this has been the flagship product of Spatial Networks and my number one source of design activity. Unlike prior attempts, Fulcrum struck just the right balance of utility, ease of use, customizability, and extensibility. We were still super lean back then, but now we had people counting on our product. It felt so good to talk to customers about their issues and ideas and be able to mesh them with ours to give their companies leverage just from using our software.
        </p>

        <p className={contentStyles.p}>
          Since then, we grew every month, steady as a rock. We found product market fit. Our founders understood the importance of keeping the team tight. People who didn&apos;t perform didn&apos;t last. I was responsible the strategy and design for the marketing website, the web app, and the mobile app, all while continuing to support the corporate design materials and marketing for our parent company. It&apos;s wild to compare how we operate now with what we achieved back then with so little, but what I learned about the importance of shipping fast to keep the feedback loop tight was invaluable.

        </p>

      </>
    )
  },
  3: {
    title: "My Work",
    image: null,
    content: (handleImageClick: (index: number) => void) => (
      <>
        {/* <h2 className={contentStyles.h2}>Some of my work (addition/curation ongoing):</h2> */}
        {/* <p className={contentStyles.p}>
          A sample of my work. More to come...
        </p> */}

        <div className={`${contentStyles.gridContainer}`}>
          {workImages.filter(img => img.gallery === 1).map((image, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 ${image.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <div className="cursor-pointer relative group" onClick={() => handleImageClick(workImages.indexOf(image))}>
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={1000} 
                  height={1000}
                  className="transition-opacity hover:opacity-[60%]" 
                />
                {projectDetails[image.projectKey || ''] && (
                  <div className="absolute bottom-2 left-2">
                    <div className="p-2 text-gray-300/90">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <p className={contentStyles.caption}>{image.alt}</p>
            </div>
          ))}
        </div>
        <p className={contentStyles.p}>I went to art school where I majored in illustration and photography.</p>
        <p className={contentStyles.p}>After graduation I worked in sporting goods. A great start, I know.</p>
        <p className={contentStyles.p}>I spent my days fitting people for running shoes (I was damn good, by the way) and my nights working on my design portfolio. Despite the BFA(popover) in my posession and my love for making beautiful images, I never felt comfortable pursuing how to make money with my art. The idea of something so personal and subjective being scrutinized by someone else never squared with me.</p>
        <p className={contentStyles.p}>But I was always technically sharp, and to me design was more technical. If someone needed a logo, no problem. &ldquo;Logos cost this much&rdquo;. I fell in love with design because it was the perfect combination of drawing a sublime portrait and troubleshooting my neighbor&apos;s Dell. </p>
        <p className={contentStyles.p}>Design careers of the early 2000&apos;s always kicked off with logos, flyers, posters, and brochures... so many brochures. In the beginning it was mostly print, with some corporate Powerpoint decks(popover/footnote) thrown in. When I started, web design was still young. But I kept my eye on it and dabbled where I could and eventually, it&apos;s all I did.</p>
        <p className={contentStyles.p}>If design called to my logical side, the web as a medium called to my preternatural lust for improvement. When I sent that file entitled &quot;business-card-CEO-front_FINAL-FINAL2.pdf&quot; to the printer for that run of 10,000, the click-event on the send button in Outlook was (popover: what the racing instructors used to call) a Pampers™ moment. On the web, however, I could fix a typo faster than that same PDF would load in Adobe Acrobat. I&apos;m not condoning sloppiness, of course. Diapers are expensive.</p>            

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
      </>
    )
  },
};

interface WorkImage {
  src: string;
  alt: string;
  projectKey?: string;
  gallery: number;
  fullWidth?: boolean;
}

const workImages: WorkImage[] = [
  // Gallery 1: My Work
  { src: "/images/work/isolated/iso-fulcrum-icon.png", alt: "Fulcrum", projectKey: "Fulcrum", gallery: 1, fullWidth: false },
  { src: "/images/work/isolated/iso-sni-icon.jpg", alt: "Spatial Networks", projectKey: "Spatial Networks", gallery: 1, fullWidth: false },
  { src: "/images/work/isolated/iso-allinspections-icon-alt.jpg", alt: "Allinspections", projectKey: "Allinspections", gallery: 1, fullWidth: false },
  { src: "/images/work/isolated/iso-divide-logo.jpg", alt: "Divide for PS4", projectKey: "Divide", gallery: 1, fullWidth: false },
  { src: "/images/work/gridded/grid-icons-all.jpg", alt: "Branding", projectKey: "Branding", gallery: 1, fullWidth: false },
  { src: "/images/work/full/full-personal-painting-1.jpg", alt: "Personal/Misc", projectKey: "Personal", gallery: 1, fullWidth: false },
  // Gallery 2: Others' Work
  { src: "/images/work/others/stripe-press.jpg", alt: "For visual balance, color usage, and succulently 3D rendered books: Stripe Press", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/maggie.jpg", alt: "For impeccable illustration, long-form idea cultivation, and writing that's tight as a drum: Maggie Appleton", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/ddc.jpg", alt: "For the three E's of design (Energy, Enthusiasm, and Effort) and a staggering preponderance of work: Aaron Draplin", fullWidth: true, gallery: 2 },
  { src: "/images/work/others/levelsio.jpg", alt: "For \"You can just build things\": Levels.io", fullWidth: true, gallery: 2 },
];

interface ProjectDetails {
  title: string;
  description?: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    fullWidth?: boolean;
    gallery?: number;
  }>;
}

const projectDetails: Record<string, ProjectDetails> = {
  "Fulcrum": {
    title: "Fulcrum",
    description: "Here's a taste of some work I've done over the years at Fulcrum. More to come...",
    images: [
      { src: "/images/work/isolated/iso-fulcrum-icon-og.jpg", alt: "Fulcrum Icon OG" },
      { src: "/images/work/isolated/iso-fulcrum-logo.jpg", alt: "Fulcrum Logo" },
      { src: "/images/work/isolated/iso-fulcrum-logo-og.jpg", alt: "Fulcrum Logo OG" },
      { src: "/images/work/isolated/iso-fulcrum-logo-live.jpg", alt: "Fulcrum Logo Live" },
      { src: "/images/work/browser/browser-fulcrum-modern-builder-empty.jpg", alt: "Fulcrum Modern Builder Empty" },
      { src: "/images/work/browser/browser-fulcrum-modern-builder-selected.jpg", alt: "Fulcrum Modern Builder Selected" },
      { src: "/images/work/browser/browser-fulcrum-modern-apps-empty.jpg", alt: "Fulcrum Modern Apps Empty" },
      { src: "/images/work/browser/browser-fulcrum-modern-apps-context.jpg", alt: "Fulcrum Modern Apps Context" },
      { src: "/images/work/browser/browser-fulcrum-modern-apps-list.jpg", alt: "Fulcrum Modern Apps List" },
      { src: "/images/work/browser/browser-fulcrum-modern-dataviewer.jpg", alt: "Fulcrum Modern Dataviewer" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-office-1.jpg", alt: "Fulcrum CW Office 1" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-office-2.jpg", alt: "Fulcrum CW Office 2" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-onsite-fema-1.jpg", alt: "Fulcrum CW Onsite FEMA 1" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-onsite-fema-2.jpg", alt: "Fulcrum CW Onsite FEMA 2" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-1.jpg", alt: "Fulcrum PE Pitchdeck 1" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-2.jpg", alt: "Fulcrum PE Pitchdeck 2" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-3.jpg", alt: "Fulcrum PE Pitchdeck 3" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-4.jpg", alt: "Fulcrum PE Pitchdeck 4" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-5.jpg", alt: "Fulcrum PE Pitchdeck 5" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-6.jpg", alt: "Fulcrum PE Pitchdeck 6" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-7.jpg", alt: "Fulcrum PE Pitchdeck 7" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-8.jpg", alt: "Fulcrum PE Pitchdeck 8" },
      // { src: "/images/work/full/full-fulcrum-PE-pitchdeck-9.jpg", alt: "Fulcrum PE Pitchdeck 9" },
      { src: "/images/work/full/full-fulcrum-brochure-mini-1.jpg", alt: "Fulcrum Brochure Mini 1" },
      { src: "/images/work/full/full-fulcrum-brochure-mini-2.jpg", alt: "Fulcrum Brochure Mini 2" },
      { src: "/images/work/full/full-fulcrum-brochure-mini-mockup.jpg", alt: "Fulcrum Brochure Mini Mockup", fullWidth: true },
      { src: "/images/work/full/full-fulcrum-ad-2.jpg", alt: "Fulcrum Ad 2" },
      { src: "/images/work/full/full-fulcrum-book-cover.jpg", alt: "Fulcrum Book Cover" },
      // { src: "/images/work/full/full-fulcrum-tradeshow.jpg", alt: "Fulcrum Tradeshow", fullWidth: true },
      { src: "/images/work/full/full-fulcrum-book-fundamentals.jpg", alt: "Fulcrum Book Fundamentals" },
      { src: "/images/work/full/full-fulcrum-book-data.jpg", alt: "Fulcrum Book Data" },
      { src: "/images/work/full/full-fulcrum-handout.jpg", alt: "Fulcrum Handout", fullWidth: true },
      // { src: "/images/work/gridded/grid-fulcrum-buildericons-v2.jpg", alt: "Fulcrum Builder Icons v2" },
      { src: "/images/work/gridded/grid-fulcrum-buildericons-v3.jpg", alt: "Fulcrum Builder Icons v3" },
      { src: "/images/work/isolated/iso-fulcrum-package.jpg", alt: "Fulcrum Package" },
      { src: "/images/work/isolated/iso-fulcrum-packaging-holidaybox.jpg", alt: "Fulcrum Holiday Box", fullWidth: true },
      { src: "/images/work/isolated/iso-fulcrum-pullup-1.jpg", alt: "Fulcrum Pullup 1" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-tradeshow.jpg", alt: "Fulcrum CW Tradeshow" },
      { src: "/images/work/isolated/iso-fulcrum-sticker-1.jpg", alt: "Fulcrum Sticker 1" },
      { src: "/images/work/isolated/iso-fulcrum-sticker-2.jpg", alt: "Fulcrum Sticker 2" },
      { src: "/images/work/isolated/iso-fulcrum-button.jpg", alt: "Fulcrum Button" },
      { src: "/images/work/snapshots/snapshot-fulcrum-cw-early-swag.jpg", alt: "Fulcrum CW Early Swag" },
      // { src: "/images/work/isolated/iso-fulcrum-icon.jpg", alt: "Fulcrum Icon" },
    ]
  },
  "Spatial Networks": {
    title: "Spatial Networks",
    description: "Our parent company and Fulcrum's first customer.",
    images: [
      { src: "/images/work/isolated/iso-sni-icon.jpg", alt: "Spatial Networks Icon" },
      { src: "/images/work/isolated/iso-sni-logo.jpg", alt: "Spatial Networks Logo" },
      { src: "/images/work/browser/browser-sni-2011.jpg", alt: "Spatial Networks 2011 Site" },
      { src: "/images/work/browser/browser-sni-2013.jpg", alt: "Spatial Networks 2013 Site" },
      { src: "/images/work/browser/browser-sni-2017.jpg", alt: "Spatial Networks 2017 Site" },
      { src: "/images/work/browser/browser-sni-2019-1.jpg", alt: "Spatial Networks 2019 Site 1" },
      // { src: "/images/work/browser/browser-sni-2019-2.jpg", alt: "Spatial Networks 2019 Site 2" },
      { src: "/images/work/browser/browser-sni-2019-3.jpg", alt: "Spatial Networks 2019 Site 3" },
      { src: "/images/work/browser/browser-sni-2019-4.jpg", alt: "Spatial Networks 2019 Site 4" },
      { src: "/images/work/browser/browser-sni-2019-5.jpg", alt: "Spatial Networks 2019 Site 5" },
      { src: "/images/work/browser/browser-sni-foresight-1.jpg", alt: "Spatial Networks Foresight" },
      { src: "/images/work/isolated/iso-sni-icon-fall.jpg", alt: "Spatial Networks Icon fall" },
      { src: "/images/work/isolated/iso-sni-icon-fall-tshirt.jpg", alt: "Spatial Networks Icon fall tshirt" },
      { src: "/images/work/full/full-sni-ad-1.jpg", alt: "Spatial Networks Ad 1" },
      { src: "/images/work/full/full-sni-ad-2.jpg", alt: "Spatial Networks Ad 2" },
      // { src: "/images/work/full/full-sni-flyer-1.jpg", alt: "Spatial Networks Flyer" },
      { src: "/images/work/isolated/iso-sni-tradeshow-booth.jpg", alt: "Spatial Networks Tradeshow booth" },
      { src: "/images/work/snapshots/snapshot-sni-tradeshow-1.jpg", alt: "Spatial Networks Tradeshow" },
    ]
  },
  "Allinspections": {
    title: "Allinspections",
    description: "Precursor to Fulcrum and my first product at Spatial Networks.",
    images: [
      { src: "/images/work/isolated/iso-allinspections-icon.jpg", alt: "Allinspections Icon" },
      // { src: "/images/work/isolated/iso-allinspections-icon-alt.jpg", alt: "Allinspections Icon Alt" },
      { src: "/images/work/isolated/iso-allinspections-logo.jpg", alt: "Allinspections Logo" },
      { src: "/images/work/isolated/iso-allinspections-pullup-1.jpg", alt: "Allinspections Pullup 1", fullWidth: true },
      // { src: "/images/work/isolated/iso-allinspections-pullup-2.jpg", alt: "Allinspections Pullup 2", fullWidth: true },
      { src: "/images/work/isolated/iso-allinspections-pullup-2-alt.jpg", alt: "Allinspections Pullup 2 Alt", fullWidth: true },
      { src: "/images/work/isolated/iso-allinspections-pullup-3.jpg", alt: "Allinspections Pullup 3", fullWidth: true },
      { src: "/images/work/browser/browser-allinspections-0.jpg", alt: "Allinspections Site 1" },
      { src: "/images/work/browser/browser-allinspections-1.jpg", alt: "Allinspections Site 2" },
      { src: "/images/work/browser/browser-allinspections-2.jpg", alt: "Allinspections Site 3" },
      { src: "/images/work/browser/browser-allinspections-3.jpg", alt: "Allinspections Site 4" },
      { src: "/images/work/browser/browser-allinspections-4-1.jpg", alt: "Allinspections Site 5" },
      { src: "/images/work/browser/browser-allinspections-4-2.jpg", alt: "Allinspections Site 6" },
      { src: "/images/work/browser/browser-allinspections-4-3.jpg", alt: "Allinspections Site 7" },
      { src: "/images/work/browser/browser-allinspections-4-4.jpg", alt: "Allinspections Site 8" },
      { src: "/images/work/browser/browser-allinspections-4-5.jpg", alt: "Allinspections Site 9" },
      // { src: "/images/work/browser/browser-allinspections-4-6.jpg", alt: "Allinspections Site 10" },
      { src: "/images/work/browser/browser-allinspections-5.jpg", alt: "Allinspections Site 11" },
      { src: "/images/work/full/full-allinspections-brochure.jpg", alt: "Allinspections Brochure", fullWidth: true },
      // { src: "/images/work/full/full-allinspections-ad.jpg", alt: "Allinspections Ad", fullWidth: true },
      { src: "/images/work/full/full-allinspections-double-ad.jpg", alt: "Allinspections Double Ad", fullWidth: true },
      { src: "/images/work/full/full-allinspections-card-1.jpg", alt: "Allinspections Card 1" },
      { src: "/images/work/full/full-allinspections-card-2.jpg", alt: "Allinspections Card 2" }
    ]
  },
  "Divide": {
    title: "Divide",
    description: "Branding, UI, game menus, HUD, icons, AR assets, world-building design.",
    images: [
      { src: "/images/work/isolated/iso-divide-logo.jpg", alt: "Divide Logo" },
      { src: "/images/work/isolated/iso-divide-vestige-sticker.jpg", alt: "Divide Vestige Sticker" },
      { src: "/images/work/full/full-divide-ingame-world-1.jpg", alt: "Divide In-Game World 1", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-world-2.jpg", alt: "Divide In-Game World 2", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-world-3.jpg", alt: "Divide In-Game World 3", fullWidth: true },
      { src: "/images/work/full/full-divide-ps4.jpg", alt: "Divide PS4" },
      { src: "/images/work/gridded/grid-divide-icons.jpg", alt: "Divide Icons" },
      { src: "/images/work/full/full-divide-ingame-UI-1.jpg", alt: "Divide In-Game UI 1", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-UI-2.jpg", alt: "Divide In-Game UI 2", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-codex-1.jpg", alt: "Divide In-Game Codex 1", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-codex-2.jpg", alt: "Divide In-Game Codex 2", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-codex-3.jpg", alt: "Divide In-Game Codex 3", fullWidth: true },
      { src: "/images/work/full/full-divide-ingame-codex-4.jpg", alt: "Divide In-Game Codex 4", fullWidth: true },
      { src: "/images/work/full/full-divide-brochure-1.jpg", alt: "Divide Brochure 1", fullWidth: true },
      { src: "/images/work/full/full-divide-brochure-2.jpg", alt: "Divide Brochure 2", fullWidth: true },
      { src: "/images/work/full/full-divide-soundtrack.jpg", alt: "Divide Soundtrack" },
      { src: "/images/work/full/full-divide-soundtrack-ep.jpg", alt: "Divide Soundtrack EP" },
      { src: "/images/work/full/full-divide-soundtrack-deluxe.jpg", alt: "Divide Soundtrack Deluxe" },
      { src: "/images/work/snapshots/snapshot-divide-recording-1.jpg", alt: "Divide Recording Session" }
    ]
  },
  "Branding": {
    title: "Branding",
    description: "Various logos and identity work.",
    images: [
      { src: "/images/work/isolated/iso-allinspections-icon.jpg", alt: "Allinspections Icon" },
      { src: "/images/work/isolated/iso-allinspections-logo.jpg", alt: "Allinspections Logo" },
      { src: "/images/work/isolated/iso-sni-icon.jpg", alt: "Spatial Networks Icon" },
      { src: "/images/work/isolated/iso-sni-logo.jpg", alt: "Spatial Networks Logo" },
      { src: "/images/work/isolated/iso-foresight-icon.jpg", alt: "Foresight Icon" },
      { src: "/images/work/isolated/iso-foresight-logo.jpg", alt: "Foresight Logo" },
      { src: "/images/work/isolated/iso-fulcrum-icon.jpg", alt: "Fulcrum Icon" },
      { src: "/images/work/isolated/iso-fulcrum-logo.jpg", alt: "Fulcrum Logo" },
      { src: "/images/work/isolated/iso-fulcrum-icon-og.jpg", alt: "Fulcrum Icon OG" },
      { src: "/images/work/isolated/iso-fulcrum-logo-og.jpg", alt: "Fulcrum Logo OG" },
      { src: "/images/work/isolated/iso-fulcrum-logo-live.jpg", alt: "Fulcrum Logo Live" },
      { src: "/images/work/isolated/iso-divide-logo.jpg", alt: "Divide Logo" },
      { src: "/images/work/isolated/iso-liminallab-icon.jpg", alt: "Liminal Lab mark" },
      { src: "/images/work/isolated/iso-liminallab-logo.jpg", alt: "Liminal Lab Logo" },
      { src: "/images/work/isolated/iso-cercana-icon.jpg", alt: "Cercana Systems mark" },
      { src: "/images/work/isolated/iso-cercana-logo.jpg", alt: "Cercana Systems Logo" },
      { src: "/images/work/isolated/iso-exploding-tuba-icon.jpg", alt: "Exploding Tuba Studios mark" },
      { src: "/images/work/isolated/iso-exploding-tuba-logo.jpg", alt: "Exploding Tuba Studios Logo" },      
    ]
  },
  "Personal": {
    title: "Personal",
    description: "Drawing, painting, photography, creative side projects, and the like.",
    images: [
      { src: "/images/work/full/full-personal-painting-1.jpg", alt: "Painting 1" },
      { src: "/images/work/full/full-personal-painting-2.jpg", alt: "Painting 2" },
      { src: "/images/work/full/full-personal-painting-3.jpg", alt: "Painting 3" },
      { src: "/images/work/full/full-personal-painting-4.jpg", alt: "Painting 4" },
      { src: "/images/work/full/full-personal-drawing-1.jpg", alt: "Drawing 1" },
      { src: "/images/work/full/full-personal-drawing-2.jpg", alt: "Drawing 2" },
      { src: "/images/work/full/full-personal-drawing-3.jpg", alt: "Drawing 3" },
      { src: "/images/work/full/full-personal-drawing-4.jpg", alt: "Drawing 4" },
      { src: "/images/work/full/full-personal-photo-12.png", alt: "Photo 12" },
      { src: "/images/work/full/full-personal-photo-13.png", alt: "Photo 13" },
      { src: "/images/work/full/full-personal-photo-16.jpg", alt: "Photo 16" },
      { src: "/images/work/full/full-personal-photo-19.png", alt: "Photo 19" },
      { src: "/images/work/full/full-personal-photo-21.jpg", alt: "Photo 21" },
      { src: "/images/work/full/full-personal-photo-22.jpg", alt: "Photo 22" },
      { src: "/images/work/full/full-personal-photo-23.png", alt: "Photo 23" },
      { src: "/images/work/full/full-personal-photo-25.jpg", alt: "Photo 25" },
      // { src: "/images/work/full/full-personal-photo-30.jpg", alt: "Photo 30" },
      { src: "/images/work/full/full-personal-photo-31.jpg", alt: "Photo 31" },
      { src: "/images/work/full/full-personal-photo-32.png", alt: "Photo 32" },
      { src: "/images/work/full/full-personal-photo-33.png", alt: "Photo 33" },
      { src: "/images/work/full/full-personal-photo-35.jpg", alt: "Photo 35" },
      { src: "/images/work/full/full-personal-photo-36.png", alt: "Photo 36" },
      { src: "/images/work/full/full-personal-photo-41.png", alt: "Photo 41" },
      { src: "/images/work/full/full-personal-photo-42.png", alt: "Photo 42" },
      { src: "/images/work/full/full-personal-photo-44.png", alt: "Photo 44" },
      { src: "/images/work/full/full-personal-photo-45.png", alt: "Photo 45" },
      { src: "/images/work/full/full-personal-photo-46.png", alt: "Photo 46" },
      { src: "/images/work/full/full-personal-photo-47.png", alt: "Photo 47" },
      { src: "/images/work/full/full-personal-photo-51.png", alt: "Photo 51" },
      { src: "/images/work/full/full-personal-photo-54.jpg", alt: "Photo 54" },
      { src: "/images/work/full/full-personal-photo-58.png", alt: "Photo 58" },
      { src: "/images/work/full/full-personal-photo-59.png", alt: "Photo 59" },
      { src: "/images/work/full/full-personal-photo-64.png", alt: "Photo 64" },
      { src: "/images/work/isolated/iso-personal-murphys-garage.jpg", alt: "Murphy's Garage sticker" },
      { src: "/images/work/isolated/iso-personal-helmet-concept.jpg", alt: "Helmet design concept" },
    ]
  },
};
export default function Sidebar({ 
  selectedTile, 
  onClose, 
  onTileClick,
  selectedProject,
  setSelectedProject,
  lightboxImageIndex,
  setLightboxImageIndex,
  currentGallery,
  setCurrentGallery
}: SidebarProps) {
  const content = selectedTile ? tileContent[selectedTile as keyof typeof tileContent] : null;
  const nextTileId = selectedTile ? (selectedTile === 3 ? 1 : selectedTile + 1) : null;
  const nextTileContent = nextTileId ? tileContent[nextTileId as keyof typeof tileContent] : null;

  console.log('Navigation State:', {
    selectedTile,
    nextTileId,
    selectedProject,
    currentTitle: content?.title,
    nextTitle: nextTileContent?.title
  });

  // Navigation button click handler
  const handleNavigation = () => {
    if (selectedProject) {
      setSelectedProject(null);
    } else if (selectedTile === 3) {
      // If we're on the last tile (My Work), explicitly go to tile 1
      onTileClick(1);
    } else if (nextTileId) {
      // Otherwise use the calculated nextTileId
      onTileClick(nextTileId);
    }
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar-content');
      if (sidebar) {
        // Show button after scrolling down 3000px
        setShowBackToTop(sidebar.scrollTop > 3000);
      }
    };

    const sidebar = document.querySelector('.sidebar-content');
    if (sidebar) {
      sidebar.addEventListener('scroll', handleScroll);
      return () => sidebar.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    const sidebar = document.querySelector('.sidebar-content');
    if (sidebar) {
      sidebar.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  // Reset scroll position when changing projects
  useEffect(() => {
    if (selectedProject) {
      const timer = setTimeout(() => {
        const projectSidebar = document.querySelector('.project-sidebar');
        if (projectSidebar) {
          projectSidebar.scrollTop = 0;
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  if (!selectedTile) return null;

  const handleImageClick = (index: number) => {
    const clickedImage = workImages[index];
    if (clickedImage.projectKey && projectDetails[clickedImage.projectKey]) {
      setSelectedProject(clickedImage.projectKey);
    } else {
      // If no project details, show lightbox
      setCurrentGallery(clickedImage.gallery);
      setLightboxImageIndex(index);
    }
  };

  const handleProjectImageClick = (projectKey: string, index: number) => {
    // Create a unique gallery ID for this project's images
    const projectGalleryId = `project-${projectKey}`;
    
    // Set the current gallery to this project's unique ID
    setCurrentGallery(projectGalleryId);
    setLightboxImageIndex(index);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // Filter images for the current gallery
  const currentGalleryImages = currentGallery 
    ? typeof currentGallery === 'string' && currentGallery.startsWith('project-')
      // If it's a project gallery, get images from that project
      ? projectDetails[currentGallery.replace('project-', '')]?.images || []
      // Otherwise, get images from workImages
      : workImages.filter(img => img.gallery === currentGallery)
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
          ? typeof currentGallery === 'string' && currentGallery.startsWith('project-')
            ? lightboxImageIndex  // For project images, use the index directly
            : currentGalleryImages.findIndex(img => img === workImages[lightboxImageIndex])  // For work images, find the index in the filtered array
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
            className="fixed right-4 lg:right-[69%] xl:right-[49%] top-4 lg:top-7 text-white/60 hover:text-white transition-colors z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm border border-white/10"
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
        className="fixed right-0 top-0 h-full w-[100vw] lg:w-[70%] xl:w-[50%] bg-gray-100/95 lg:bg-gray-100/95 backdrop-blur-md border-l border-gray-200/20 shadow-xl z-50"
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
                      onClick={handleNavigation}
                      className="w-full bg-gray-900 text-white hover:text-white flex justify-center items-center gap-4 hover:bg-gray-800 p-8 rounded-full transition-all duration-150 ease-out"
                    >
                      <h2 className="text-xl font-black tracking-tight">
                        {selectedProject && projectDetails[selectedProject]
                          ? "Back to work" 
                          : selectedTile === 3 
                            ? "Back to short version" 
                            : nextTileContent?.title}
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
            className="fixed right-0 top-0 h-full w-[85vw] lg:w-[70%] xl:w-[50%] bg-gray-100 shadow-xl z-[60]"
            onKeyDown={(e) => {
              // Prevent keyboard events from reaching the main sidebar
              e.stopPropagation();
            }}
          >
            <div className="h-full overflow-y-auto project-sidebar">
              <div className="p-12">
                {/* Close Button */}
                <AnimatePresence>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, delay: 0.15, ease: "easeOut" }}
                    onClick={handleCloseProject}
                    className="bg-gray-200/95 lg:bg-gray-200/80 fixed right-[85vw] lg:right-[70%] xl:right-[50%] top-0 h-full w-[15vw] lg:w-[7%] xl:w-[5%] transition-colors hover:bg-gray-100/95 flex items-center justify-center group back-button"
                  >
                    <span className="writing-mode-vertical rotate-[-90deg] text-[1.5rem] font-[900] border-2 border-slate-300/20 bg-gray-100/95 text-gray-500 group-hover:text-black tracking-tight rounded-full px-4 py-2 transition-colors whitespace-nowrap">
                      BACK
                    </span>
                  </motion.button>
                </AnimatePresence>

                {/* Project Title */}
                <AnimatePresence mode="wait">
                  <motion.h2 
                    key={selectedProject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="text-3xl font-black text-gray-900 mb-6"
                  >
                    {projectDetails[selectedProject].title}
                  </motion.h2>
                </AnimatePresence>

                {/* Project Description */}
                <AnimatePresence mode="wait">
                  {projectDetails[selectedProject].description && (
                    <motion.p 
                      key={`${selectedProject}-description`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="text-xl text-gray-600 mb-12"
                    >
                      {projectDetails[selectedProject].description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Project Images */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`${selectedProject}-images`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={contentStyles.gridContainer}
                  >
                    {projectDetails[selectedProject].images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col gap-2 ${image.fullWidth ? 'md:col-span-2' : ''}`}
                      >
                        <div 
                          className="cursor-pointer relative group" 
                          onClick={() => handleProjectImageClick(selectedProject, index)}
                        >
                          <Image 
                            src={image.src}
                            alt={image.alt}
                            width={1000} 
                            height={1000}
                            className="transition-all duration-200 group-hover:opacity-[60%]" 
                          />
                        </div>
                        {image.caption && (
                          <p className={contentStyles.caption}>{image.caption}</p>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Project Navigation */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`${selectedProject}-navigation`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="mt-8"
                  >
                    {/* Next Project Button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, delay: 0.3, ease: "easeOut" }}
                      onClick={() => {
                        const projectKeys = Object.keys(projectDetails);
                        const currentIndex = projectKeys.indexOf(selectedProject);
                        const nextIndex = (currentIndex + 1) % projectKeys.length;
                        setSelectedProject(projectKeys[nextIndex]);
                      }}
                      className="w-full bg-gray-900 text-white hover:text-white flex justify-center items-center gap-4 hover:bg-gray-800 p-8 rounded-full transition-all duration-150 ease-out"
                    >
                      <h2 className="text-xl font-black tracking-tight">
                        {Object.keys(projectDetails).indexOf(selectedProject) === Object.keys(projectDetails).length - 1 
                          ? `back to ${projectDetails[Object.keys(projectDetails)[0]].title}`
                          : `Up Next: ${projectDetails[Object.keys(projectDetails)[(Object.keys(projectDetails).indexOf(selectedProject) + 1) % Object.keys(projectDetails).length]].title}`
                        }
                      </h2>
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.02 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 text-white/60 hover:text-white transition-colors z-[50] w-10 h-10 flex items-center justify-center rounded-full bg-slate-500/50 hover:bg-slate-700/80 backdrop-blur-sm border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
} 