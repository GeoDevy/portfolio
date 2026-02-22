export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 bg-[var(--color-bg-dark)] border-t border-white/5">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[var(--color-text-light)]/40">
                    © {year} Dev Kumar. All rights reserved.
                </p>
                <p className="text-xs text-[var(--color-text-light)]/30">
                    Geography Researcher & GIS Specialist
                </p>
            </div>
        </footer>
    );
}
