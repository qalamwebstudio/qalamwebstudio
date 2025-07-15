'use client'
import {useEffect} from 'react';
import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import {Marquee} from "@/components/Marquee";
import {About} from "@/components/About";
import {Showcase} from "@/components/Showcase";
import {Ourwork} from "@/components/Ourwork";
import {Clientsreviews} from "@/components/Clientsreviews";

export default function Home() {

    useEffect(() => {
        const handleRightClick = (e: MouseEvent) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleRightClick);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
        };
    }, []);

    return (
        <main className='w-full min-h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide h-screen'>
            <Navbar/>
            <Hero/>
            <Marquee/>
            <About/>
            <Showcase/>
            <Ourwork/>
            <Clientsreviews/>
        </main>
    );
}
