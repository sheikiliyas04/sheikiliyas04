import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';

const tagIcons = {
  'React.js': <FaReact className="text-[#61DAFB]" />,
  'HTML5': <FaHtml5 className="text-[#E34F26]" />,
  'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'IndexedDB': <FaDatabase className="text-gray-custom" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
};

const projects = [
  {
    number: '01',
    title: 'HexaAcademy',
    category: 'Gamified Learning Platform',
    description:
      'HexaAcademy is an interactive e-learning platform that makes education engaging through quizzes, challenges, rewards, and progress tracking. It encourages learners to stay motivated while providing a fun and user-friendly learning experience.',
    tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'IndexedDB'],
    liveDemo: 'https://hexa-academy-v1.vercel.app',
    accent: '#FF2A2A',
  },
  {
    number: '02',
    title: 'MediMeet',
    category: 'Patient & Doctor Consulting Platform',
    description:
      'MediMeet is a healthcare platform that connects patients with doctors for virtual consultations, appointment scheduling, and real-time medical guidance through a clean and accessible interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB'],
    liveDemo: null,
    accent: '#FF2A2A',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen bg-bg-dark text-white-custom py-32 px-6 overflow-hidden"
    >
      {/* Editorial watermark */}
      <div className="absolute top-[5%] left-[-2%] text-[12vw] font-display font-bold text-white-custom/[0.02] select-none uppercase tracking-tighter leading-none pointer-events-none">
        Showcase
      </div>

      <div className="w-full max-w-6xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
              MY
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="font-display text-4xl sm:text-6xl font-bold leading-none tracking-tight uppercase">
              Projects
            </h2>
          </motion.div>
          <div className="w-20 h-1 bg-primary mt-6" />
        </div>

        {/* Projects — two large editorial cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl border border-white-custom/10 bg-white-custom/[0.03] hover:bg-white-custom/[0.06] hover:border-primary/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              whileHover={{ y: -4 }}
            >
              {/* Top accent bar */}
              <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />

              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: Number + Meta */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Large project number */}
                  <span className="font-display text-[5rem] sm:text-[7rem] font-bold leading-none tracking-tighter text-outline-red opacity-20 select-none">
                    {project.number}
                  </span>

                  {/* Category badge */}
                  <div>
                    <span className="inline-block px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-sans text-[10px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons — only show Live Demo if link exists */}
                  {project.liveDemo && (
                    <div className="flex items-center gap-4 mt-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="flex items-center gap-2 font-sans text-[10px] uppercase font-bold tracking-widest text-primary hover:text-white-custom transition-colors duration-300"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={13} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right: Title + Description + Tags */}
                <div className="lg:col-span-8 flex flex-col justify-center gap-6">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white-custom group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-custom leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech Tags with icons */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white-custom/5 border border-white-custom/10 hover:border-primary/30 transition-colors duration-300 font-sans text-[10px] font-semibold text-gray-custom uppercase tracking-wider"
                      >
                        {tagIcons[tag] && (
                          <span className="text-sm">{tagIcons[tag]}</span>
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
