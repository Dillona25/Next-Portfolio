"use client";
import React from "react";
import { Label } from "../Components/ui/Label";
import { Input } from "../Components/ui/Input";
import { cn } from "@/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { GoArrowRight } from "react-icons/go";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative">
      <div className="flex flex-col mt-[-40px]">
        <h1 className="hidden md:block max-w-[700px] text-left font-bold text-[40px] leading-[45px] md:text-5xl lg:text-6xl pb-5 sm:pb-10">
          What are you waiting for?{" "}
          <span className="text-purple">Lets chat!</span>
        </h1>
        {/* This is only for mobile */}
        <div className="flex gap-2 items-center md:hidden pb-5">
          <h1 className="text-left font-bold text-[40px] leading-[45px] md:text-5xl lg:text-6xl sm:pb-10 whitespace-nowrap">
            Lets chat<span className="text-purple">.</span>
          </h1>
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
        </div>
        {/* end of mobile <h1> */}
        <p className="uppercase tracking-widest text-xs md:mt-[-20px] text-blue-100">
          Check out my links below if thats more what your after :)
        </p>
        <div className="flex items-center gap-4 mt-5">
          <p className="font-semibold text-purple text-sm sm:text-base">
            My links
          </p>
          <GoArrowRight className="text-purple" />
        </div>
      </div>
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black-100">
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="First Name" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Last Name" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Your Email" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Password</Label>
            <Textarea type="text" id="message" placeholder="Your message 😁" />
          </LabelInputContainer>
          <Button
            otherClasses="backdrop-blur-lg mx-auto"
            title="Send Message"
            icon={<FaLocationArrow />}
            position="right"
          />
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
