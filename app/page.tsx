import { Hero } from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatinNavbar";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
