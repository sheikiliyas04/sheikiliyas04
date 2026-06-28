import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaJava, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMysql, SiFirebase, SiPostgresql, SiMongodb, SiJavascript, SiFigma } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML & CSS', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-bg-dark" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-bg-dark" /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#ED8B00]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen bg-white-custom text-bg-dark py-32 px-6 overflow-hidden"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full max-w-6xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
              EXPERTISE & CAPABILITIES
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="font-display text-4xl sm:text-6xl font-bold leading-none tracking-tight uppercase">
              Technical Arsenal
            </h2>
          </motion.div>
          <div className="w-20 h-1 bg-primary mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: catIdx * 0.1 }}
            >
              {/* Category Label */}
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gray-500 border-b border-gray-200 pb-3">
                {category.title}
              </h3>

              {/* Skill Cards */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: catIdx * 0.1 + skillIdx * 0.05,
                    }}
                  >
                    {/* Icon + Name Row */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="font-sans text-xs font-semibold text-bg-dark leading-tight">
                        {skill.name}
                      </span>
                    </div>


                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
