import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
    {
        title: 'Climate Change-Induced Heatwaves and Public Health Policy: Evaluating Response and Resilience for Informal Settlements in Delhi',
        href: 'https://www.researchgate.net/profile/Nidhi-Singh-78/publication/395289435_Climate_Change-Induced_Heatwaves_and_Public_Health_Policy_Evaluating_Response_and_Resilience_for_Informal_Settlements_in_Delhi/links/69170171da4d0c7d15040da6/Climate-Change-Induced-Heatwaves-and-Public-Health-Policy-Evaluating-Response-and-Resilience-for-Informal-Settlements-in-Delhi.pdf',
        journal: 'Disaster Advances',
        year: '2025',
        volume: '18(2)',
        pages: '617–632',
        authors: 'Kumar, D., Singh, N., Srivastava, A.K., & Suhasini',
        type: 'Journal Article',
        description: 'A comprehensive study evaluating the resilience and policy response to heatwaves in Delhi informal settlements.',
    },
];

export default function Publications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="publications"
            className="section bg-[var(--color-bg-card)]"
            ref={ref}
        >
            <div className="w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-2">
                        Research Outcome
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text)]">
                        Publications
                    </h2>
                    <div className="mt-4 w-16 h-[2px] bg-[var(--color-primary)]" />
                </motion.div>

                {/* Publications List */}
                <div className="space-y-5">
                    {publications.map((pub, i) => (
                        <motion.a
                            key={pub.title}
                            href={pub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="flex gap-5 p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/30 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        >
                            {/* Decorative Background Shape */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                            {/* Icon */}
                            <div className="hidden md:flex items-start pt-1">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                    <BookOpen size={24} className="text-[var(--color-primary)]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 relative z-10">
                                <span className="inline-block px-3 py-1 text-[10px] font-bold rounded-full bg-[var(--color-primary)] text-white uppercase tracking-wider mt-1 mb-3">
                                    {pub.type}
                                </span>

                                <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text)] leading-tight mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                    {pub.title}
                                    <ExternalLink
                                        size={18}
                                        className="inline ml-2 opacity-60 group-hover:opacity-100 transition"
                                    />
                                </h3>

                                <p className="text-sm font-medium text-[var(--color-text-muted)] mb-4 italic">
                                    {pub.authors}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-primary)] font-semibold border-t border-[var(--color-border)] pt-4 mt-4">
                                    <span>{pub.journal}</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                                    <span>Vol. {pub.volume}</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                                    <span>pp. {pub.pages}</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                                    <span>{pub.year}</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
} 