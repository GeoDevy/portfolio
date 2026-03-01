import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Scroll-spy: track which section is active
    useEffect(() => {
        const ids = navLinks.map(l => l.href.replace('#', ''));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -60% 0px' }
        );
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/70 backdrop-blur-2xl shadow-sm border-b border-[var(--color-border)]/60'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-[1300px] mx-auto w-full px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-serif font-semibold tracking-tight text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                    DK<span className="text-[var(--color-accent)]">.</span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 relative group
                                        ${isActive
                                            ? 'text-[var(--color-primary)]'
                                            : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 rounded-full
                                        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-[var(--color-text)] p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white/90 backdrop-blur-2xl border-b border-[var(--color-border)]"
                    >
                        <ul className="flex flex-col items-center py-6 gap-5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors
                                            ${activeSection === link.href.replace('#', '')
                                                ? 'text-[var(--color-primary)]'
                                                : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
