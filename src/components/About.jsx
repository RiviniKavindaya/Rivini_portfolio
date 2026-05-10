
function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 lg:px-20 border-t border-white/10"
    >
      {/* Section Tag */}
      <p className="text-primary uppercase tracking-[3px] text-xs mb-3">
        01 — About Me
      </p>

      {/* Title */}
      <h2 className="font-syne text-4xl md:text-5xl font-bold mb-12 leading-tight">
        Who I Am <span className="text-white/30">& What I Do</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* TEXT */}
          <div className="space-y-5 text-white/60 leading-8 text-[15px]">
            <p>
              I'm a Full Stack Software Engineer with experience building
              scalable, production-ready web applications using React.js and
              Laravel.
            </p>

            <p>
              Currently at Intro Soft Global Solutions in Colombo, I work across the full development lifecycle — from requirement gathering and architecture design, through to deployment and ongoing optimization. I've shipped AI-powered pipelines, real-time GPS systems, and high-performance inventory backends.
            </p>

            <p>
              I hold a BSc (Hons) in Computer Science from the University of
              Jaffna, where my final year deep learning research was selected as
              a Top 5 project in the department.
            </p>

            <p>
              I enjoy building systems that are not just functional, but
              scalable, optimized, and production-ready.
            </p>
          </div>

          {/* LINKS */}
          <div className="mt-8 space-y-3 text-sm">
            <a
              href="https://github.com/RiviniKavindaya"
              target="_blank"
              rel="noreferrer"
              className="block text-white/60 hover:text-primary transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rivini-kavindaya"
              target="_blank"
              rel="noreferrer"
              className="block text-white/60 hover:text-primary transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:rivinisanduni@gmail.com"
              className="block text-white/60 hover:text-primary transition"
            >
              Email: rivinisanduni@gmail.com
            </a>
          </div>
        </div>

       {/* RIGHT SIDE */}
<div className="grid sm:grid-cols-2 gap-4">

  {[
    {
      title: "Full Stack Development",
      sub: "React.js · Laravel  · REST APIs",
    },
    {
      title: "AI & Machine Learning",
      sub: "PyTorch · TensorFlow · OCR Pipelines · Deep Learning",
    },
    {
      title: "Mobile Development",
      sub: "Flutter based cross-platform mobile apps with REST API integration",
    },
    {
      title: "Cloud & DevOps",
      sub: "AWS S3 & EC2 · cPanel · Linux · Git",
    },
    {
      title: "Database & Performance",
      sub: "MySQL · MongoDB · Query Optimization · Caching",
    },
    {
      title: "Education",
      sub: "BSc (Hons) Computer Science · University of Jaffna",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="bg-white/5 border border-white/10 hover:border-primary/30 transition rounded-2xl p-5"
    >
      <div className="text-white font-medium text-[15px] mb-1">
        {item.title}
      </div>
      <div className="text-white/60 text-[13px]">
        {item.sub}
      </div>
    </div>
  ))}

</div>
      </div>
    </section>
  );
}

export default About;