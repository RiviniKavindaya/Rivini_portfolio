function Contact() {
  return (
    <section id="contact" className="py-24 px-8 border-t border-white/10">
      <p className="text-primary uppercase tracking-[3px] text-xs mb-3">
        05 — Contact
      </p>

      <h2 className="font-syne text-5xl font-bold mb-14">
        Let's work <span className="text-white/30">together</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* Email */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              ✉️
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                Email
              </p>
              <a
                href="mailto:rivinisanduni@gmail.com"
                className="text-white text-sm hover:text-primary"
              >
                rivinisanduni@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              📞
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                Phone
              </p>
              <p className="text-white text-sm">+94 765 541 564</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              🔗
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/rivini-kavindaya"
                target="_blank"
                rel="noreferrer"
                className="text-white text-sm hover:text-primary"
              >
                rivini-kavindaya
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              💻
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                GitHub
              </p>
              <a
                href="https://github.com/RiviniKavindaya"
                target="_blank"
                rel="noreferrer"
                className="text-white text-sm hover:text-primary"
              >
                RiviniKavindaya
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              📍
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                Location
              </p>
              <p className="text-white text-sm">
                Pothuwatawana, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CTA */}
        <div className="bg-primary/10 border border-primary/20 rounded-3xl p-10">
          <h3 className="font-syne text-3xl font-bold mb-4">
            Open to opportunities
          </h3>

          <p className="text-white/60 leading-8 mb-8">
            I'm actively looking for Software Engineer roles where I can
            contribute to impactful systems, grow my expertise in cloud
            technologies and scalable architectures, and collaborate with
            great teams.
          </p>

          <a
            href="mailto:rivinisanduni@gmail.com"
            className="inline-block bg-primary px-7 py-3 rounded-full text-white font-medium hover:opacity-80 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;