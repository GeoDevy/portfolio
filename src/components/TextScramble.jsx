import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export default function TextScramble({
    text,
    className = '',
    delay = 0,
    speed = 30,
    as: Tag = 'span',
    ...props
}) {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let iteration = 0;
        const finalText = text;
        const totalIterations = finalText.length;

        intervalRef.current = setInterval(() => {
            setDisplayText(
                finalText
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' ';
                        if (i < iteration) return finalText[i];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            iteration += 1 / 2;

            if (iteration >= totalIterations + 1) {
                setDisplayText(finalText);
                clearInterval(intervalRef.current);
            }
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [started, text, speed]);

    return (
        <Tag className={className} {...props}>
            {started ? displayText || '\u00A0' : '\u00A0'}
        </Tag>
    );
}
