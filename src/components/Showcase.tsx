import React, {useRef} from 'react';
import EyesFollowCursor from './EyesFollowCursor';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const Showcase: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const splitInstance = useRef<SplitText | null>(null);
    const charRefs = useRef<HTMLElement[]>([]);

    useGSAP(() => {
        if (!titleRef.current) return;

        // Create SplitText
        const split = new SplitText(titleRef.current, {type: 'chars'});
        splitInstance.current = split;
        charRefs.current = split.chars as HTMLElement[];

        charRefs.current.forEach((char) => {
            char.style.display = 'inline-block'; // Required for scaling
            const onEnter = () => {
                gsap.to(char, {
                    color: '#009966',
                    scale: 1.15,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };
            const onLeave = () => {
                gsap.to(char, {
                    color: '#212121',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };

            char.dataset.enterHandler = onEnter.toString();
            char.dataset.leaveHandler = onLeave.toString();
            char.addEventListener('mouseenter', onEnter);
            char.addEventListener('mouseleave', onLeave);
        });

        return () => {
            // Clean up event listeners
            charRefs.current.forEach((char) => {
                char.replaceWith(char.cloneNode(true) as HTMLElement);
            });

            // Clean up SplitText
            if (splitInstance.current) {
                splitInstance.current.revert();
                splitInstance.current = null;
            }
        };
    }, []);

    return (
        <section
            className="relative Showcase w-full h-[40vh] md:h-[75vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
                <h1
                    ref={titleRef}
                    className="title text-[30vw] mb-28 md:mb-0 space-x-4 text-[#212121] font-FoundersGrotesk"
                >
                    eMTrix
                </h1>
            </div>

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <EyesFollowCursor/>
            </div>
        </section>
    );
};
