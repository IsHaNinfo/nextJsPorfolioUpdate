import Hero from "@/components/main/Hero"
import Skils from "@/components/main/Skils"
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Project";

export default function Home() {
  return (
    <div>
      <main className="h-full w-full"> 
        <div className="flex flex-col  gap-20">
          <Hero/>
          <Skils/>
          <Encryption/>
          <Projects/>
        </div>
      </main>
    </div>
  );
}
