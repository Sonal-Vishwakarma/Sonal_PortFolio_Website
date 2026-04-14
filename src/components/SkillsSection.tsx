import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js / Next.js", level: 90, color: "from-neon-blue to-neon-cyan" },
  { name: "JavaScript", level: 90, color: "from-neon-blue to-neon-purple" },
  { name: "TypeScript", level: 80, color: "from-neon-purple to-neon-pink" },
  { name: "Tailwind CSS / Bootstrap", level: 88, color: "from-neon-cyan to-neon-blue" },
  { name: "Java", level: 75, color: "from-neon-pink to-neon-purple" },
  { name: "HTML / CSS", level: 92, color: "from-neon-purple to-neon-blue" },
];

const technologies = [
  "React.js", "Next.js", "JavaScript", "TypeScript", "Java",
  "Tailwind CSS", "Bootstrap", "MUI", "Aceternity UI", "HTML",
  "CSS", "Redux Toolkit", "REST APIs", "Git", "GitHub",
  "VS Code", "Vite", "Vercel",
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-widest text-sm">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills bars */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + 0.1 * index, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="glass-card px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + 0.03 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Additional info card */}
            <motion.div
              className="mt-8 glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="font-semibold text-foreground mb-2">Always Learning</h4>
              <p className="text-muted-foreground text-sm">
                Strong foundation in Data Structures & Algorithms (DSA) and Object-Oriented
                Programming (OOPs). Passionate about clean code, modern frontend architectures,
                and continuous learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
