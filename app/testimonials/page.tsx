import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Clients } from '@/components/Clients'
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      <Hero />
      <RecentProjects />
      <Clients />
      <Footer />
      </div>
    </main>
  );
}
