function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10 h-[60px] flex items-center justify-between px-8">
      <h1 className="font-syne text-xl font-bold">
        rk<span className="text-primary">.</span>
      </h1>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-white/60">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

     <a
    href="#contact"
    className="bg-primary px-5 py-2 rounded-full text-sm inline-block"
    >
    Hire Me
    </a>
    </nav>
  );
}

export default Navbar;