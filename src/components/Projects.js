import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
export default function Projects(){
    return(
    <section id="projects" className="text-gray-400 bg-[#0036a2] body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4 text-white" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-300">
                    Projects
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
                    Various applications that highlight my software engineering skills, focusing on user experience and innovative solutions. Each project demonstrates my commitment to quality and continuous learning in the tech landscape.
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">

                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);
}