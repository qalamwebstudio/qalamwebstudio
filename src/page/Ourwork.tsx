import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const projects = [
    {id: 1, label: 'WEB SITE'},
    {id: 2, label: 'MOBILE APP'},
    {id: 3, label: 'UI/UX DESIGN'},
    {id: 4, label: 'DESKTOP APP'},
    {id: 5, label: '3D MODEL DESIGNING'},
    {id: 6, label: 'SYSTEM DESIGN'},
];

export const Ourwork = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    useEffect(() => {
        // Initialize GSAP animations
        gsap.set('.project-label', { opacity: 0, scale: 0.5 });
    }, []);

    const handleProjectHover = (label: string, isEntering: boolean) => {
        if (isEntering) {
            setHoveredProject(label);
            gsap.to('.project-label', {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            setHoveredProject(null);
            gsap.to('.project-label', {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: 'power3.in'
            });
        }
    };

    return (
        <section
            className="w-full bg-[#f1f1f1] text-[#212121] font-Neue p-[3.8vw] relative overflow-hidden"
            style={{boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'}}
        >
            <div className="w-full">
                <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">Our Projects</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-400 mb-8"></div>


            {/* Floating project label - only show on desktop */}
            <div
                className="project-label fixed inset-0 pointer-events-none flex items-center justify-center z-50"
                style={{ display: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'none' : 'flex' }}
            >
                <h2 className="text-[120px] font-bold text-black/10">
                    {hoveredProject}
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="w-full group"
                            onMouseEnter={() => handleProjectHover(project.label, true)}
                            onMouseLeave={() => handleProjectHover(project.label, false)}
                        >
                            <div
                                className="flex items-center mb-4 text-sm font-semibold text-gray-800 tracking-wider uppercase">
                                <span className="dot mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
                                {project.label}
                            </div>
                            <div className="bg-gray-200/30 transition-all duration-500 h-96 rounded-lg border border-gray-300 group-hover:scale-105"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative w-full items-center justify-center my-10 mt-24 '>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <a className="group flex items-center justify-center pl-8 pr-6 py-4 border bg-[#212121] hover:bg-black text-white rounded-full transition-colors  duration-200 cursor-auto">
                        View all our work
                        <div
                            className='relative ml-8 w-2 h-2 group-hover:scale-500 bg-white duration-200 rounded-full'>
                            <ArrowUpRight
                                className="absolute w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};
