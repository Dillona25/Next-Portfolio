"use client";
import { Contact } from "@/Components/Contact";
import { Grid } from "@/Components/Grid";
import { Hero } from "@/Components/Hero";
import { MessageModal } from "@/Components/MessageModal";
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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-7 sm:px-10">
      <div className="max-w-[1350px] w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Contact handleMessageModal={handleMessageModal} />
        {activeModal === "Message" && <MessageModal closeModal={closeModal} />}
      </div>
    </main>
  );
}
