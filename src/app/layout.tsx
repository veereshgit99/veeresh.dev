import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Syne } from "next/font/google"
import './globals.css'

const syneFont = Syne({
    style: "normal",
    subsets: ["latin"],
    weight: ["700", "400"],
})

export const metadata: Metadata = {
    title: 'Veeresh Koliwad',
    description: 'Full-stack software engineer passionate about building innovative products and delivering high-quality code.',
    openGraph: {
        images: "/og.jpg",
        type: "website",
        description: "Full-stack software engineer passionate about building innovative products and delivering high-quality code.",
        title: "Veeresh Koliwad"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Veeresh Koliwad',
        description: 'Full-stack software engineer passionate about building innovative products and delivering high-quality code.',
        creator: '@yourusername',
        images: "/og.jpg",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${syneFont.className} bg-gradient-to-br from-background-start to-background-end min-h-screen text-primary`}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
