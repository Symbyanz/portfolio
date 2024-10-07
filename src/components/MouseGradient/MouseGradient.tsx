"use client";
import { useEffect, useRef } from 'react';
import styles from './MouseGradient.module.css';

const MouseGradient: React.FC = () => {
    const gradientRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { pageX, pageY } = e;
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                const gradient = `radial-gradient(600px at ${pageX}px ${pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
                if (gradientRef.current) {
                    gradientRef.current.style.background = gradient;
                }
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div ref={gradientRef} className={styles.gradient} />;
};

export default MouseGradient;
