import AviNews from "../public/AviNews.png";
import US from "../public/Us.png";
import WTW from "../public/WTW.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const AviNewsData = {
  src: AviNews.src,
  alt: "Image Of AviNews",
  title: "AviNews",
  description:
    "From concept to reality, AviNews is my best project yet. A full-stack website connected to an API that allows users to read up on the most recent aviation related news. Created using TypeScript, tailwind CSS, Express.js and MongoDB. Users are able to make an account, edit their profile, save articles, and delete articles.",
  buttonOneText: "View site",
  buttonTwoText: "Code",
};

export const AroundTheUsData = {
  src: US.src,
  alt: "Image Of Around The Us",
  title: "Around The Us",
  description:
    "Around the PNW is a project that was crafted purely with JavaScript. With a high focus in OOP the user is greeted with a stunning aesthetic website. The website is a social media page that allows the user to make it their own! From editing the profile, adding a new profile photo, and adding or deleting photos in their feed.",
  buttonOneText: "View site",
  buttonTwoText: "Code",
};

export const WTWData = {
  src: WTW.src,
  alt: "Image Of What To Wear",
  title: "What To Wear",
  description:
    "What to wear is a full-stack application. The app allows users to make a profile with a custom name, avatar and closet. Users will be recommened clothes that they have uploaded to their closet based on the outside weather. The project was made using React.js, Express, MongoDB and hosted with Google Cloud. A link to BE code can be found in the Read.me",
  buttonOneText: "View site",
  buttonTwoText: "Code",
};

export const gridItems = [
  {
    id: 1,
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    img: "/B1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open and flexible to work in anytime Zones...",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Website for Premier Cable Services LLC",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "What are you waiting for, lets chat!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const testimonials = [
  {
    quote:
      "Dillon, whom I tutored at Tripleten, is an exceptional student with a remarkable ability to grasp new concepts swiftly, particularly in our challenging field. Beyond his tech proficiency, Dillon possesses effective communication skills that significantly enhance the learning environment. Notably, he excels in uniting people with his infectious positivity and talent for inspiring others to excel. Dillon demonstrates strong teamwork and leadership qualities, making him a valuable addition to any tech team or project.",
    name: "Max Jacobsen",
    title: "Senior Software Engineer",
    image: "/Max J.jpeg",
  },
  {
    quote:
      "During TripleTen's August Code Jam, I collaborated with Dillon and three other developers to create the Flight Checker, a project spearheaded by Dillon himself. His exceptional curiosity and knack for generating unique ideas were evident throughout our collaboration. Dillon displayed a sincere eagerness to learn and embrace new tools and languages, contributing to the project's success. His commitment ensured a seamless transition from concept to execution making our journey efficient and rewarding. I wholeheartedly endorse Dillon to anyone in search of a dedicated, inquisitive, and innovative developer for their team or project.",
    name: "Anderson Marques",
    title: "React Developer",
    image: "/Anderson.jpeg",
  },
];
