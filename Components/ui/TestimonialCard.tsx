"use client";
import React from "react";
import Quote from "../../assets/Quote.svg";
import { Reveal } from "../ux/Reveal";
import { FaLinkedin } from "react-icons/fa6";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image?: string;
  LinkedIn?: string;
};

type TestimonialCardProps = {
  items: Testimonial[];
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap gap-5 items-center justify-center">
      {items.map((item) => (
        <li
          className="bg-black-100 max-w-[415px] relative rounded-2xl border border-b-0 flex-shrink-0 border-white/[0.1] px-8 py-6 md:w-[450px]"
          key={item.name}
        >
          <blockquote>
            <div className="flex flex-col gap-4">
              <img alt="quotation mark" src={Quote.src} className="h-10 w-10" />
              <Reveal>
                <p className="line-clamp-[10]">{item.quote}</p>
              </Reveal>
              <div className="flex items-center gap-4">
                <img
                  alt="Portrait of reviewer"
                  src={item.image}
                  className="h-14 w-14 rounded-full"
                />
                <div className="flex flex-col">
                  <Reveal>
                    <div className="flex items-center justify-center gap-2">
                      <p>{item.name}</p>
                      <FaLinkedin className="hover:scale-110 ease-in-out cursor-pointer text-2xl" />
                    </div>
                  </Reveal>
                  <Reveal>
                    <p>{item.title}</p>
                  </Reveal>
                </div>
              </div>
            </div>
          </blockquote>
        </li>
      ))}
    </ul>
  );
};
