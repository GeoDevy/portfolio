import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Map, Satellite, Mountain, Microscope, BarChart3 } from 'lucide-react';

const skills = [
    { icon: Globe, label: 'Spatial Analysis' },
    { icon: Map, label: 'Cartographic Design' },
    { icon: Satellite, label: 'Remote Sensing' },
    { icon: Mountain, label: 'ArcGIS Pro' },
    { icon: Microscope, label: 'QGIS' },
    { icon: BarChart3, label: 'ERDAS Imagine' },
];

const tools = [
    'ArcGIS Pro', 'QGIS', 'ERDAS Imagine', 'Google Earth Engine',
    'ENVI', 'MS Office Suite', 'Canva'
];

const languages = ['English', 'Hindi'];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section bg-[var(--color-bg)]" ref={ref}>
            <div className="w-full">
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
                    <div className="mt-4 w-16 h-[2px] bg-[var(--color-primary)]" />
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
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
                                <span key={lang} className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] mb-6">
                            Core Skills
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-sm transition-all duration-300"
                                    >
                                        <Icon size={18} className="text-[var(--color-primary)]" />
                                        <span className="text-xs font-medium text-[var(--color-text)]">{skill.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Tools */}
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] mt-8 mb-4">
                            Tools & Software
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span key={tool} className="px-4 py-2 text-xs rounded-lg bg-[var(--color-bg-dark)]/5 text-[var(--color-text-muted)] font-medium">
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
