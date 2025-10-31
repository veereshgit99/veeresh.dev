'use client'

import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Container>
                <Hero />
                <Projects />
            </Container>
            <Footer />
        </>
    )
}