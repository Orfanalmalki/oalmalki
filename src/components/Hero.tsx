import React from "react";
import { Download, ChevronDown, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    console.log("Download CV clicked");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Centered Content */}
        <div className="text-center">
          {/* Main glass card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="space-y-8">
              {/* Hero Text */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                  <span className="text-white">Orfan</span>{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Al Malki
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-white/80 font-semibold animate-fade-in animation-delay-300">
                  Full Stack Developer
                </h2>
                <p className="text-lg md:text-xl text-white/70 animate-fade-in animation-delay-600 leading-relaxed max-w-2xl mx-auto">
                  "I love building meaningful digital experiences that solve
                  real problems"
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
                <button
                  onClick={downloadCV}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </button>

                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center gap-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <MessageCircle
                    size={20}
                    className="group-hover:animate-pulse"
                  />
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
