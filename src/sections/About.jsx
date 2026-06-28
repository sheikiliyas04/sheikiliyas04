import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiMysql, SiJavascript, SiNodedotjs } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';

const techLogos = [
  { icon: <FaJava className="text-4xl text-white-custom" />, label: 'Java', delay: 0 },
  { icon: <SiMysql className="text-4xl text-white-custom" />, label: 'MySQL', delay: 0.1 },
  { icon: <FaHtml5 className="text-4xl text-white-custom" />, label: 'HTML', delay: 0.2 },
  { icon: <FaCss3Alt className="text-4xl text-white-custom" />, label: 'CSS', delay: 0.3 },
  { icon: <FaReact className="text-4xl text-white-custom" />, label: 'React', delay: 0.4 },
  { icon: <SiJavascript className="text-4xl text-white-custom" />, label: 'JavaScript', delay: 0.5 },
  { icon: <SiNodedotjs className="text-4xl text-white-custom" />, label: 'Node.js', delay: 0.6 },
];

export default function About() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleMouseMove = (e) => {
    if (!badgeRef.current) return;
    const el = badgeRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = -(y - yc) / 8; // Max 10 deg rotation
    const rotateY = (x - xc) / 8;
    
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!badgeRef.current) return;
    const el = badgeRef.current;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen bg-primary flex items-center justify-center pt-28 pb-40 px-6 overflow-hidden"
    >
      {/* Editorial Watermark background */}
      <div className="absolute top-[10%] right-[-5%] text-[15vw] font-display font-bold text-white-custom/[0.03] select-none uppercase tracking-tighter leading-none pointer-events-none">
        Full Stack | Cloud & DevOps
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 relative">
        
        {/* Left Side: Suspended 3D Lanyard ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center relative pt-16">
          {/* Lanyard Suspended Wire */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-16 bg-[#111111] rounded-b-md shadow-md z-10 flex items-center justify-center">
            {/* Lanyard clip details */}
            <div className="w-4 h-4 rounded-full border-2 border-[#333333] bg-[#222222] absolute -bottom-2" />
          </div>

          {/* Interactive ID Badge Card */}
          <motion.div
            ref={badgeRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-72 sm:w-80 rounded-2xl bg-white text-bg-dark flex flex-col p-6 shadow-2xl transition-transform duration-200 ease-out cursor-grab border border-white-custom/10 relative mt-4 select-none"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Holographic metallic badge strip */}
            <div className="w-full h-8 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 flex items-center justify-between px-3 mb-6 relative overflow-hidden border border-gray-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
              <span className="font-display text-[9px] font-bold tracking-widest text-[#777]">
                CORE DEVELOPER
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/40" />
            </div>

            {/* Badge Content */}
            <div className="flex flex-col items-center">
              {/* Photo placeholder with frame */}
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-300 p-1 bg-white shadow-inner mb-4">
                <img 
                  src={profileImg} 
                  alt="Developer ID Portrait" 
                  className="w-full h-full object-cover rounded grayscale"
                  loading="lazy"
                />
              </div>

              {/* Profile Details */}
              <h3 className="font-display text-xl font-bold tracking-tight text-bg-dark">
                SHEIK ILIYAS K
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-primary font-semibold mt-1">
                Full Stack | Cloud and DevOps
              </p>

              {/* Grid Divider */}
              <div className="w-full border-t border-dashed border-gray-300 my-4" />

              {/* Barcode & Extra Data */}
              <div className="w-full flex items-center justify-between text-left">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] text-gray-400 uppercase tracking-wider font-semibold">
                    BATCH
                  </span>
                  <span className="font-display text-[9px] font-bold text-bg-dark">
                    2023-27
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[7px] text-gray-400 uppercase tracking-wider font-semibold">
                   
                  </span>
                  <span className="font-display text-[9px] font-bold text-primary">
                    
                  </span>
                </div>
              </div>

              {/* SVG barcode */}
              <div className="mt-6 flex flex-col items-center w-full">
                <svg className="w-full h-10 text-bg-dark" fill="currentColor">
                  {/* barcode bars */}
                  <g>
                    <rect x="5%" width="2%" height="100%"/>
                    <rect x="8%" width="1%" height="100%"/>
                    <rect x="11%" width="3%" height="100%"/>
                    <rect x="16%" width="1%" height="100%"/>
                    <rect x="19%" width="2%" height="100%"/>
                    <rect x="23%" width="4%" height="100%"/>
                    <rect x="29%" width="1%" height="100%"/>
                    <rect x="32%" width="2%" height="100%"/>
                    <rect x="36%" width="3%" height="100%"/>
                    <rect x="41%" width="1%" height="100%"/>
                    <rect x="44%" width="2%" height="100%"/>
                    <rect x="48%" width="4%" height="100%"/>
                    <rect x="54%" width="1%" height="100%"/>
                    <rect x="57%" width="3%" height="100%"/>
                    <rect x="62%" width="1%" height="100%"/>
                    <rect x="65%" width="2%" height="100%"/>
                    <rect x="69%" width="4%" height="100%"/>
                    <rect x="75%" width="1%" height="100%"/>
                    <rect x="78%" width="2%" height="100%"/>
                    <rect x="82%" width="3%" height="100%"/>
                    <rect x="87%" width="1%" height="100%"/>
                    <rect x="90%" width="3%" height="100%"/>
                  </g>
                </svg>
                <span className="font-mono text-[7px] text-gray-400 mt-1 tracking-[0.25em]">
                  *46820062026*
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Context & Floating Techs */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="font-display text-5xl sm:text-7xl font-bold leading-none tracking-tight text-white-custom mb-6 uppercase">
              Hello!
            </h2>
            <p className="font-sans text-lg sm:text-xl text-white-custom font-semibold leading-relaxed mb-6">
              I'm <span className="no-underline">Sheik Iliyas K</span>, a Final-Year B.Tech Information Technology student at Hindusthan Institute of Technology, Coimbatore.
            </p>
            <p className="font-sans text-sm sm:text-base text-white-custom/80 leading-relaxed mb-8 max-w-xl">
              I am passionate about building modern web applications and cloud-native solutions. My interests lie in Full Stack Development, Cloud Computing, and DevOps practices that help create scalable and reliable systems.
            </p>
          </motion.div>

          {/* Tech stack floating list */}
          <div className="flex flex-wrap gap-6 items-center">
            {techLogos.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  opacity: { delay: 0.4 + idx * 0.1, duration: 0.5 },
                  y: { delay: 0.4 + idx * 0.1, duration: 0.5 },
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-white-custom/10 border border-white-custom/15 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white-custom/20 hover:scale-110 transition-all duration-300"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + idx * 0.4,
                    ease: 'easeInOut',
                    delay: item.delay
                  }}
                >
                  {item.icon}
                </motion.div>
                <span className="font-sans text-[10px] font-semibold text-white-custom/60 uppercase tracking-widest">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Organic Torn Paper SVG Divider at bottom */}
      <svg 
        viewBox="0 0 1440 100" 
        fill="none" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 w-full h-[60px] text-white-custom fill-current z-10 pointer-events-none"
      >
        <path d="M0,40 L30,45 L60,40 L90,43 L120,38 L150,42 L180,39 L210,41 L240,38 L270,43 L300,40 L330,37 L360,42 L390,39 L420,41 L450,38 L480,44 L510,40 L540,39 L570,42 L600,38 L630,40 L660,43 L690,39 L720,41 L750,38 L780,43 L810,40 L840,38 L870,42 L900,39 L930,41 L960,38 L990,44 L1020,40 L1050,38 L1080,41 L1110,39 L1140,43 L1170,38 L1200,42 L1230,40 L1260,38 L1290,41 L1320,39 L1350,42 L1380,38 L1410,40 L1440,38 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
