"use client";
import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { MessageModal } from "@/Components/MessageModal";
import { MobileTestimonials } from "@/Components/MobileTestimonials";
import { Projects } from "@/Components/Projects";
import { Testimonials } from "@/Components/Testimonials";
import { FloatingNav } from "@/Components/ui/FloatinNavbar";
import { navItems } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState("");

  const handleMessageModal = () => {
    setActiveModal("Message");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Testimonials className="hidden md:block" />
        <MobileTestimonials className="md:hidden" />
        <Contact handleMessageModal={handleMessageModal} />
        {activeModal === "Message" && <MessageModal closeModal={closeModal} />}
      </div>
    </main>
  );
}
