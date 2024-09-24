export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I'm Bhavin Himatkumar Goswami.
                        <br />
                        <span className="text-lg">Master's in Computer Science student at Pace University, New York.</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Hello! I’m Bhavin Himatkumar Goswami, a passionate software engineer currently pursuing my Master’s in Computer Science at Pace University, New York. With a solid foundation in full-stack development, machine learning, and cloud technologies, I love solving complex problems through code. Over the years, I’ve worked on numerous academic and freelance projects, building scalable web applications, optimizing databases, and implementing AI solutions. Whether I’m mentoring teams at hackathons or crafting my next project, I’m always learning and growing as a developer.


                    </p>
                    <div className="flex justify-center">
                        <a
                            href={"#contact"}
                            className="inline-flex bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href={"#projects"}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-5 ">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="Bhavin Himatkumar Goswami"
                        src={"./resources/bhavin-himatkumar-goswami.jpg"}
                    />
                </div>
            </div>
        </section>
    );
}