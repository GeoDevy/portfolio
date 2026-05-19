import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Map, Satellite, Mountain, Microscope, BarChart3 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const skills = [
    { icon: Globe, label: 'Spatial Analysis', level: 90 },
    { icon: Map, label: 'Cartographic Design', level: 85 },
    { icon: Satellite, label: 'Remote Sensing', level: 92 },
    { icon: Mountain, label: 'ArcGIS Pro', level: 88 },
    { icon: Microscope, label: 'QGIS', level: 85 },
    { icon: BarChart3, label: 'ERDAS Imagine', level: 78 },
];

const tools = [
    'ArcGIS Pro', 'QGIS', 'ERDAS Imagine', 'Google Earth Engine',
    'ENVI', 'MS Office Suite', 'Canva'
];

const languages = ['English', 'Hindi'];

const stats = [
    { label: 'Conferences', value: 5, suffix: '+' },
    { label: 'Publications', value: 1, suffix: '' },
    { label: 'Projects', value: 10, suffix: '+' },
    { label: 'Tools Mastered', value: 7, suffix: '' },
];

function SkillBar({ skill, isInView, delay }) {
    const Icon = skill.icon;
    return (
        <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)]/10 transition-colors">
                <Icon size={18} className="text-[var(--color-primary)]" />
            </div>
            <span className="text-[13px] font-semibold text-[var(--color-text)] whitespace-nowrap tracking-tight">{skill.label}</span>
        </div>
    );
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section bg-[var(--color-bg)]" ref={ref}>
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-2">
                        About Me
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text)]">
                        Who I Am
                    </h2>
                    <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center hover:border-[var(--color-primary)]/20 transition-colors">
                            <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-1">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:col-span-3 space-y-6 text-[var(--color-text-muted)] text-base leading-loose"
                    >
                        <p>
                            I am a dedicated Geography student pursuing a <strong className="text-[var(--color-text)] font-medium">B.A. Geography (Honours / Research)</strong> at
                            Amity University, Noida (2023–2027). My academic path is driven by a deep curiosity
                            for understanding spatial patterns in the world around us.
                        </p>
                        <p>
                            My work centers on <strong className="text-[var(--color-text)] font-medium">geospatial technologies and remote sensing</strong> —
                            from analyzing urban heat islands and land-use change to studying the ecological
                            impacts of climate change. I have presented my research at international and national
                            conferences, and my work has been published in reputable journals.
                        </p>
                        <p>
                            Beyond academia, I have contributed to curriculum development at <strong className="text-[var(--color-text)] font-medium">NCERT</strong> and
                            volunteered with organizations focused on social welfare.
                        </p>

                        {/* Languages */}
                        <div className="pt-4 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">Languages:</span>
                            {languages.map((lang) => (
                                <span key={lang} className="px-4 py-1.5 text-xs rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-semibold border border-[var(--color-primary)]/15 hover:bg-[var(--color-primary)]/15 transition-all duration-300 cursor-default">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills with animated bars */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="md:col-span-2"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] mb-6">
                            Core Skills
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, i) => (
                                <SkillBar key={skill.label} skill={skill} isInView={isInView} delay={0.4 + i * 0.1} />
                            ))}
                        </div>

                        {/* Tools */}
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] mt-8 mb-4">
                            Tools & Software
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 text-xs rounded-lg bg-[var(--color-bg-dark)]/5 text-[var(--color-text-muted)] font-medium hover:bg-[var(--color-primary)]/8 hover:text-[var(--color-primary)] transition-all duration-300 cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
