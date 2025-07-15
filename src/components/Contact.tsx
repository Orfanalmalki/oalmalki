import React, { useState } from "react";
import { Mail, Send, Linkedin, Github, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgrjakz");
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl p-12 glass-strong">
            <h2 className="text-4xl font-bold text-green-400 mb-4 animate-fade-in-down">
              Thank You!
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Your message has been successfully sent. I’ll get back to you as
              soon as possible.
            </p>
            <a
              href="/oalmalki"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 border border-white/20 rounded-xl text-white hover:text-green-300 transition-all duration-300"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in">
          Let's Connect
        </h2>

        <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl p-12 glass-strong">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-2xl mb-4">
              <Mail className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Get In Touch
            </h3>
            <p className="text-white/80 mb-4">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>

            {/* Location and Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} className="text-green-400" />
                <span>Based in the Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail size={18} className="text-green-400" />
                <span>orfan19@gmail.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-lg transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-lg transition-all duration-200"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-lg transition-all duration-200 resize-none"
                required
              />{" "}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                disabled={state.submitting}
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/20">
            <a
              href="https://github.com/Orfanalmalki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group"
            >
              <Github
                className="text-white group-hover:text-green-400 transition-colors"
                size={24}
              />
            </a>
            <a
              href="https://linkedin.com/in/orfanalmalki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 group"
            >
              <Linkedin
                className="text-white group-hover:text-blue-400 transition-colors"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
