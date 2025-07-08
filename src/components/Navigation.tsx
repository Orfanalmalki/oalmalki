import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Clock from "./Clock";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/10 border-b border-white/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold text-white cursor-pointer select-none"
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") scrollToSection("home");
            }}
          >
            Orfan
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
              <button
                onClick={() => openLink("https://github.com/Orfanalmalki")}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-2 hover:bg-white/20 transition-all duration-200 group"
                title="GitHub"
              >
                <Github
                  size={18}
                  className="text-white/80 group-hover:text-white transition-colors duration-200"
                />
              </button>
              <button
                onClick={() => openLink("https://linkedin.com/in/orfanalmalki")}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-2 hover:bg-white/20 transition-all duration-200 group"
                title="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="text-white/80 group-hover:text-white transition-colors duration-200"
                />
              </button>
            </div>

            <div className="ml-4 pl-4 border-l border-white/20">
              <Clock />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-4">
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
              <button
                onClick={() => openLink("https://github.com/Orfanalmalki")}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-200 group"
                title="GitHub"
              >
                <Github
                  size={20}
                  className="text-white/80 group-hover:text-white transition-colors duration-200"
                />
              </button>
              <button
                onClick={() => openLink("https://linkedin.com/in/orfanalmalki")}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-200 group"
                title="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="text-white/80 group-hover:text-white transition-colors duration-200"
                />
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20 text-center">
              <Clock />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
