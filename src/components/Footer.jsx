export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative py-8 px-6 bg-[var(--color-bg-dark)] border-t border-white/5">
            {/* Gradient line accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
            <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[var(--color-text-light)]/35 font-medium">
                    © {year} Dev Kumar. All rights reserved.
                </p>
                <p className="text-xs text-[var(--color-text-light)]/25">
                    Geography Researcher & GIS Specialist
                </p>
            </div>
        </footer>
    );
}
