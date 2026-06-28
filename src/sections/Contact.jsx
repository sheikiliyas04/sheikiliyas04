import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const socialLinks = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/sheikiliyas04', label: 'GitHub' },
  { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/sheik-iliyas-k-652a642a3', label: 'LinkedIn' },
  { icon: <FiMail size={20} />, href: 'mailto:sheikiliyas997@gmail.com', label: 'Email' },
  { icon: <FiPhone size={20} />, href: 'tel:+916384807237', label: 'Phone' },
];

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');

    // Strict email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address before sending.');
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sheikiliyas997@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setFormStatus('sent');
        e.target.reset();
      } else {
        // Fallback if formsubmit fails
        setFormStatus('idle');
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus('idle');
      alert("Something went wrong. Please check your connection and try again.");
    }

    setTimeout(() => {
      if (formStatus !== 'idle') {
        setFormStatus('idle');
      }
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative min-h-screen bg-bg-dark text-white-custom py-32 px-6 overflow-hidden flex items-center justify-center"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center h-full lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
                GET IN TOUCH
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h2 className="font-display text-4xl sm:text-6xl font-bold leading-none tracking-tight uppercase mb-6">
                Let's Build <br /> Something <br /> <span className="text-outline">Great</span>.
              </h2>
              <p className="font-sans text-sm text-gray-custom leading-relaxed mb-8 max-w-sm">
                Have an idea, project, or full-time position you'd like to discuss? Drop me a message and let's coordinate a call.
              </p>
            </motion.div>

            {/* Social Grid links */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  className="w-12 h-12 rounded-full border border-white-custom/10 bg-white-custom/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white-custom transition-all duration-300 active:scale-90"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="p-8 sm:p-10 rounded-2xl glass-card border border-white-custom/10 w-full"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Email Subject */}
                <input type="hidden" name="_subject" value="New Submission from Portfolio Form!" />

                {/* Name */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="form-name" className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-custom">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white-custom/5 border border-white-custom/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-sm text-white-custom placeholder-white-custom/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="form-email" className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-custom">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white-custom/5 border border-white-custom/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-sm text-white-custom placeholder-white-custom/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="form-message" className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-custom">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi, I'd like to work together on..."
                    className="w-full bg-white-custom/5 border border-white-custom/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-sm text-white-custom placeholder-white-custom/20 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full py-4 rounded-full bg-white-custom text-bg-dark font-sans text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-white-custom transition-all duration-300 cursor-pointer flex items-center justify-center disabled:opacity-50"
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  )}
                  {formStatus === 'sent' && 'Message Sent!'}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
