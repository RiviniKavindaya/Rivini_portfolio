import { useState } from "react";
import { skills } from "../data/skills";

function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 px-8">
      <p className="text-primary uppercase text-xs tracking-widest mb-2">
        Technical Skills
      </p>

      <h2 className="font-syne text-5xl font-bold mb-10">
        My Tech Stack
      </h2>

      <div className="flex gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border ${
              active === cat
                ? "bg-primary border-primary"
                : "border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {skills[active].map((skill) => (
          <div
            key={skill}
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;