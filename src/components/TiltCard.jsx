import { useRef, useState } from 'react';

export default function TiltCard({
    children,
    className = '',
    tiltMax = 12,
    glare = true,
    scale = 1.02,
    ...props
}) {
    const ref = useRef(null);
    const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: '' });

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -tiltMax;
        const rotateY = ((x - centerX) / centerX) * tiltMax;

        setTransform(
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
        );

        if (glare) {
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;
            setGlareStyle({
                opacity: 0.15,
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4), transparent 60%)`,
            });
        }
    };

    const handleLeave = () => {
        setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
        setGlareStyle({ opacity: 0, background: '' });
    };

    return (
        <div
            ref={ref}
            className={`tilt-card relative ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{
                transform,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
            }}
            {...props}
        >
            {children}
            {glare && (
                <div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none"
                    style={{
                        ...glareStyle,
                        transition: 'opacity 0.3s ease',
                    }}
                />
            )}
        </div>
    );
}
