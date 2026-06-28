import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Define',
    description: 'Deconstructing constraints, gathering system requirements, mapping database schemas, and charting out the product roadmap.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Architecting design tokens, wireframing workflows, planning high-fidelity editorial layouts, and crafting micro-animations.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Writing robust backend controllers, styling modular frontend views, integrating systems, and conducting unit/integration testing.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Provisioning servers, configuring DNS records, optimizing SEO structures, and validating page performance metrics.',
  },
];

function TimelineCard({ stepData, index }) {
  const cardRef = useRef(null);
  const cardScrollRef = useRef(null);
  // Trigger active state when card is in the center of viewport
  const { scrollYProgress } = useScroll({
    target: cardScrollRef,
    offset: ["start center", "end center"]
  });

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardScrollRef}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-28 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer to push card to side */}
      <div className="hidden md:block w-[45%]" />

      {/* Target Dot on timeline line */}
      <motion.div 
        style={{ scale: scrollYProgress }}
        className="absolute left-6 md:left-1/2 -translate-x-[7px] md:-translate-x-1.5 w-3 h-3 rounded-full bg-primary border-4 border-white-custom z-20"
      />

      {/* Actual Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[85%] ml-12 md:ml-0 md:w-[45%] p-8 rounded-2xl border transition-all duration-500 text-left cursor-default shadow-md"
        // Style changes based on scroll status (active state)
        style={{
          backgroundColor: '#ffffff',
          borderColor: 'rgba(0,0,0,0.06)',
        }}
        whileHover={{ y: -4, boxShadow: '0 12px 30px -10px rgba(0,0,0,0.08)' }}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="font-display text-4xl font-bold text-primary/10 group-hover:text-primary/20">
            {stepData.step}
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/5 text-primary font-sans text-[9px] font-bold uppercase tracking-widest">
            Step {stepData.step}
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-bg-dark mb-3 uppercase">
          {stepData.title}
        </h3>
        <p className="font-sans text-xs text-gray-500 leading-relaxed">
          {stepData.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef(null);

  // Scroll tracking for drawing the line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="relative min-h-screen bg-white-custom text-bg-dark py-32 px-6 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-left mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
            HOW I WORK
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-none tracking-tight uppercase">
            Work Process
          </h2>
          <div className="w-20 h-1 bg-primary mt-6" />
        </div>

        {/* Timeline container */}
        <div className="relative w-full mt-12">
          
          {/* Curved SVG line for Desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-24 h-full pointer-events-none hidden md:block z-10">
            <svg 
              viewBox="0 0 100 1000" 
              fill="none" 
              preserveAspectRatio="none" 
              className="w-full h-full"
            >
              {/* Background Path (gray) */}
              <path 
                d="M50,0 C10,125 90,125 50,250 C10,375 90,375 50,500 C10,625 90,625 50,750 C10,875 90,875 50,1000" 
                stroke="#E5E7EB" 
                strokeWidth="2" 
              />
              {/* Foreground animated path (red) */}
              <motion.path 
                d="M50,0 C10,125 90,125 50,250 C10,375 90,375 50,500 C10,625 90,625 50,750 C10,875 90,875 50,1000" 
                stroke="#FF2A2A" 
                strokeWidth="3" 
                strokeLinecap="round"
                style={{ pathLength: scaleY }}
              />
            </svg>
          </div>

          {/* Straight line for Mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200 md:hidden z-10">
            <motion.div 
              style={{ scaleY }}
              className="w-full h-full bg-primary origin-top"
            />
          </div>

          {/* Step Cards */}
          <div className="relative z-10">
            {steps.map((step, idx) => (
              <TimelineCard key={step.step} stepData={step} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
