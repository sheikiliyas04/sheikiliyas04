import logoImg from '../assets/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative min-h-[55vh] bg-black text-white-custom pt-24 pb-10 px-6 border-t border-white-custom/5 flex flex-col justify-between overflow-hidden">
      
      {/* Decorative Grid Line backdrop */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white-custom/10 to-transparent" />
      
      <div className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left Column: Brief introduction */}
        <div className="md:col-span-5 text-left">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-display text-3xl font-bold tracking-tighter text-white-custom hover:text-primary transition-colors duration-300 inline-block mb-4"
          >
            <img src={logoImg} alt="KSI Logo" className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </a>
          <p className="font-sans text-xs text-gray-custom max-w-xs leading-relaxed">
            A premium full-stack developer portfolio focused on clean code architecture and advanced creative user experiences.
          </p>
        </div>

        {/* Sitemap Grid columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
          
          {/* Column 1: Navigation */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#home" onClick={handleScrollToTop} className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Socials
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://github.com/sheikiliyas04" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sheik-iliyas-k-652a642a3" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:sheikiliyas997@gmail.com" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+916384807237" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Information
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-sans text-xs text-gray-custom">
                Location: Coimbatore, India
              </li>
              <li className="font-sans text-xs text-gray-custom">
                Timezone: IST (UTC +5:30)
              </li>
              <li>
                <a href="#" className="font-sans text-xs text-gray-custom hover:text-white-custom transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Center Giant Branding Typography */}
      <div className="w-full select-none text-center overflow-hidden mb-10 pointer-events-none">
        <h2 className="font-display text-[12vw] font-bold leading-none tracking-tighter text-outline opacity-10 uppercase transition-all duration-500 hover:opacity-20">
          Sheik Iliyas K
        </h2>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full max-w-6xl mx-auto z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white-custom/10 text-center sm:text-left">
        <span className="font-sans text-[10px] text-gray-custom uppercase tracking-widest">
          &copy; {currentYear} Sheik Iliyas K. All rights reserved.
        </span>
      </div>

    </footer>
  );
}
