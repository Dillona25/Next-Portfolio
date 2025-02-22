import React, { FormEvent } from "react";
import { Label } from "../Components/ui/Label";
import { Input } from "../Components/ui/Input";
import { cn } from "@/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { GoArrowRight } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ErrorMessage } from "./ui/ErrorMessage";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function Contact({
  handleMessageModal,
}: {
  handleMessageModal?: () => void;
}) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
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

  const {
    register,
    setValue,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    sendEmail();
    if (handleMessageModal) handleMessageModal();
    reset();
  };

  return (
    <section
      className="flex justify-center items-center relative bg-black-200"
      id="contact"
    >
      <div className="max-w-[1350px] m-auto flex flex-col md:flex-row items-center justify-center px-7">
        <div className="flex flex-col">
          <h1 className="hidden mt-[-50px] md:block max-w-[800px] text-left font-bold text-[40px] leading-[45px] md:text-5xl lg:text-6xl">
            What are you waiting for?{" "}
            <span className="text-purple">Lets chat!</span>
          </h1>
          <div className="flex gap-2 items-center md:hidden">
            <h1 className="text-left font-bold  md:text-5xl lg:text-6xl sm:pb-10 whitespace-nowrap">
              Lets chat<span className="text-purple">.</span>
            </h1>
            <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
          </div>
          <p className="uppercase tracking-widest text-xs md:mt-[-20px] text-blue-100">
            Check out my links below if thats more what you're after :)
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
              <a
                href="https://www.linkedin.com/in/dillonarnold/"
                target="_blank"
              >
                <FaLinkedin className="text-[25px] sm:text-[30px] hover:scale-110 ease-in-out duration-[.5s] hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-xl w-full mx-auto rounded-2xl p-4 md:p-8 mt-10 md:mt-0 dark:bg-black-100 shadow-[0_0_20px_rgba(255,255,255,0.6)]">
          <form ref={form} className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="from_name"
                  placeholder="First Name"
                  type="text"
                  register={register("firstName", {
                    required: "We all have a first name",
                    minLength: {
                      value: 2,
                      message: "Use 2 or more characters",
                    },
                  })}
                  onChange={(evt) => {
                    const target = evt.target as HTMLInputElement;
                    setValue("firstName", target.value, {
                      shouldValidate: true,
                    });
                  }}
                />
                <span className="min-h-[20px]">
                  {errors.firstName && (
                    <ErrorMessage message={errors.firstName.message} />
                  )}
                </span>
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  required
                  id="lastname"
                  placeholder="Last Name"
                  name="from_lastName"
                  type="text"
                  register={register("lastName", {
                    required: "We all have a last name",
                    minLength: {
                      value: 2,
                      message: "Use 2 or more characters",
                    },
                  })}
                  onChange={(evt) => {
                    const target = evt.target as HTMLInputElement;
                    setValue("lastName", target.value, {
                      shouldValidate: true,
                    });
                  }}
                />
                <span className="min-h-[20px]">
                  {errors.lastName && (
                    <ErrorMessage message={errors.lastName.message} />
                  )}
                </span>
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                required
                id="email"
                placeholder="Your Email"
                type="email"
                name="user_email"
                register={register("email", {
                  required: "I cant respond without it :/",
                  pattern: {
                    value: /[\w\-.]+@([\w-]+\.)+[\w-]{2,4}/,
                    message: "Invalid Email",
                  },
                })}
                onChange={(evt) => {
                  const target = evt.target as HTMLInputElement;
                  setValue("email", target.value, { shouldValidate: true });
                }}
              />
              <span className="min-h-[20px]">
                {errors.email && (
                  <ErrorMessage message={errors.email.message} />
                )}
              </span>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                required
                id="message"
                placeholder="Your message 😁"
                name="message"
                register={register("message", {
                  required: "I wanna know why I got a random email :P",
                  minLength: {
                    value: 20,
                    message: "Make it worth while, friend!",
                  },
                })}
                onChange={(evt) => {
                  const target = evt.target as unknown as HTMLInputElement;
                  setValue("message", target.value, { shouldValidate: true });
                }}
              />
              <span className="min-h-[20px]">
                {errors.message && (
                  <ErrorMessage message={errors.message.message} />
                )}
              </span>
            </LabelInputContainer>
            <Button
              disabled={!isValid}
              otherClasses={`mx-auto ${
                isValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
            />
          </form>
        </div>
      </div>
    </section>
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
