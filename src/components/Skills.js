import { BadgeCheckIcon, CodeIcon, DesktopComputerIcon, CogIcon } from "@heroicons/react/solid";
import React from "react";
import { skills,tools } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <DesktopComputerIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I have developed a robust skill set and extensive experience in a variety of technologies, enabling me to deliver effective solutions and drive project success. My proficiency includes:
                    </p>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CodeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>

                                <span className="title-font font-medium text-white">
                  {skill}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10 mb-10">
                    <CogIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Tools
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I have hands-on experience with a wide range of tools and technologies that enhance my ability to develop solutions efficiently and effectively. My toolkit includes:
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {tools.map((tools) => (
                        <div key={tools} className="p-2 sm:w-1/4 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                  {tools}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}