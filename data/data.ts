import AviNews from "../public/images/AviNews.png";
import US from "../public/images/Us.png";
import Flight from "../public/images/Flight.png";

export const navItems = [
  { name: "About", link: "#about", scrollPath: "about", offset: 60 },
  { name: "Projects", link: "#projects", scrollPath: "projects" },
  {
    name: "Testimonials",
    link: "#mobileTest",
    scrollPath: "mobileTest",
    offset: 60,
    className: "block md:hidden",
  },
  {
    name: "Testimonials",
    link: "#test",
    scrollPath: "test",
    offset: -10,
    className: "hidden md:block",
  },
  { name: "Contact", link: "#contact", scrollPath: "contact", offset: -10 },
];

export const AviNewsData = {
  src: AviNews.src,
  alt: "Image Of AeroTrack",
  title: "AeroTrack",
  description:
    "From concept to reality, AeroTrack is a full-stack website that allows users to read up on the most recent aviation related news and track flights! Created using TypeScript, tailwind CSS, Express.js and MongoDB.",
  Github: "https://github.com/Dillona25/AviNews",
  site: "avi-news-dillona25s-projects.vercel.app",
  stack1: "TypeScript",
  stack2: "React.js",
  stack3: "Express.js",
};

export const AroundTheUsData = {
  src: US.src,
  alt: "Image Of Around The Us",
  title: "Around The Us",
  description:
    "Around the PNW is a project that was crafted purely with JavaScript. With a high focus in OOP the user is greeted with a stunning aesthetic website. The website is a social media page that allows the user to make it their own! From editing the profile, adding a new profile photo, and adding or deleting photos in their feed.",
  Github: "https://github.com/Dillona25/AroundThePNW",
  site: "https://dillona25.github.io/AroundThePNW/",
  stack1: "HTML/CSS",
  stack2: "JavaScript",
  stack3: "WebPack",
};

export const TrackerData = {
  src: Flight.src,
  alt: "Image Of Flight Tracker",
  title: "Flight Tracker",
  description:
    "Worked in a team of 3 other Engineers to create Flight Tracker. A fully responsive website that allows users to track REAL flights from anywhere. Whether you are expecting a guest, or flying yourself, you and get 24/7 flight status. Connected to multiple 3rd party APIs to fetch airport and airline data",
  Github: "https://github.com/Dillona25/flight-checker",
  site: "https://flightchecker.netlify.app/",
  stack1: "HTML",
  stack2: "Tailwind",
  stack3: "JavaScript",
};

export const testimonials = [
  {
    quote:
      "Dillon, whom I tutored at Tripleten, is an exceptional student with a remarkable ability to grasp new concepts swiftly. Beyond his tech proficiency, Dillon possesses effective communication skills that significantly enhance the learning environment. Dillon demonstrates strong teamwork and leadership qualities. Dillon would absolutely makw a valuable addition to any tech team or project.",
    name: "Max Jacobsen",
    title: "Senior Software Engineer",
    image: "/images/Max J.jpeg",
    linkedIn: "https://www.linkedin.com/in/max-jacobson/",
  },
  {
    quote:
      "I collaborated with Dillon and three other developers to create the Flight Checker, a project spearheaded by Dillon himself. Dillon displayed a sincere eagerness to learn and embrace new tools and languages. His commitment ensured a seamless transition from concept to execution. I wholeheartedly endorse Dillon to anyone in search of a dedicated, and innovative developer for their team.",
    name: "Anderson Marques",
    title: "React Developer",
    image: "/images/Anderson.jpeg",
    linkedIn: "https://www.linkedin.com/in/fm-anderson/",
  },
  {
    quote:
      "Working with Dillon was a highlight of my time at Slopgoblins, NPO. His technical skills are top-notch, but his enthusiasm for challenges sets him apart. Interactions with Dillon were energizing, making problem-solving sessions both productive and enjoyable. He asks insightful questions and iterates ideas rapidly. Dillon's relentless drive for growth is admirable. He’s undoubtedly a catalyst for team morale.",
    name: "Joshua Duncan",
    title: "Full Stack Developer",
    image: "/images/Josh.jpeg",
    linkedIn: "https://www.linkedin.com/in/jduncan017/",
  },
];
