import About from "@/components/about/About";
import Archive from "@/components/archive/Archive";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import { LanguageProvider } from "@/context/language";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <main className="flex min-h-screen flex-col bg-mycolor-400">
          <Navbar />
          <div className="container text-mycolor-700 px-12 py-4">
            <Hero />
            <Archive />
            <About />
            <Project />
            <Contact />
          </div>
          <Footer />
        </main>
      </LanguageProvider>
    </>
  );
}
