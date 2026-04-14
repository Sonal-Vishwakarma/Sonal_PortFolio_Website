import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, FileText, Github, Linkedin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-blue/20 blur-[150px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/20 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-neon-cyan/15 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 glass-card floating hidden lg:block"
        style={{ opacity }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-neon-blue">
          <div className="w-8 h-8 rounded-full bg-neon-blue/20" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 w-16 h-16 glass-card floating-delayed hidden lg:block"
        style={{ opacity }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-neon-purple">
          <div className="w-6 h-6 rotate-45 bg-neon-purple/20" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-40 left-1/4 w-12 h-12 glass-card floating hidden lg:block"
        style={{ opacity, animationDelay: "1s" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-neon-cyan/30" />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </motion.div>

        {/* Name and title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
        >
          <span className="block text-foreground">Sonal</span>
          <span className="block gradient-text text-glow">Vishwakarma</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary mb-6 tracking-wide"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Software Engineer skilled in React.js, Next.js, JavaScript, and TypeScript,
          with hands-on experience building scalable, high-performance web applications.
          Passionate about clean code, modern frontend architectures, and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 glass-card font-semibold text-foreground hover:bg-muted/50 transition-colors rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="px-8 py-4 glass-card font-semibold text-foreground hover:text-primary hover:border-primary/50 transition-colors rounded-xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="glass-card">
              <DropdownMenuItem asChild>
                <a
                  href="/Sonal_Vishwakarma_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  PDF Format
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/Sonal_Vishwakarma_CV.docx"
                  download
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Word Format
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Sonal-Vishwakarma" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sonal-vishwakarma-187274213/" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="p-3 glass-card text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
