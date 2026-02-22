import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const links = [
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
        display: 'linkedin.com/in/geographicdev',
    },
    {
        icon: Globe,
        label: 'ResearchGate',
        href: 'https://www.researchgate.net/profile/Dev-Kumar-37',
        display: 'researchgate.net/Dev-Kumar-37',
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="contact"
            className="relative py-28 bg-[var(--color-bg-dark)] overflow-hidden"
            ref={ref}
        >
            {/* Subtle decorative element */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

            <div className="relative z-10 w-full px-6">
                {/* Minimal header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)]/70 mb-3">
                        Contact
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-light)] leading-snug">
                        Let's work together.
                    </h2>
                </motion.div>

                {/* Links as clean rows */}
                <div className="space-y-0 border-t border-white/8">
                    {links.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                                className="flex items-center justify-between py-6 border-b border-white/8 group cursor-pointer hover:pl-2 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <Icon size={18} className="text-[var(--color-text-light)]/40 group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                                    <div>
                                        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-light)]/30 mb-1">
                                            {link.label}
                                        </span>
                                        <span className="text-base text-[var(--color-text-light)]/80 group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                                            {link.display}
                                        </span>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-[var(--color-text-light)]/20 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Subtle location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-xs tracking-widest uppercase text-[var(--color-text-light)]/25"
                >
                    Based in New Delhi, India
                </motion.p>
            </div>
        </section>
    );
}
