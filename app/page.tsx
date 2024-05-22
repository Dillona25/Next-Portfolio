import { Grid } from "@/Components/Grid";
import { Hero } from "@/Components/Hero";
import { Projects } from "@/Components/Projects";
import { Testimonials } from "@/Components/Testimonials";
import { FloatingNav } from "@/Components/ui/FloatinNavbar";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[1350px] w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <Projects />
        <Testimonials /> */}
      </div>
    </main>
  );
}
