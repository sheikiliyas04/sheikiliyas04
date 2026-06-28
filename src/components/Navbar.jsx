import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logoImg from '../assets/logo.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      >
        <div
          className={`w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${
            isScrolled
              ? 'bg-bg-dark/60 backdrop-blur-md border-border-custom shadow-xl shadow-black/10'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center"
          >
            <img src={logoImg} alt="KSI Logo" className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest transition-colors duration-300 font-medium ${
                    isActive ? 'text-primary' : 'text-gray-custom hover:text-white-custom'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative px-6 py-2 rounded-full overflow-hidden group border border-border-custom bg-white-custom text-bg-dark text-xs font-semibold uppercase tracking-widest hover:text-white-custom hover:bg-transparent transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden text-white-custom hover:text-primary transition-colors duration-300 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-bg-dark flex flex-col justify-start md:hidden border-b border-border-custom"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-2xl font-semibold uppercase tracking-widest text-gray-custom hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-6 w-full py-4 text-center rounded-full bg-primary text-white-custom text-sm font-semibold uppercase tracking-widest hover:bg-primary/95 transition-colors active:scale-[0.98]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
