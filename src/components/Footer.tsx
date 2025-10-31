'use client'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="relative py-6 md:py-0">
            <div className="absolute top-0 h-px w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark to-background-start" />
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-secondary md:text-left">
                    Brought to you by{" "}
                    <Link href="https://github.com/veereshgit99" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Veer</Link>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
