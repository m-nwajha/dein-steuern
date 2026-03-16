'use client';

import { FC, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimatedSectionProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    amount?: number;
};

const getVariants = (direction: AnimatedSectionProps['direction'], delay: number): Variants => {
    const directionMap = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    };

    return {
        hidden: { opacity: 0, ...directionMap[direction!] },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
            },
        },
    };
};

const AnimatedSection: FC<AnimatedSectionProps> = ({
    children,
    className,
    delay = 0,
    direction = 'up',
    amount = 0.2,
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={getVariants(direction, delay)}
            className={className}
            style={{ overflow: 'hidden' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;