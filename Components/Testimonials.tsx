"use client";
import React from "react";
import { testimonials } from "@/data/data";
import { InfiniteMovingCards } from "./ui/MovingCards";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-14 md:pt-0 md:pb-36 relative">
      <div className="flex gap-4 items-center sm:pb-10">
        <h1 className="text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl whitespace-nowrap">
          Testimonials<span className="text-purple">.</span>
        </h1>
        <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
      </div>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-fit md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};
