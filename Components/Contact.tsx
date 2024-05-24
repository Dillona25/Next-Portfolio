"use client";
import React from "react";
import { Label } from "../Components/ui/Label";
import { Input } from "../Components/ui/Input";
import { cn } from "@/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { GoArrowRight } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact({
  handleMessageModal,
}: {
  handleMessageModal?: () => void;
}) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_2giy5m7", "template_qmr8c6e", form.current, {
        publicKey: "sKJvZiM-ZQ5-Pjc96",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          if (form.current) form.current.reset();
          if (handleMessageModal) handleMessageModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center relative"
      id="contact"
    >
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
        <div className="flex items-center gap-2 mt-5">
          <p className="font-semibold text-purple text-sm sm:text-base">
            My links
          </p>
          <div className="flex gap-2">
            <div className="flex items-center mr-5">
              <GoArrowRight className="text-purple" />
            </div>
            <a href="https://github.com/Dillona25" target="_blank">
              <FaGithubSquare className="text-[25px] sm:text-[30px] hover:scale-110 ease-in-out duration-[.5s] hover:cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/dillonarnold/" target="_blank">
              <FaLinkedin className="text-[25px] sm:text-[30px] hover:scale-110 ease-in-out duration-[.5s] hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black-100">
        <form ref={form} className="my-8" onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="from_name"
                placeholder="First Name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Last Name"
                name="from_lastName"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Your Email"
              type="email"
              name="user_email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              type="text"
              id="message"
              placeholder="Your message 😁"
              name="message"
            />
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
