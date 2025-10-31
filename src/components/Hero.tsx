"use client"
import websiteData from "../../website-data"
import Link from "next/link"
import { Young_Serif } from 'next/font/google'
import { motion } from 'framer-motion'

const youngSerif = Young_Serif({
    weight: ['400'],
    subsets: ["latin"]
})

const Hero = () => {
    return (
        <section className="h-[80svh] flex flex-col sm:justify-center relative space-y-3 sm:pt-0 pt-36">
            <div className="relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${youngSerif.className} scroll-m-20 text-6xl tracking-tight lg:text-8xl`}>
                    Veeresh<br />
                    Koliwad
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={"max-w-sm leading-relaxed [&:not(:first-child)]:mt-6 text-secondary text-pretty pb-16 text-lg"}>
                    Full-stack software engineer with 3+ years of experience building scalable, reliable, and user-centric products. Graduated from the master&apos;s in computer science program {" "}
                    <Link href="https://www.asu.edu" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">@ASU</Link>.
                </motion.p>

                {/* MOBILE */}
                <div className="sm:hidden flex gap-4 absolute right-0 -top-5">
                    {websiteData.socials.map((social) => (
                        <Link
                            key={social.href}
                            href={social.href}
                            className="text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-200"
                            target="_blank"
                        >
                            <social.icon className="w-5 h-5" />
                            <span className="sr-only">{social.text}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* OVER SM */}
            <div className="hidden sm:flex absolute right-0 flex-col gap-4">
                {websiteData.socials.map((social) => (
                    <Link
                        key={social.href}
                        href={social.href}
                        className="text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-200"
                        target="_blank"
                    >
                        <social.icon className="w-6 h-6" />
                        <span className="sr-only">{social.text}</span>
                    </Link>
                ))}
            </div>

            {/* Previously text with horizontal line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-28 left-0 right-0 flex items-center gap-4">
                <p className="text-secondary text-lg whitespace-nowrap">
                    Previously software engineer <Link href="https://www.sap.com/index.html" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">@SAP Labs</Link>, I built large-scale backend and ML-driven systems.
                </p>
                <div className="hidden sm:block flex-1 h-[1px] bg-border"></div>
            </motion.div>
        </section>
    )
}

export default Hero
