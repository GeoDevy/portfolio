import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Riverathon 1.0 — Indian Riverbank Change Detection',
        description: 'A GIS hackathon project featuring multi-temporal LULC analysis, HEC-RAS flood simulation, RUSLE erosion modeling, and climate-driven risk forecasting (SSP scenarios) for Indian riverbanks spanning 1995–2050.',
        image: '/images/riverathon-dashboard.png',
        fit: 'contain',
        tags: ['GIS', 'Hackathon', 'HEC-RAS', 'RUSLE', 'LULC', 'Climate Risk'],
        link: 'https://testantiver.vercel.app/',
    },
    {
        title: 'Land Surface Temperature — Delhi NCR',
        description: 'Thermal analysis of Delhi NCR using satellite remote sensing to study urban heat island effects and temperature distribution patterns.',
        image: '/images/lst-delhi.png',
        fit: 'contain',
        tags: ['Remote Sensing', 'LST', 'Urban Studies'],
    },
    {
        title: 'Land Surface Temperature — Gurugram',
        description: 'Land Surface Temperature of Gurugram to study the thermal comfort in the region.',
        image: '/images/gurugram-lulc.jpg',
        fit: 'contain',
        tags: ['LST', 'ArcGIS Pro', 'Remote Sensing'],
    },
    {
        title: 'NDVI Vegetation Analysis',
        description: 'Normalized Difference Vegetation Index mapping to assess vegetation health and density patterns across study areas.',
        image: '/images/gurugram-ndvi.jpg',
        fit: 'contain',
        tags: ['NDVI', 'Vegetation', 'ArcGIS Pro'],
    },
    {
        title: 'Contour Visualization — Mountainous Terrain',
        description: 'High-resolution contour mapping of mountainous terrain using DEM data to visualize elevation and topographic features.',
        image: '/images/contour-mountains.png',
        fit: 'cover',
        tags: ['Cartography', 'DEM', 'Topography', 'Visualization'],
    },
    {
        title: 'Ocean Bathymetric Contours',
        description: 'Bathymetric contour mapping of oceanic regions for depth visualization and marine geospatial analysis.',
        image: '/images/ocean-contours.jpg',
        fit: 'cover',
        tags: ['Bathymetry', 'Oceanography', 'Contours'],
    },
    {
        title: 'Study Area Mapping',
        description: 'Precise delineation and cartographic representation of study areas for geographic research projects.',
        image: '/images/study-area-1.png',
        fit: 'contain',
        tags: ['Cartography', 'QGIS', 'Map Design'],
    },
    {
        title: 'Cumulative Rainfall Map',
        description: 'Spatial distribution of cumulative rainfall across Patna district in Bihar, mapped using interpolation techniques.',
        image: '/images/rcp.png',
        fit: 'contain',
        tags: ['Rainfall', 'CHIRPS', 'GIS', 'GEE', 'Visualization'],
    },
    {
        title: 'Sentinel-1 SAR Flood Comparison',
        description: 'Pre- and post-flood SAR imagery comparison using Sentinel-1 VV polarization to detect inundation extent and riverbank changes (May–Sep 2024).',
        image: '/images/sar-flood-comparison.png',
        fit: 'contain',
        tags: ['SAR', 'Sentinel-1', 'Flood Mapping', 'GEE', 'Remote Sensing'],
    },
];

function LightboxModal({ project, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                <p className="mt-3 text-center text-white/80 text-sm font-medium">{project.title}</p>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="section bg-[var(--color-bg)]" ref={ref}>
            <div className="w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-2">
                        Portfolio
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text)]">
                        Research & Map Projects
                    </h2>
                    <div className="mt-4 w-16 h-[2px] bg-[var(--color-primary)]" />
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                            className="group flex flex-col h-full rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/30 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className={`relative overflow-hidden aspect-[4/3] cursor-pointer ${project.fit === 'cover' ? 'bg-black/5 p-4' : 'bg-white'}`} onClick={() => setSelected(project)}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-${project.fit} ${project.fit === 'cover' ? 'mix-blend-multiply' : ''} group-hover:scale-105 transition-transform duration-700`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn size={28} className="text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="font-semibold text-[var(--color-text)] mb-3 text-base">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                                    >
                                        View Live Dashboard <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selected && <LightboxModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
