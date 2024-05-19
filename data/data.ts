import AviNews from "../public/AviNews.png";
import US from "../public/Us.png";
import WTW from "../public/WTW.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const GridItems = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
  },
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
