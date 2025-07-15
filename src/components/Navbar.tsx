import {useCallback, useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const menuOverlayRef = useRef(null);
    const menuContentRef = useRef(null);
    const navRef = useRef(null);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (mobileMenuOpen) {
                gsap.set(menuRef.current, {display: 'block'});

                gsap.fromTo(
                    menuOverlayRef.current,
                    {clipPath: 'circle(0% at top center)', opacity: 0},
                    {
                        clipPath: 'circle(150% at center)',
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.inOut'
                    }
                );

                gsap.fromTo(
                    menuContentRef.current,
                    {opacity: 0, y: -30},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: 0.3,
                        ease: 'power2.out'
                    }
                );
            } else {
                gsap.to(menuOverlayRef.current, {
                    clipPath: 'circle(0% at top center)',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        gsap.set(menuRef.current, {display: 'none'});
                    }
                });

                gsap.to(menuContentRef.current, {
                    opacity: 0,
                    y: 10,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        });

        return () => ctx.revert();
    }, [mobileMenuOpen]);

    return (
        <div
            className='w-full px-8 md:px-10 lg:px-16 py-2 bg-transparent backdrop-blur-sm flex flex-row items-center justify-between font-Neue fixed z-50'>
            {/* Logo */}
            <div className='logo'>
                <svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg" role="img"
                     aria-label="Emtrix Logo">
                    <defs>
                        <filter id="shadow" x="0" y="0" width="200%" height="200%">
                            <feOffset result="offOut" in="SourceAlpha" dx="1" dy="1"/>
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1.5"/>
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
                        </filter>
                    </defs>
                    <text
                        x="0"
                        y="35"
                        style={{
                            fontWeight: '600',
                            fontFamily: 'Neue',
                            fontSize: '32px',
                            letterSpacing: '1px'
                        }}
                        fill="#212121"
                    >
                        eMTrix
                    </text>
                </svg>
            </div>

            {/* Desktop Navigation */}
            <div className='nav-links gap-10 hidden md:flex' ref={navRef}>
                {['Services', 'Our work', 'About us', 'Blog', 'Contact us'].map((item, index) => (
                    <div
                        key={index}
                        className={`relative cursor-pointer overflow-hidden h-6 ${index === 4 ? 'lg:ml-60' : ''}`}
                        onMouseEnter={(e) => {
                            const textWrap = e.currentTarget.querySelector('.text-wrap');
                            const underline = e.currentTarget.querySelector('.underline');
                            gsap.to(textWrap, {y: '-50%', duration: 0.4, ease: 'power2.out'});
                            gsap.to(underline, {width: '100%', duration: 0.4, ease: 'power2.out'});
                        }}
                        onMouseLeave={(e) => {
                            const textWrap = e.currentTarget.querySelector('.text-wrap');
                            const underline = e.currentTarget.querySelector('.underline');
                            gsap.to(textWrap, {y: '0%', duration: 0.4, ease: 'power2.out'});
                            gsap.to(underline, {width: '0%', duration: 0.4, ease: 'power2.out'});
                        }}
                    >
                        <div className="text-wrap flex flex-col">
                            <span className="inline-block text-[17px] font-Neue">{item}</span>
                            <span className="inline-block text-[17px] font-Neue">{item}</span>
                        </div>
                        <span className="underline absolute bottom-0 left-0 h-[1px] bg-[#212121]"
                              style={{width: '0%'}}/>
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            <div className='mobile md:hidden'>
                <div
                    className="menu-icon flex justify-end cursor-pointer z-50 relative"
                    onClick={toggleMobileMenu}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" className='text-gray-200' height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </div>

                {/* Fullscreen Overlay Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`fixed inset-0 w-full min-h-screen z-40 transition-all duration-300`}
                    style={{display: 'none'}}
                >
                    <div ref={menuOverlayRef} className="absolute inset-0 bg-[#212121]" style={{opacity: 0}}></div>

                    <div ref={menuContentRef} className="relative h-full w-full px-10 py-3 text-white"
                         style={{opacity: 0}}>
                        <div className="text-white text-3xl font-bold mb-8 flex-1">
                            <svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg"
                                 role="img" aria-label="Emtrix Logo">
                                <text
                                    x="0"
                                    y="35"
                                    style={{
                                        fontWeight: '600',
                                        fontFamily: 'Neue',
                                        fontSize: '32px',
                                        letterSpacing: '1px'
                                    }}
                                    fill="#f1f1f1"
                                >
                                    eMTrix
                                </text>
                            </svg>
                        </div>
                        <div className="flex flex-col font-FoundersGrotesk cursor-pointer">
                            {['SERVICES', 'OUR WORK', 'ABOUT US', 'BLOG', 'CONTACT US'].map((item, index) => (
                                <a key={index} href="#"
                                   className="text-[62px] md:text-6xl leading-14 hover:text-gray-300 transition-colors duration-200">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="mt-24">
                            <p className="text-gray-400 mb-2">S:</p>
                            <div className="flex flex-col gap-2 text-blue-400 underline">
                                <a href="#" className="hover:text-blue-300">Instagram</a>
                                <a href="#" className="hover:text-blue-300">Behance</a>
                                <a href="#" className="hover:text-blue-300">Facebook</a>
                                <a href="#" className="hover:text-blue-300">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
