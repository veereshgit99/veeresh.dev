"use client";
import {
    motion,
    useMotionTemplate,
    useSpring,
} from "framer-motion";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{ delay: 0.1 }}
            // @ts-ignore
            onMouseMove={onMouseMove}
            className="overflow-hidden relative duration-700 border rounded-xl hover:bg-background/80 group md:gap-8 hover:border-dark/50 border-dark"
        >
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                <motion.div
                    // @ts-ignore
                    className="absolute inset-0 z-10  bg-gradient-to-br opacity-100 via-blue-300/20  dark:via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                    style={style}
                />
                <motion.div
                    // @ts-ignore
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={style}
                />
            </div>
            {children}
        </motion.div>
    );
};
