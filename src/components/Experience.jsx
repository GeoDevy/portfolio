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
        role: 'Intern – ICT Development in Social Sciences',
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
        topic: 'International Seminar "Envisaging Bharat as Voice of Global South: Revisiting COP28"',
        details: 'Presented a Paper.',
    },
    {
        title: 'Harnessing The Power and Potential of Technology in Flood Risk Assessment: A Case Study of Ladakh Floods',
        location: 'University of Ladakh',
        year: 'Sep 2024',
        topic: 'National Conference "Ladakh Climate Change Scenario & Environmental Sustainability LCCES - 2024"',
        details: 'Presented a Paper.',
    },
    {
        title: 'Evaluating the Role of Urban Wetlands in Thermal Comfort Enhancement and Climate Adaptation: A Study of Gurugram',
        location: 'Department of Geography, Banaras Hindu University, Uttar Pradesh',
        year: 'Oct 2025',
        topic: 'International Conference "Integrating Urban, Rural and Tribal Development for Achieving Sustainable Development Goals: Vision for Viksit Bharat@2047"',
        details: 'Presented a Paper.',
    },
    {
        title: 'Utilizing GIS for Disaster Risk Analysis: Enhancing Preparedness and Resilience',
        location: 'Department of Anthropology, Amity Institute of Social Sciences, Amity University, Uttar Pradesh',
        year: 'Mar 2024',
        topic: 'National Seminar "Leveraging Emerging Technologies In Anthropogenic Research: Unleashing The Potential of GIS and AI Technologies"',
        details: 'Presented a Poster.',
    },
    {
        title: 'Bifurcating Pathways and the National Trilemma: Balancing Technological Growth, Social Cohesion and Poverty',
        location: 'Department of Geography, Banaras Hindu University, Uttar Pradesh',
        year: 'Oct 2025',
        topic: 'International Conference "Integrating Urban, Rural and Tribal Development for Achieving Sustainable Development Goals: Vision for Viksit Bharat@2047"',
        details: 'Presented a Paper.',
    },
];

const TimelineItem = ({ item, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="card-hover p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/25 group"
    >
        <div className="flex items-center gap-2 mb-3">
            <Calendar size={13} className="text-[var(--color-accent)]" />
            <span className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                {item.period}
            </span>
        </div>

        <h4 className="text-lg font-bold text-[var(--color-text)] leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {item.degree || item.role}
        </h4>

        <span className="block text-sm font-semibold text-[var(--color-text-muted)] mt-1">
            {item.institution || item.company}
        </span>

        <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
            {item.description}
        </p>
    </motion.div>
);

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="section bg-[var(--color-bg-card)]" ref={ref}>
            <div className="section-container">
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
                    <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                </motion.div>

                {/* Column Headers */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-[var(--color-border)]">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                            <GraduationCap size={20} />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-[var(--color-text)]">Education</h3>
                    </div>
                    <div className="flex items-center gap-3 pb-4 border-b border-[var(--color-border)]">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-[var(--color-text)]">Experience</h3>
                    </div>
                </div>

                {/* Paired Rows — each row has equal-height cards */}
                {Array.from({ length: Math.max(education.length, experience.length) }).map((_, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-8 md:gap-10 mb-4 last:mb-0 items-stretch">
                        {education[i] ? (
                            <TimelineItem item={education[i]} delay={0.2 + i * 0.1} />
                        ) : <div />}
                        {experience[i] ? (
                            <TimelineItem item={experience[i]} delay={0.3 + i * 0.1} />
                        ) : <div />}
                    </div>
                ))}

                {/* Global Conferences Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-24 pt-16 border-t border-[var(--color-border)]"
                >
                    <div className="mb-10">
                        <h3 className="text-2xl font-serif font-bold text-[var(--color-text)]">Conference Presentations</h3>
                        <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {conferences.map((conf, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="card-hover group relative overflow-hidden p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/25"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[var(--color-primary)]/5 to-transparent rounded-bl-full -mr-14 -mt-14 transition-transform group-hover:scale-125" />

                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full mb-4">
                                        {conf.year}
                                    </span>

                                    <h4 className="text-base font-bold text-[var(--color-text)] mb-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                        {conf.title}
                                    </h4>

                                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-4">
                                        <MapPin size={13} />
                                        <span className="text-xs">{conf.location}</span>
                                    </div>

                                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]/50 pt-3 mt-3">
                                        <strong className="text-[var(--color-text)] block mb-1 text-sm">{conf.topic}</strong>
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
