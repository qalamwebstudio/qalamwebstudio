'use client'
import { useEffect, useCallback } from 'react';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/page/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/page/About";
import { Showcase } from "@/page/Showcase";
import { Ourwork } from "@/page/Ourwork";
import { Clientsreviews } from "@/page/Clientsreviews";
import { Modelprice } from "@/page/Modelprice";
import { Connect } from '@/page/Connect';
import { Footer } from '@/page/Footer';

export default function Home() {
    // Memoized event handler to prevent unnecessary re-renders
    const handleRightClick = useCallback((e: MouseEvent) => {
        e.preventDefault();
    }, []);

    useEffect(() => {
        document.addEventListener('contextmenu', handleRightClick);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
        };
    }, [handleRightClick]);

    return (
        <main className='w-full min-h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide h-screen text-[#212121]'>
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <Showcase />
            <Ourwork />
            <Clientsreviews />
            <Modelprice />
            <Connect />
            <Footer />
        </main>
    );
}
