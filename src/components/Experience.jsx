import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const education = [
    {
        degree: 'B.A. Geography (Honours / Research)',
        institution: 'Amity University, Noida',
        period: '2023 – 2027',
        description: 'Specializing in spatial analysis, remote sensing, and environmental geography with a focus on geospatial research.',
    },
    {
        degree: 'Secondary & Senior Secondary',
        institution: 'Kendriya Vidyalaya, Masjid Moth',
        period: 'Completed 2023',
        description: 'Built foundational knowledge in geography and environmental sciences.',
    },
];

const experience = [
    {
        role: 'Intern – Geography Content Development',
        company: 'Central Institute of Educational Technology',
        period: 'July 2024 – Oct 2024',
        description: 'Contributed to the development of geography educational materials and curriculum resources for national-level textbooks.',
    },
    {
        role: 'Social Welfare Volunteer',
        company: 'Uttejana Foundation',
        period: '2024 – 2025',
        description: 'Engaged in community welfare initiatives, including social outreach and environmental awareness campaigns.',
    },
];

const conferences = [
    {
        title: 'Disaster Risk Reduction and Management: A Technological Approach',
        location: 'Department of Geography, Indraprastha College for Women',
        year: 'Aug 2024',
        topic: 'International Seminar “Envisaging Bharat as Voice of Global South: Revisiting COP28”',
        details: 'Presented a Paper.',
    },
    {
        title: 'Harnessing The Power and Potential of Technology in Flood Risk Assessment: A Case Study of Ladakh Floods',
        location: 'University of Ladakh',
        year: 'Sep 2024',
        topic: 'National Conference “Ladakh Climate Change Scenario & Environmental Sustainability LCCES - 2024”',
        details: 'Presented a Paper.',
    },
    {
        title: 'Evaluating the Role of Urban Wetlands in Thermal Comfort Enhancement and Climate Adaptation: A Study of Gurugram',
        location: 'Department of Geography, Banaras Hindu University, Uttar Pradesh',
        year: 'Oct 2025',
        topic: 'International Conference “Integrating Urban, Rural and Tribal Development for Achieving Sustainable Development Goals: Vision for Viksit Bharat@2047”',
        details: 'Presented a Paper.',
    },
    {
        title: 'Utilizing GIS for Disaster Risk Analysis: Enhancing Preparedness and Resilience',
        location: 'Department of Anthropology, Amity Institute of Social Sciences, Amity University, Uttar Pradesh',
        year: 'Mar 2024',
        topic: 'National Seminar “Leveraging Emerging Technologies In Anthropogenic Research: Unleashing The Potential of GIS and AI Technologies”',
        details: 'Presented a Poster.',
    },
    {
        title: 'Bifurcating Pathways and the National Trilemma: Balancing Technological Growth, Social Cohesion and Poverty',
        location: 'Department of Geography, Banaras Hindu University, Uttar Pradesh',
        year: 'Oct 2025',
        topic: 'International Conference “Integrating Urban, Rural and Tribal Development for Achieving Sustainable Development Goals: Vision for Viksit Bharat@2047”',
        details: 'Presented a Paper.',
    },
];

const TimelineItem = ({ item, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="pb-10 last:pb-0 group"
    >
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 mb-1">
                <Calendar size={14} className="text-[var(--color-accent)]" />
                <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
                    {item.period}
                </span>
            </div>

            <h4 className="text-xl font-bold text-[var(--color-text)] leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {item.degree || item.role}
            </h4>

            <span className="text-sm font-semibold text-[var(--color-text-muted)]">
                {item.institution || item.company}
            </span>

            <p className="mt-2 text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed border-l-2 border-[var(--color-border)] pl-4 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                {item.description}
            </p>
        </div>
    </motion.div>
);

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="section bg-[var(--color-bg-card)]" ref={ref}>
            <div className="w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-2">
                        Professional Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text)]">
                        Experience & Education
                    </h2>
                    <div className="mt-4 w-16 h-[2px] bg-[var(--color-primary)]" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[var(--color-border)]">
                            <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-[var(--color-text)]">Education</h3>
                        </div>
                        <div className="mt-2">
                            {education.map((item, i) => (
                                <TimelineItem key={i} item={item} icon={GraduationCap} delay={0.2 + i * 0.1} />
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[var(--color-border)]">
                            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-[var(--color-text)]">Experience</h3>
                        </div>
                        <div className="mt-2">
                            {experience.map((item, i) => (
                                <TimelineItem key={i} item={item} icon={Briefcase} delay={0.4 + i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Global Conferences Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-24 pt-16 border-t border-[var(--color-border)]"
                >
                    <div className="mb-10">
                        <h3 className="text-2xl font-serif font-bold text-[var(--color-text)]">Conference Presentations</h3>
                        <div className="mt-4 w-16 h-[2px] bg-[var(--color-primary)]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {conferences.map((conf, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-primary)]/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />

                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full mb-4">
                                        {conf.year}
                                    </span>

                                    <h4 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {conf.title}
                                    </h4>

                                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-4">
                                        <MapPin size={14} />
                                        <span>{conf.location}</span>
                                    </div>

                                    <p className="text-sm text-[var(--color-text-muted)]/90 leading-relaxed border-t border-[var(--color-border)]/50 pt-4">
                                        <strong className="text-[var(--color-text)] block mb-1">{conf.topic}</strong>
                                        {conf.details}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
