import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Clean Code", description: "Scalable & maintainable" },
    { icon: Palette, label: "Design Focus", description: "Pixel-perfect UIs" },
    { icon: Zap, label: "Performance", description: "Optimized experiences" },
    { icon: Sparkles, label: "Innovation", description: "Cutting-edge tech" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/30 via-neon-purple/20 to-neon-cyan/30 rounded-3xl blur-3xl" />
              
              {/* Avatar container */}
              <motion.div
                className="relative glass-card p-2 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-muted to-background overflow-hidden">
                  <img src="/image/mypic.jpg" alt="Sonal Vishwakarma" className="w-full h-full object-cover object-top rounded-2xl" />
                </div>
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -right-4 top-1/4 glass-card px-4 py-3 floating"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <p className="text-2xl font-bold gradient-text">1+</p>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-3 floating-delayed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block text-primary font-semibold mb-4 tracking-widest text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              ABOUT ME
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Turning <span className="gradient-text">vision</span> into
              <br /> digital reality
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              I'm a passionate Software Engineer and Front-End Developer with hands-on
              experience building scalable, high-performance web applications using React.js,
              Next.js, JavaScript, and TypeScript. Proficient in modern UI frameworks like
              Tailwind CSS, MUI, and Bootstrap for creating responsive and accessible interfaces.
              And I have a strong foundation in data structures and algorithms, enabling me to solve complex problems efficiently. I thrive in collaborative environments,
               leveraging version control systems like Git and platforms like GitHub to contribute to open-source projects and work seamlessly with teams. With a commitment to continuous learning, I stay updated with the latest industry trends and best practices to deliver innovative solutions that exceed expectations.
            </motion.p>

            {/* Highlight cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:text-neon-purple transition-colors" />
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;