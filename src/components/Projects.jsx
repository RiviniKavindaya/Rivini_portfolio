function Projects() {
  const projects = [
    {
      title: "Particle Distribution Analysis",
      subtitle: "Deep Learning · Final Year Research · 2024",
      desc: "Automated particle segmentation & counting in Electron Microscopy images using deep learning. Selected as one of the top 5 research projects in the Dept. of Computer Science, University of Jaffna.",
      badge: "🏆 Top 5 Research",
      iconBg: "rgba(124,109,250,0.2)",
      iconColor: "#a89bff",
      stack: ["PyTorch", "Deep Learning"],
      link: null,
      year: null,
    },
    {
      title: "Online Shopping Store",
      subtitle: "E-Commerce Platform · Individual Project",
      desc: "Full-featured e-commerce platform with product browsing, cart management & checkout. Includes an admin dashboard for managing products, users, and orders.",
      badge: null,
      iconBg: "rgba(20,184,166,0.2)",
      iconColor: "#2dd4bf",
      stack: ["React.js", "Laravel", "MySQL"],
      link: "https://github.com/RiviniKavindaya/online_Shopping_Store",
      year: "2024",
    },
    {
      title: "Healthcare Management System",
      subtitle: "Team Software Project",
      desc: "Web-based healthcare management system for efficient patient and doctor management, built collaboratively as a team software project at university.",
      badge: null,
      iconBg: "rgba(244,63,94,0.15)",
      iconColor: "#fb7185",
      stack: ["React.js", "Laravel", "MySQL"],
      link: "https://github.com/abishan-shan/Team-SoftwareProject",
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 border-t border-white/10">
      <p className="text-primary uppercase tracking-[3px] text-xs mb-3">
        04 — Projects
      </p>

      <h2 className="font-syne text-5xl font-bold mb-14">
        Things I've <span className="text-white/30">Built</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-primary/40 transition"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                style={{ background: project.iconBg, color: project.iconColor }}
              >
                ⚙️
              </div>

              {project.badge && (
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                  {project.badge}
                </span>
              )}

              {project.year && !project.badge && (
                <span className="text-xs text-white/30">{project.year}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-syne text-xl font-bold text-white mb-2">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="text-white/40 text-xs mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-white/60 text-sm leading-7 mb-6">
              {project.desc}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary font-medium flex items-center gap-2 hover:opacity-70"
              >
                GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;