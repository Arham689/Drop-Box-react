import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImg = ({
    className,
    alt,
    src,
    start,
    end,
    disable = false // Ensure default is false
}: {
    className?: string;
    alt?: string;
    src: string;
    start: number;
    end: number;
    disable?: boolean; // Type definition for disable
}) => {
    const ref = useRef(null);

    // Only enable scroll tracking if disable is false
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
        // Conditionally disable the scroll listener
        // This is a subtle way to "disable" by not tracking progress
        // It's more efficient than calculating transforms and then not applying them.
        layoutEffect: false // Prevents initial layout effect for performance if not needed
    });

    // Conditionally apply transforms and opacity based on 'disable' prop
    const opacity = disable ? 1 : useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const scale = disable ? 1 : useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);

    const y = disable ? 0 : useTransform(scrollYProgress, [0, 1], [start, end]);

    // Use useMotionTemplate only if not disabled, otherwise just set default values
    const transform = disable
        ? "translateY(0px) scale(1)" // Default static transform when disabled
        : useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity }}
            // When disabled, we might want to prevent Framer Motion from even trying to animate
            // by removing motion props or setting initial/animate to static values.
            // However, setting the style directly as above often suffices.
        />
    );
};

export default ParallaxImg;