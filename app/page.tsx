import { Grid } from "@/Components/Grid";
import { Hero } from "@/Components/Hero";
import { Projects } from "@/Components/Projects";
import { FloatingNav } from "@/Components/ui/FloatinNavbar";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-screen-2xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
      </div>
    </main>
  );
}
