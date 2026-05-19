import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-8 px-6 bg-[var(--color-bg-dark)] border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

            <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[var(--color-text-light)]/35 font-medium">
                    &copy; {year} Dev Kumar. All rights reserved.
                </p>

                <button
                    onClick={scrollToTop}
                    className="scroll-to-top group flex items-center gap-2 text-xs text-[var(--color-text-light)]/25 hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                    <span className="uppercase tracking-widest">Back to top</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)]/10">
                        <ArrowUp size={14} className="scroll-icon" />
                    </div>
                </button>

                <p className="text-xs text-[var(--color-text-light)]/25">
                    Geography Researcher & GIS Specialist
                </p>
            </div>
        </footer>
    );
}
