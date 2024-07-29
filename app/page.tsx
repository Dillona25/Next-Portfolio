"use client";
import { About } from "@/Components/About";
import { Background } from "@/Components/Background";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { MessageModal } from "@/Components/MessageModal";
import { MobileTestimonials } from "@/Components/MobileTestimonials";
import { Projects } from "@/Components/Projects";
import ResumeConfirmModal from "@/Components/ResumeModal";
import { Testimonials } from "@/Components/Testimonials";
import { FloatingNav } from "@/Components/ui/FloatinNavbar";
import { navItems } from "@/data/data";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  const [activeModal, setActiveModal] = useState("");

  const handleMessageModal = () => {
    setActiveModal("Message");
  };

  const handleConfirmModal = () => {
    setActiveModal("Confirm");
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
        <Background handleConfirmModal={handleConfirmModal} />
        <Testimonials className="hidden md:block" />
        <MobileTestimonials className="md:hidden" />
        <Contact handleMessageModal={handleMessageModal} />
        {activeModal === "Message" && <MessageModal closeModal={closeModal} />}
        {activeModal === "Confirm" && (
          <ResumeConfirmModal handleCloseConfirmModal={closeModal} />
        )}
      </div>
    </main>
  );
}
