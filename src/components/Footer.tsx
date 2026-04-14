import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/Sonal-Vishwakarma", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sonal-vishwakarma-187274213/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-display font-bold gradient-text">
              PORTFOLIO
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} Sonal Vishwakarma. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
