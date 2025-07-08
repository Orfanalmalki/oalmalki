import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl mx-6 p-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Orfan Al Malki. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
