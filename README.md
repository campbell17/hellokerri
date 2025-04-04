# What is this?

This website is my application for the Web App Designer position at 37 Signals.

## "Hello Kerri?"

Whenever my wife does something she considers foolish, she chastises herself by saying "Hello, Kerri." It's cute as hell, so I bought the domain and put it away for a rainy day.

## Changelog

### 2025-04-04
**Add Work**
- Recategorize images
- Add more examples to work section
- Replace low res Divide screenshots

### 2025-03-29
**Cleanup and tweaks**
- Resized back button to prevent cutoff
- Added unoptimized prop to gifs
- Fixed changelog & todo formatting

### 2025-03-28
**My Work section enhancements**
- Added project navigation with next buttons
- Improved layout and transitions
- Fixed project image grid layout
- Added more work examples

### 2024-03-27
**Added info section and improved responsive design**
- Added info section with changelog and todo list
- Improved responsive styles for about section
- Added more breakpoints for better mobile experience
- Adjusted mobile sizes for modals

### 2024-03-26
**Project details and mobile improvements**
- Added project detail sidebar with content support (hidden until needed)
- Fixed keybind behavior for navigation
- Improved mobile responsiveness
- Segregated image galleries for better organization

### 2024-03-25
**UI and navigation improvements**
- Added URL parameters for deep linking
- Improved animation smoothness
- Added keyboard navigation support
- Fixed text wrapping on mobile

### 2024-03-24
**Content and UI refinements**
- Added context and content updates
- Improved tile responsiveness and layout
- Added letter animations and hover effects
- Updated background and softened tile interactions
- Fixed image voids and layout issues

### 2024-03-23
**Modal and layout improvements**
- Added modal component with animations
- Fixed sidebar and layout interactions
- Improved font loading and styling
- Added vertical layout for sidebar behavior
- Fixed component opening and closing logic

### 2024-03-22
**Core UI components and animations**
- Added masthead with animations
- Implemented background image and transitions
- Added hover effects and tile animations
- Improved scroll behavior and transitions
- Added sidebar with content placeholders

### 2024-03-21
**Initial project setup and animations**
- Added timeline component with animations
- Split out core components
- Added click actions and transitions

## Todos
- [x] Close button for nested projects is too big on xs mobile
- [x] Replace low res Divide screenshots
- [ ] Continue adding work examples
- [x] Ship nested sidebar for work that has its own section
- [ ] ~ Draggable width for Work sidebar
- [ ] ~ Add touch controls / swipe gestures
- [ ] ~ Fix inconsistent avatar overlap
- [ ] ~ Add styling for code blocks

---

# How this site came together

It began with a choice: update my stale personal site or build something new. 

My gut told me to build something new.

I drafted a few bullet points, notes, and ideas. Then the timid side of me peeked over my shoulder and added his own: "Do none of these. Just update your site, stupid."

I let a day pass. I slept on it. Looking over my notes the next day, it occurred to me there's no such thing as "just update your site." My personal site showed all the signs of neglect after spending 14 years at the same company. I had no incentive to update it, so I didn't. 

I knew if I attempted an update I would spend too much time trying to resolve existing wounds whether they related to the core outcome or not. And the core outcome was this: build something simple, interactive, and visually appealing that represented who I was, what I could do, and why I was applying. This set the foundation for every decision thereafter. Having this foundation was crucial in deciding what was a must-have vs. a ~nice-to-have.

Another critical element was to add a time constraint. I allowed myself 4 days to get the core shipped. This meant whatever it was, it had to be possible for *me* (not some hero version of me), and it had to be something I'd be proud enough to send directly to the founders. If I winced when I showed them, I failed.

This also meant I did no design mockups. I knew this was a build-to-know project. With the constraints of my idea in place, I had a general notion of what the mechanics could be. A precise design mockup was not only unnecessary, it would actively derail me. I knew I'd end up trying to match the padding values in the mockup instead of pushing the core forward toward a shippable state. I sketched up a general idea on the tiny whiteboard in my office and got to work.

![Fridge Kernel](/public/images/about-this-site/fridge-kernel.jpg)
*Trust me, it made sense in my head.*

I treated this as a loose guide to get me started knowing many or all of its pieces could be replaced as I found more compelling ways to address the core purpose.

I knew I wanted large tiles with exaggerated hover states to be the entry point to the content:

![Level 1](/public/images/about-this-site/about-level-1.gif)

I softened the corners and added a transition to give them a nice bounce when clicked. At this point I wasn't worried about the sizes just yet.

![Level 2](/public/images/about-this-site/about-level-2.gif)

Initially, I placed my photo on the corner of the first tile. I assumed that's where the "about me" content would go. I added a sidebar to hang the content and put enough lorem ipsum in there to see the scroll behavior. You'll notice a little timeline pip sliding between the tiles as you cliced through. As things fleshed out, however, it seemed more like a distraction, so I ended up scrapping it.

![Level 3](/public/images/about-this-site/about-level-3.gif)

I decided the odd placement of the photo probably wouldn't hold up as I added more, so I put it in the ubiquitous top-center. I also didn't like the way the sidebar slid over the main content. I wanted to be able to click through the tiles and have the siebar content hydrate with the corresponding text. As you can see, that decision opened up some crowding issues.

![Level 5](/public/images/about-this-site/about-level-5.gif)

At this point, I felt pretty good. I dug through everything looking for mistakes, typos, and awkward phrasing. I knew I needed to add more to the work section, but one of the things I struggle with is sifting through the years and years of artifacts and deciding which ones show well. I put some recent hits and some representitive pieces showing that I at least have some taste. But something else still felt lacking.

I called up a friend and former colleague of mine to get his take and hopefully some perspective. As we talked through my career, I realized there wasn't a tl;dr anywhere. If someone only had 90 seconds to glean what this project was for, and why it mattered, they were going to leave unhappy. I made some quick notes, we finished the call, and I added a fourth section. I put it first in line. Gimme the short version.

![Level 6](/public/images/about-this-site/about-level-6.gif)

## What's next?

I have a growing list of nice-to-haves, but adding more to the work section is critical. This will be my sole focus for now.