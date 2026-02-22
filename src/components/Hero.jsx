import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]">
            {/* Subtle map-like pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Profile image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-10 flex justify-center"
                >
                    <div className="rounded-full p-[3px] shadow-2xl shadow-[var(--color-primary)]/10 ring-1 ring-[var(--color-border)]/20">
                        <img
                            src="/images/profile.jpg"
                            alt="Dev Kumar"
                            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[var(--color-bg-dark)]"
                        />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[var(--color-text-light)] leading-tight tracking-tight">
                        Dev <span className="text-[var(--color-accent)]">Kumar</span>
                    </h1>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 flex flex-col items-center gap-3"
                >
                    <p className="text-xl md:text-2xl text-[var(--color-accent-light)] font-light tracking-wide">
                        Geography Researcher & GIS Specialist
                    </p>

                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)]/50 uppercase tracking-widest">
                        <MapPin size={14} />
                        <span>New Delhi, India</span>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 max-w-2xl mx-auto text-[var(--color-text-light)]/70 text-lg leading-relaxed font-light"
                >
                    Exploring the intersection of <span className="text-[var(--color-text-light)] font-medium">spatial science</span>,
                    <span className="text-[var(--color-text-light)] font-medium"> remote sensing</span>, and
                    <span className="text-[var(--color-text-light)] font-medium"> environmental research</span>{' '}
                    to address real-world challenges through geospatial technologies.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-20"
                >
                    <a href="#about" className="inline-flex flex-col items-center gap-3 text-[var(--color-text-light)]/30 hover:text-[var(--color-accent)] transition-colors duration-300">
                        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <ArrowDown size={20} />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
