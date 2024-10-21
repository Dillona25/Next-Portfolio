"use client";
import React, { ReactNode } from "react";
import { testimonials } from "@/data/data";
import { TestimonialCard } from "./ui/TestimonialCard";

export const Testimonials = ({ className }: { className?: ReactNode }) => {
  return (
    <section id="test" className={`relative ${className}`}>
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex gap-4 items-center sm:pb-10">
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
          <h1 className="text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl whitespace-nowrap">
            Testimonials<span className="text-purple">.</span>
          </h1>
        </div>
        <TestimonialCard items={testimonials} />
      </div>
    </section>
  );
};
