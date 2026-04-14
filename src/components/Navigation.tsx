import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, FileText, Menu, Moon, Sun, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    theme === "dark"
      ? ["rgba(6, 8, 15, 0)", "rgba(6, 8, 15, 0.8)"]
      : ["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 0.85)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-4 py-4"
      style={{ backgroundColor, backdropFilter: backdropBlur, WebkitBackdropFilter: backdropBlur }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-display font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          PORTFOLIO
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 glass-card text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="px-4 py-2 glass-card text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card">
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
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-foreground"
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
          <motion.button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`text-lg font-medium py-2 ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
