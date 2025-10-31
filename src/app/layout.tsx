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
    description: 'Full-stack software engineer with 3+ years of experience building scalable, reliable, and user-centric products. Graduated from the master’s in computer science program @ASU.',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico' },
        ],
        apple: '/apple-touch-icon.png',
        other: [
            { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
        ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
        images: "/og.jpg",
        type: "website",
        description: "Full-stack software engineer with 3+ years of experience building scalable, reliable, and user-centric products. Graduated from the master’s in computer science program @ASU.",
        title: "Veeresh Koliwad"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Veeresh Koliwad',
        description: 'Full-stack software engineer with 3+ years of experience building scalable, reliable, and user-centric products. Graduated from the master’s in computer science program @ASU.',
        creator: '@veeresh_koliwad',
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
