import { ReactNode } from "react";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { testimonials } from "@/data/data";
import Quote from "../assets/Quote.svg";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "./ux/Reveal";
import { FaLinkedin } from "react-icons/fa6";

export const MobileTestimonials = ({
  className,
}: {
  className?: ReactNode;
}) => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [angle, cycleAngle] = useCycle(45, -45);

  const nextSlide = () => {
    setCurrentServiceIndex((currentServiceIndex + 1) % testimonials.length);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrentServiceIndex(
      (currentServiceIndex - 1 + testimonials.length) % testimonials.length
    );
    setDirection(-1);
  };
  const currentTestimonial = testimonials[currentServiceIndex];

  return (
    <section id="mobileTest" className={`relative px-7 ${className}`}>
      <div className="flex gap-4 items-center">
        <span className="border-[#797979] border-[1px] w-full"></span>
        <h1 className="text-left font-bold leading-[40px]">
          Testimonials<span className="text-purple">.</span>
        </h1>
      </div>
      <motion.div
        className="bg-black-200 h-fit m-auto p-4 rounded-[20px] border border-white/[0.1] shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        initial={{ x: `${direction === 1 ? "100%" : "-100%"}`, rotate: angle }}
        animate={{ x: "0", rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.2,
        }}
        exit={{ x: `${direction === 1 ? "-100%" : "100%"}`, rotate: angle }}
        key={currentServiceIndex}
      >
        <div className="flex flex-col gap-4">
          <img alt="quotation mark" src={Quote.src} className="h-10 w-10" />
          <Reveal>
            <p className="text-[15px] line-clamp-[10]">
              {currentTestimonial.quote}
            </p>
          </Reveal>
          <div className="flex items-center gap-4">
            <img
              alt="Portrait of reviewer"
              src={currentTestimonial.image}
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <Reveal>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-[15px]">{currentTestimonial.name}</p>
                  <a href={currentTestimonial.linkedIn} target="_blank">
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <p className="text-[15px]">{currentTestimonial.title}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex gap-4 items-center justify-center mt-10">
        <button
          onClick={prevSlide}
          className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
        >
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};
