import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-container" className="min-h-screen text-white bg-[#030002] selection:bg-red-600 selection:text-white">
      {/* Premium Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
