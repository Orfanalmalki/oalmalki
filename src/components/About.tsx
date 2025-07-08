import React from "react";
import { User, Globe } from "lucide-react";

const About = () => {
  const languages = ["Dutch", "English", "Arabic"];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Photo - Left Side - Takes 1/3 (2 columns out of 5) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-400/20 blur-xl animate-pulse"></div>
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/20 flex items-center justify-center relative z-10">
                  <img
                    src="/files/pp.png"
                    alt="Orfan Al Malki's Portrait"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-xl opacity-60"></div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sky-500/20 rounded-2xl">
                <User className="text-sky-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">About Me</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Full-Stack Developer with over 3 years of experience building
              scalable web applications for clients in banking and healthcare.
              Skilled in modern technologies including React, Next.js, Node.js,
              NestJS, and cloud platforms like AWS and Azure. Proven ability to
              design clean architectures, optimize performance, and deliver
              user-focused solutions across frontend and backend.
            </p>

            {/* Languages */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-sky-500/20 rounded-xl">
                <Globe className="text-sky-400" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Languages I Speak
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-sky-500/20 to-sky-500/20 border border-sky-400/30 rounded-xl text-sky-300 font-medium hover:bg-sky-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
