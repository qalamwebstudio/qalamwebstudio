'use client'
import {useEffect} from 'react';
import {Navbar} from "@/components/Navbar";
import {Hero} from "@/page/Hero";
import {Marquee} from "@/components/Marquee";
import {About} from "@/page/About";
import {Showcase} from "@/page/Showcase";
import {Ourwork} from "@/page/Ourwork";
import {Clientsreviews} from "@/page/Clientsreviews";
import {Modelprice} from "@/page/Modelprice";

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
        <main className='w-full min-h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide h-screen text-[#212121] '>
            <Navbar/>
            <Hero/>
            <Marquee/>
            <About/>
            <Showcase/>
            <Ourwork/>
            <Clientsreviews/>
            <Modelprice/>
        </main>
    );
}
