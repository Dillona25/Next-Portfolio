import { InfiniteMovingCards } from "./ui/MovingCards";
import React from "react";
import { testimonials } from "@/data/data";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <h1 className="text-center font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl pb-5 sm:pb-10">
        Some kind
        <span className="text-purple"> words..</span>
      </h1>

      <div className="flex flex-col items-center mt-5">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
