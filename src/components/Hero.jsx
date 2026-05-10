import profile from "../assets/profile.png";
import { useEffect, useState } from "react";

const roles = [
  "React Developer",
  "Laravel Developer",
  "Full Stack Engineer",
  "AI Integrator",
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,109,250,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl order-1 lg:order-1 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="font-syne text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Full Stack <br />
            <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
              Engineer.
            </span>
          </h1>

          <div className="h-10 mt-5 text-white/60 text-xl">
            {text}
            <span className="text-primary animate-pulse">|</span>
          </div>

          <p className="text-white/60 text-lg leading-8 mt-6 max-w-xl mx-auto lg:mx-0">
            Building scalable production-ready web applications with React.js,
            Laravel, AI integrations, and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-primary hover:opacity-90 transition px-7 py-3 rounded-full text-white font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-primary transition px-7 py-3 rounded-full text-white"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (NOW ALWAYS BELOW ON MOBILE) */}
        <div className="relative flex justify-center items-center w-full lg:w-auto order-2 lg:order-2 mt-12 lg:mt-0">

          <div className="relative w-[260px] md:w-[250px] lg:w-[290px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />

            {/* IMAGE */}
            <img
              src={profile}
              alt="Profile"
              className="relative w-full rounded-[30px] border border-white/10 shadow-2xl object-cover z-10"
            />

            {/* FLOATING STATS */}

            <div className="absolute -top-10 -left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl z-20">
              <h3 className="font-syne text-xl font-bold text-white">2+</h3>
              <p className="text-white/50 text-xs">Years Experience</p>
            </div>

            <div className="absolute top-10 -right-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl z-20">
              <h3 className="font-syne text-xl font-bold text-white">10+</h3>
              <p className="text-white/50 text-xs">Projects</p>
            </div>

            <div className="absolute bottom-10 -left-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl z-20">
              <h3 className="font-syne text-xl font-bold text-white">Top 5</h3>
              <p className="text-white/50 text-xs">Research</p>
            </div>

            <div className="absolute -bottom-10 -right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl z-20">
              <h3 className="font-syne text-xl font-bold text-white">AI</h3>
              <p className="text-white/50 text-xs">Systems Integration</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;