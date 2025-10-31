"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border-2 border-dark/20 hover:border-alternative/40 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-alternative/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
