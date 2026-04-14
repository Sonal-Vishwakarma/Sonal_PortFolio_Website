import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "Jul 2025 - Present",
    title: "Front-End Developer",
    company: "SoftDef",
    description: "Developing and maintaining scalable user interfaces using React.js and Next.js for production applications. Integrating RESTful APIs and optimizing performance, responsiveness, and accessibility. Collaborating with designers, backend developers, and product managers to deliver high-quality UI/UX.",
    highlights: ["React.js", "Next.js", "REST APIs"],
  },
  {
    year: "Feb 2025 - Apr 2025",
    title: "Front-End Developer Intern",
    company: "BluePi Consulting Pvt. Ltd.",
    description: "Worked on front-end development using Next.js, React.js, JavaScript, TypeScript, MUI, Aceternity UI and Tailwind CSS. Integrated REST APIs and optimized UI components for better performance. Collaborated with developers to enhance user experience and application efficiency.",
    highlights: ["Next.js", "TypeScript", "MUI"],
  },
  {
    year: "Dec 2024 - Feb 2025",
    title: "Jr. Front-End Developer Intern",
    company: "Auroskkil",
    description: "Developed interactive UI components using React.js and Bootstrap. Assisted in debugging and optimizing website performance. Gained hands-on experience with Git and GitHub for version control.",
    highlights: ["React.js", "Bootstrap", "Git"],
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px]" />
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
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary neon-glow z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + 0.15 * index }}
              />

              {/* Content */}
              <motion.div
                className={`glass-card p-6 ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-primary text-sm font-mono">{exp.year}</span>
                <h3 className="text-xl font-display font-bold mt-1 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
