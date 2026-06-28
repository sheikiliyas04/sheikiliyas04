import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { FaJava, FaHtml5 } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const floatingBadges = [
  { icon: <FaJava className="text-[#ED8B00] text-xl" />, label: 'Java', x: '-2%', y: '12%', delay: 0 },
  { icon: <SiJavascript className="text-[#F7DF1E] text-xl" />, label: 'JavaScript', x: '75%', y: '15%', delay: 0.5 },
  { icon: <FaHtml5 className="text-[#E34F26] text-xl" />, label: 'HTML & CSS', x: '78%', y: '68%', delay: 1 },
  { icon: <SiMysql className="text-[#4479A1] text-xl" />, label: 'MySQL', x: '-5%', y: '72%', delay: 1.5 },
  { icon: <SiReact className="text-[#61DAFB] text-xl" />, label: 'React', x: '35%', y: '-4%', delay: 0.8 },
];

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Editorial Background Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft abstract blurs */}
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/3 blur-[150px]" />
        
        {/* Elegant subtle gridlines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Abstract lines */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-border-custom" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-border-custom" />
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-border-custom" />
        <div className="absolute left-3/4 top-0 w-[1px] h-full bg-border-custom" />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
              Built with Purpose
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          >
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter mb-6 uppercase">
              Hi, I'm <br />
              <span className="text-outline select-none">Sheik Iliyas k</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.0 }}
          >
            <h2 className="font-display text-xl sm:text-2xl text-white-custom font-semibold tracking-wider mb-4">
              Full Stack Developer | Cloud & DevOps
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-custom max-w-lg leading-relaxed mb-8">
              I build modern, scalable, and high-performance web applications while exploring cloud technologies and DevOps practices to deliver reliable digital experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full bg-primary text-white-custom text-xs font-semibold uppercase tracking-widest hover:bg-[#e02020] transition-colors duration-300 shadow-lg shadow-primary/20 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full border border-white-custom/25 text-white-custom text-xs font-semibold uppercase tracking-widest hover:bg-white-custom hover:text-bg-dark transition-all duration-300 active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Layered Glass Cards in Background */}
            <motion.div 
              className="absolute -inset-4 rounded-full border border-white-custom/10 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className="absolute -inset-10 rounded-full border border-white-custom/5 border-dashed pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Back Glass Card */}
            <div className="absolute inset-4 rounded-full bg-primary/5 border border-primary/20 -rotate-6 blur-[2px]" />
            <div className="absolute inset-4 rounded-full bg-white-custom/5 border border-white-custom/10 rotate-6" />

            {/* Organic/Circular Portrait Frame */}
            <motion.div 
              className="absolute inset-0 rounded-full overflow-hidden border border-white-custom/20 bg-bg-dark"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}
            >
              <img 
                src={profileImg} 
                alt="Sheik Iliyas K Portrait" 
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                className="absolute glass-card px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
                style={{ left: badge.x, top: badge.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { delay: 2.0 + idx * 0.1, duration: 0.5 },
                  scale: { delay: 2.0 + idx * 0.1, duration: 0.5 },
                  y: {
                    repeat: Infinity,
                    duration: 3 + idx * 0.5,
                    ease: 'easeInOut',
                    delay: badge.delay,
                  }
                }}
              >
                {badge.icon}
                <span className="font-sans text-[10px] tracking-wider font-semibold text-white-custom uppercase">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        onClick={scrollToProjects}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-custom/60">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border border-white-custom/25 flex justify-center p-1.5">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
