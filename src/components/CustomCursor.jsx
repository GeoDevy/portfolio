import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const dotRef = useRef({ x: 0, y: 0 });
    const ringRef = useRef({ x: 0, y: 0 });
    const dotElRef = useRef(null);
    const ringElRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        // Detect touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            setIsTouch(true);
            return;
        }

        const onMouseMove = (e) => {
            dotRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        // Track hover on interactive elements
        const addHoverListeners = () => {
            const interactives = document.querySelectorAll('a, button, [data-cursor-hover], .card-hover, .tilt-card');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        // Observe DOM changes for dynamic elements
        addHoverListeners();
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        // Smooth ring follow
        const animate = () => {
            ringRef.current.x += (dotRef.current.x - ringRef.current.x) * 0.15;
            ringRef.current.y += (dotRef.current.y - ringRef.current.y) * 0.15;

            if (dotElRef.current) {
                dotElRef.current.style.transform = `translate(${dotRef.current.x}px, ${dotRef.current.y}px) translate(-50%, -50%)`;
            }
            if (ringElRef.current) {
                ringElRef.current.style.transform = `translate(${ringRef.current.x}px, ${ringRef.current.y}px) translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(rafRef.current);
            observer.disconnect();
        };
    }, [isVisible, isHovering]);

    if (isTouch) return null;

    return (
        <>
            <div
                ref={dotElRef}
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    mixBlendMode: 'difference',
                }}
            />
            <div
                ref={ringElRef}
                className="cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `1.5px solid ${isHovering ? 'var(--color-accent)' : 'rgba(200,169,110,0.4)'}`,
                    pointerEvents: 'none',
                    zIndex: 9998,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s, border-color 0.3s, width 0.3s, height 0.3s',
                }}
            />
        </>
    );
}
