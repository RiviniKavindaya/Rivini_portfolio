// src/components/Experience.jsx

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-8 border-t border-white/10"
    >
      <p className="text-primary uppercase tracking-[3px] text-xs mb-3">
        03 — Experience
      </p>

      <h2 className="font-syne text-5xl font-bold mb-14">
        Where I've <span className="text-white/30">Worked</span>
      </h2>

      <div className="space-y-12">

        {/* ================= CAREER 1 ================= */}
        <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-white/40 text-sm">
              Feb 2025 – Present
            </span>

            <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
              Full-time
            </span>
          </div>

          <h3 className="font-syne text-3xl font-bold mb-1">
            Software Engineer
          </h3>

          <p className="text-white/40 mb-6">
            Intro Soft Global Solutions · Colombo, Sri Lanka
          </p>

          <ul className="space-y-3 text-white/60 text-sm leading-7 mb-6">
            <li>• Full Stack development across frontend and backend systems</li>
            <li>• Requirement gathering, client communication, and production deployment support</li>
            <li>• Bug fixing, performance tuning, and system optimization</li>
          </ul>

          {/* PROJECTS */}
          <div className="space-y-4">

            <div className="border border-white/10 rounded-xl p-4 bg-black/20">
              <h4 className="text-white font-semibold">CareDrive System</h4>
              <p className="text-white/50 text-sm mt-1">
                End-to-end vehicle valuation workflow system automating inquiry tickets → valuation reports → invoicing → HRM & payroll.
                Integrated AI-powered OCR using Google Cloud Vision + OpenAI for CR document data extraction.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-4 bg-black/20">
              <h4 className="text-white font-semibold">StaffSync Payroll System</h4>
              <p className="text-white/50 text-sm mt-1">
                Full HRM & payroll platform with secure mobile attendance, GPS validation, geofencing, biometric verification,
                device binding, and offline sync with conflict resolution.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-4 bg-black/20">
              <h4 className="text-white font-semibold">EnergyCCTV Inventory System</h4>
              <p className="text-white/50 text-sm mt-1">
                Improved performance using DB indexing, query optimization, caching, and server-side pagination for large-scale data handling.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-4 bg-black/20">
              <h4 className="text-white font-semibold">GreenBook.lk</h4>
              <p className="text-white/50 text-sm mt-1">
                Public automotive & machinery transaction repository. Contributed to feature development, maintenance, and production fixes.
              </p>
            </div>

          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Laravel", "PHP", "MySQL", "Redux", "Tailwind", "Flutter", "AWS"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ================= CAREER 2 ================= */}
        <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-white/40 text-sm">
              Jun 2024 – Jan 2025
            </span>

            <span className="bg-cyan-400/20 text-cyan-300 text-xs px-3 py-1 rounded-full">
              Internship
            </span>
          </div>

          <h3 className="font-syne text-3xl font-bold mb-1">
            Software Engineer Intern
          </h3>

          <p className="text-white/40 mb-6">
            Intro Soft Global Solutions · Colombo, Sri Lanka
          </p>

          <ul className="space-y-3 text-white/60 text-sm leading-7 mb-6">
            <li>• Built microfinance system (pawning, leasing, loans, financial operations)</li>
            <li>• Developed CloudWave bulk messaging system (WhatsApp/SMS campaigns)</li>
            <li>• Implemented queue-based processing and cron job scheduling</li>
            <li>• Client meetings, QA testing, and production bug fixing on cPanel</li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;