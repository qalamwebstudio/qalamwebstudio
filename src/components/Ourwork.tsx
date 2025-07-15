import React from 'react';
import {ArrowUpRight} from 'lucide-react';

const projects = [
    {id: 1, label: 'WEB SITE'},
    {id: 2, label: 'MOBILE APP'},
    {id: 3, label: 'UI/UX DESIGN'},
    {id: 4, label: 'DESKTOP APP'},
    {id: 5, label: '3D MODEL DESIGNING & RENDERING'},
    {id: 6, label: 'SYSTEM DESIGN'},
];

export const Ourwork = () => {
    return (
        <section
            className="w-full bg-[#f1f1f1] text-[#212121] font-Neue p-[3.8vw]"
            style={{boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'}}
        >
            <div className="w-full">
                <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">Our Projects</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-400 mb-8"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full hover:scale-110 transition-transform duration-200">
                            <div
                                className="flex items-center mb-4 text-sm font-semibold text-gray-800 tracking-wider uppercase">
                                <span className="dot mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
                                {project.label}
                            </div>
                            <div className="bg-gray-200/30 transition h-96 rounded-lg border border-gray-300"></div>
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
