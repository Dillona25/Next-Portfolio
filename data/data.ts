import AviNews from "../public/images/AviNews.png";
import US from "../public/images/Us.png";
import Flight from "../public/images/Flight.png";

export const navItems = [
  { name: "About", link: "#about", scrollPath: "about", offset: 60 },
  { name: "Projects", link: "#projects", scrollPath: "projects", offset: -20 },
  {
    name: "Testimonials",
    link: "#mobileTest",
    scrollPath: "mobileTest",
    offset: -10,
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
  alt: "Image Of AviNews",
  title: "AeroTrack",
  description:
    "From concept to reality, AeroTrack is a full-stack website that allows users to read up on the most recent aviation related news and track flights. Created using TypeScript, tailwind CSS, Express.js and MongoDB. The app allows users to save articles, save flights and much more",
  Github: "https://github.com/Dillona25/AviNews",
  site: "https://www.avinews.twilightparadox.com/",
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
      "Dillon, whom I tutored at Tripleten, is an exceptional student with a remarkable ability to grasp new concepts swiftly, particularly in our challenging field. Beyond his tech proficiency, Dillon possesses effective communication skills that significantly enhance the learning environment. Notably, he excels in uniting people with his infectious positivity and talent for inspiring others to excel. Dillon demonstrates strong teamwork and leadership qualities, making him a valuable addition to any tech team or project.",
    name: "Max Jacobsen",
    title: "Senior Software Engineer",
    image: "/images/Max J.jpeg",
  },
  {
    quote:
      "During TripleTen's August Code Jam, I collaborated with Dillon and three other developers to create the Flight Checker, a project spearheaded by Dillon himself. His exceptional curiosity and knack for generating unique ideas were evident throughout our collaboration. Dillon displayed a sincere eagerness to learn and embrace new tools and languages, contributing to the project's success. His commitment ensured a seamless transition from concept to execution making our journey efficient and rewarding. I wholeheartedly endorse Dillon to anyone in search of a dedicated, inquisitive, and innovative developer for their team or project.",
    name: "Anderson Marques",
    title: "React Developer",
    image: "/images/Anderson.jpeg",
  },
];
