import React from "react";

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p>
                    Hello, I'm Jaswant Singh, a passionate Web developer with a keen eye for MERN
                    Stack . With a background in IT, I strive to create impactful and
                    visually stunning Software solutions that leave a lasting impression.
                </p>
                <br />
                <h1 className="text-blue-600 font-semibold text-xl">
                    Education & Training
                </h1>
                <span>
                    Master of Computer Application(MCA) From MRSC , Indore  || Bachelor of Computer Application(BCA) From SVIM , Indore 2024.
                </span>
                <br />
                <br />
                <h1 className="text-blue-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>
                    Proficient in HTML, CSS, JAVASCRIPT, PYTHON, JAVA experienced with REACT, NEXTJS, MONGODB, Oracle, SQL, GIT & GITHUB  strong grasp of these Web Development Tools And Technologies.
                    Excellent problem-solving skills Effective communicator and
                    collaborator.
                </span>
                <br />
                <br />
                <h1 className="text-blue-600 font-semibold text-xl">
                    Professional Experience
                </h1>
                <span>
                    {/* [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions] */}
                    As a Freelancer Web Developer, Created Landing Pages sites, Portfolio Websites for the client of BrandViz.com .
                </span>
                <br />
                <br />
                <h1 className="text-blue-600 font-semibold text-xl">
                    Achievements & Awards
                </h1>
                <span>
                    Completed Internships & Achieved Certificates in Web Development from Technohacks.com, BharatIntern.com And Python Development from Codsoft.com in 2023.
                </span>
                <br />
                <br />
                <h1 className="text-blue-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p>
                    My mission is to leverage my skills and creativity to deliver
                    innovative IT solutions that exceed client expectations and
                    contribute positively to the digital landscape. I am committed to
                    continuous learning and growth, always seeking new challenges and
                    opportunities to expand my horizons.
                </p>
            </div>
        </div>
    );
}

export default About;