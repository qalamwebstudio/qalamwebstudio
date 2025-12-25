'use client';

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import {  FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type HeadingLine = {
    text: string;
    hasImage: boolean;
};
const headingLines: HeadingLine[] = [
    {text: "Engineering Your", hasImage: false},
    {text: "Vision into", hasImage: true},
    {text: "Reality",hasImage: false},
];
const socialLinks = [
    {icon: FaInstagram, url: "https://www.instagram.com/yourprofile", color: "text-pink-600"},
    {icon: FaLinkedinIn, url: "https://www.linkedin.com/in/yourprofile", color: "text-blue-700"},
    {icon: FaTwitter, url: "https://twitter.com/yourprofile", color: "text-sky-500"},
];

import { useRouter } from "next/navigation";

let heroAnimationPlayed = false;

export const Hero = () => {
    const router = useRouter();
    const headingContainerRef = useRef<HTMLDivElement>(null);
    const charRefs = useRef<HTMLSpanElement[]>([]);
    const socialRefs = useRef<HTMLAnchorElement[]>([]);
    const footerRefs = useRef<HTMLElement[]>([]);
    const hasAnimated = useRef(heroAnimationPlayed);

    charRefs.current = [];
    socialRefs.current = [];
    footerRefs.current = [];

    useLayoutEffect(() => {
        if (
            hasAnimated.current ||
            !headingContainerRef.current ||
            !charRefs.current.length
        )
            return;
        hasAnimated.current = true;
        heroAnimationPlayed = true;

        const ctx = gsap.context(() => {
            const hiddenTargets = [
                ...charRefs.current,
                ...socialRefs.current,
                ...footerRefs.current,
            ].filter((target): target is HTMLElement => Boolean(target));

            if (!hiddenTargets.length) return;

            gsap.set(hiddenTargets, {
                yPercent: 100,
                opacity: 0,
            });

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            tl.to(charRefs.current.filter(Boolean), {
                yPercent: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.02,
            })
                .to(
                    socialRefs.current.filter(Boolean),
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                    },
                    "-=0.9"
                )
                .to(
                    footerRefs.current.filter(Boolean),
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.15,
                    },
                    "-=0.7"
                );
        }, headingContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section data-scroll data-scroll-speed="-.2" className="relative w-full h-screen text-[#212121] flex flex-col  ">
            {/* Top content */}
            <div className="w-full flex flex-col justify-start items-start p-6 pt-10 mt-14 md:pt-20 md:px-10 lg:px-14">
                <div
                    ref={headingContainerRef}
                    data-scroll
                    data-scroll-speed=".2"
                    className="font-FoundersGrotesk font-bold text-left space-y-4"
                >
                    {(() => {
                        let charCounter = -1;
                        return headingLines.map((line, lineIdx) => (
                            <h1
                                key={lineIdx}
                                className={`text-[55px] md:text-[100px] lg:text-[139px] uppercase tracking-normal lg:tracking-wider leading-[50px] md:leading-[70px] lg:leading-[108px]
                ${line.hasImage
                                    ? 'flex leading-[50px] md:leading-[70px] lg:leading-[70px]'
                                    : 'leading-none whitespace-nowrap'} overflow-hidden`}
                            >
                                {line.text.split("").map((char, charIdx) => {
                                    const displayChar = char === " " ? "\u00A0" : char;
                                    charCounter += 1;
                                    const currentIndex = charCounter;
                                    return (
                                        <span
                                            key={`${lineIdx}-${charIdx}`}
                                            className="inline-flex overflow-hidden"
                                        >
                                            <span
                                                ref={(el) => {
                                                    if (el) {
                                                        charRefs.current[currentIndex] = el;
                                                    }
                                                }}
                                                className="inline-block will-change-transform"
                                            >
                                                {displayChar}
                                            </span>
                                        </span>
                                    );
                                })}
                            </h1>
                        ));
                    })()}
                </div>
                {/* Mobile Image */}
                <div className="mt-[40px] relative block md:hidden w-[240px] h-[140px] overflow-hidden rounded-lg">
                   
                </div>
            </div>

            <div className='absolute right-0 top-[40vh]'>
                <div className="px-4 py-8 flex flex-col items-center space-y-4">
                    {socialLinks.map(({icon: Icon, url, color}, idx) => (
                        <span key={idx} className="overflow-hidden inline-flex">
                            <a
                                ref={(el) => {
                                    if (el) {
                                        socialRefs.current[idx] = el;
                                    }
                                }}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <Icon
                                    className={`text-[28px] md:text-[32px] lg:text-[28px] ${color} hover:scale-110 transition-transform duration-200`}/>
                            </a>
                        </span>
                    ))}
                </div>
            </div>
            {/* Footer CTA and Tagline */}
            <div
                className="w-full mt-[10vh] md:mt-[10vh] border-t border-gray-300 py-2 px-6 md:px-12 lg:px-14 flex flex-col sm:flex-row items-center justify-between text-sm md:text-base text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:space-x-8 mb-4 sm:mb-0">
                    {[
                        "Empowering Startups and Growing Businesses",
                        "Vision. Engineered. QalamWebStudio.",
                    ].map((text, idx) => (
                        <p key={text} className={`mb-2 sm:mb-0 ${idx === 0 ? "" : ""}`}>
                            <span className="inline-flex overflow-hidden">
                                <span
                                    ref={(el) => {
                                        if (el) {
                                            footerRefs.current[idx] = el;
                                        }
                                    }}
                                    className="inline-block will-change-transform"
                                >
                                    {text}
                                </span>
                            </span>
                        </p>
                    ))}
                </div>
                <span className="overflow-hidden inline-flex">
                    <button
                        ref={(el) => {
                            if (el) {
                                footerRefs.current[footerRefs.current.length] = el;
                            }
                        }}
                        onClick={() => router.push("/services#modelprice")}
                        className="group relative overflow-hidden px-6 py-3 border border-gray-600 rounded-full transition-colors duration-200"
                    >
                        {/* Animated black background */}
                        <span
                            className="absolute inset-0 bg-black scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus:scale-x-100 group-active:scale-x-100 z-0"></span>

                        {/* Text and icon - stays above */}
                        <span
                            className="relative z-10 flex items-center space-x-2 text-[#212121] group-hover:text-white group-focus:text-white group-active:text-white transition-colors duration-300">
                           <span>START THE PROJECT</span>
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 0L7.4325 1.5675L13.1925 7.335H0V9.665H13.1925L7.4325 15.4325L9 17L17 9L9 0Z"
                                    fill="currentColor"/>
                           </svg>
                           </span>
                    </button>
                </span>


            </div>

            {/* Scroll down text */}
            <div className="w-full text-center text-xs py-6 text-gray-500 animate-bounce">
                Scroll down
            </div>
        </section>
    );
};
