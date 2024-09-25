import React from 'react';

export default function Education() {
    return (
        <section id="education" className="bg-[#0036a2] text-white body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold title-font text-yellow-300 mb-4">
                        Education
                    </h1>
                    <p className="leading-relaxed text-white">
                        My academic journey in computer science and engineering.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {/* First Education Card */}
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg shadow-lg">
                            <h2 className="text-yellow-400 text-xl font-bold title-font mb-4">
                                Pace University, New York, NY
                            </h2>
                            <p className="leading-relaxed text-lg text-white">
                                <strong>Master of Science in Computer Science</strong>
                            </p>
                            <p className="mt-2 text-white">
                                Start Date: <strong>January 2023</strong>
                            </p>
                            <p className="mt-2 text-white">
                                Anticipated Graduation: <strong>December 2024</strong>
                            </p>
                            <p className="mt-2 text-white">GPA: <strong>3.81/4.00</strong></p>
                            <ul className="list-disc list-inside text-white mt-3">
                                <li>Algorithms & Computing Theory</li>
                                <li>Artificial Intelligence</li>
                                <li>Computer Systems & Concepts</li>
                                <li>Database Management Systems</li>
                                <li>Parallel Computing</li>
                                <li>Python Programming</li>
                                <li>Introduction to Data Science</li>
                                <li>Computer Graphics</li>
                                <li>Capstone (Software Engineering)</li>

                            </ul>
                        </div>
                    </div>

                    {/* Second Education Card */}
                    <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg shadow-lg">
                            <h2 className="text-yellow-400 text-xl font-bold title-font mb-4">
                                University of Mumbai, Mumbai, India
                            </h2>
                            <p className="leading-relaxed text-lg text-white">
                                <strong>Bachelor of Engineering in Computer Engineering</strong>
                            </p>
                            <p className="mt-2 text-white">
                                Start Date: <strong>August 2022</strong>
                            </p>
                            <p className="mt-2 text-white">
                                Date of Graduation: <strong>July 2022</strong>
                            </p>
                            <p className="mt-2 text-white">GPA: <strong>3.20/4.00</strong></p>
                            <ul className="list-disc list-inside text-white mt-3">
                                <li>Advanced Algorithms</li>
                                <li>Advanced System Security</li>
                                <li>Cloud Computing</li>
                                <li>Data Structures</li>
                                <li>Human Machine Interaction</li>
                                <li>Machine Learning</li>
                                <li>Management Information Systems</li>
                                <li>Software Engineering</li>
                                <li>System Programming & Compiler Design</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
