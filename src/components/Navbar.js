import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-[#012d74] md:sticky top-0 z-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Bhavin Goswami
                    </a>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-yellow-600 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 mr-5 text-yellow-600 hover:text-white">
                        Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/bhavin-himatkumar-goswami/" // Replace with your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-blue-500 mt-4 md:mt-0">
                    <img
                        src="../resources/linkedin-logo.svg" // Replace with the path to your LinkedIn logo
                        alt="LinkedIn"
                        className="w-6 h-6"
                    />
                </a>
                <a
                    href="https://github.com/bhavin-io" // Replace with your Github URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-blue-500 mt-4 md:mt-0">
                    <img
                        src="../resources/github-logo.svg" // Replace with the path to your Github logo
                        alt="LinkedIn"
                        className="w-6 h-6"
                    />
                </a>
            </div>
        </header>
    );
}