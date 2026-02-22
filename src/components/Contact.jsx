import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Globe, MapPin, Send } from 'lucide-react';

const socialLinks = [
    {
        icon: Mail,
        label: 'Email',
        href: 'mailto:geographicdevy@gmail.com',
        display: 'geographicdevy@gmail.com',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/geographicdev',
        display: 'LinkedIn Profile',
    },
    {
        icon: Globe,
        label: 'ResearchGate',
        href: 'https://www.researchgate.net/profile/Dev-Kumar-37',
        display: 'ResearchGate Profile',
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="relative py-24 bg-[var(--color-bg-dark)] text-[var(--color-text-light)] overflow-hidden" ref={ref}>
            <div className="relative z-10 w-full px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
                            Get in Touch
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Let's Collaborate on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent-light)]">Geospatial Innovation</span>
                        </h2>
                        <p className="text-[var(--color-text-light)]/70 text-lg mb-8 leading-relaxed">
                            I'm always open to discussing research collaborations, GIS projects,
                            or opportunities to apply spatial analysis to real-world challenges.
                        </p>

                        <div className="flex items-center gap-3 text-[var(--color-text-light)]/60 mb-8">
                            <MapPin size={18} />
                            <span>New Delhi, India</span>
                        </div>

                        <a
                            href="mailto:geographicdevy@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[var(--color-primary-light)] hover:scale-105 transition-all duration-300"
                        >
                            <Send size={18} />
                            Say Hello
                        </a>
                    </motion.div>

                    {/* Social Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid gap-4"
                    >
                        {socialLinks.map((link, i) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--color-accent)]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-dark)] transition-colors duration-300">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-semibold text-[var(--color-text-light)]/40 uppercase tracking-wider mb-0.5">
                                            {link.label}
                                        </span>
                                        <span className="text-base font-medium text-[var(--color-text-light)] group-hover:text-[var(--color-accent-light)] transition-colors">
                                            {link.display}
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
