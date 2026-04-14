import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pricing Tool",
    category: "Internal Tool",
    description: "Built an internal pricing and project tracking tool with project listing, progress tracking, and cost estimation with real-time API integration.",
    tags: ["Next.js", "TypeScript", "MUI", "Tailwind CSS"],
    image: "linear-gradient(135deg, hsl(190 100% 30%) 0%, hsl(270 91% 40%) 100%)",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Movie DB",
    category: "Web Application",
    description: "A responsive movie browsing application using TMDB API with global state management using Redux Toolkit and optimized API handling with Vite.",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite"],
    image: "linear-gradient(135deg, hsl(270 91% 40%) 0%, hsl(185 100% 30%) 100%)",
    link: "https://github.com/Sonal-Vishwakarma/MovieDB-Website",
    github: "https://github.com/Sonal-Vishwakarma/MovieDB-Website",
  },
  {
    id: 3,
    title: "Resto Website",
    category: "Restaurant Website",
    description: "A fully responsive restaurant website with modern UI and mobile-first design, featuring menu, testimonials, and contact form sections.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "linear-gradient(135deg, hsl(330 100% 40%) 0%, hsl(190 100% 30%) 100%)",
    link: "https://github.com/Sonal-Vishwakarma/Restowebsite",
    github: "https://github.com/Sonal-Vishwakarma/Restowebsite",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[200px]" />
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
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <motion.div
                className="glass-card overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project image/gradient */}
                <div
                  className="aspect-video relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.link}
                      className="p-3 glass-card text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="p-3 glass-card text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass-card text-xs font-medium text-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card font-medium text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
