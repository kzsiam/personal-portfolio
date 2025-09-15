import React, { } from 'react';

const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "DaisyUI", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvOgtTYVL_w8kND07LcUN6LRUdS54THScfA&s" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "ShadCN UI", img: "https://ui.shadcn.com/apple-touch-icon.png" },
    { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Netlify", img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Passport.js", img: "https://miro.medium.com/v2/resize:fit:560/format:webp/1*SADNFXCzCw8o1wmqzzgUnA.png" },
    { name: "JWT", img: "https://jwt.io/img/pic_logo.svg" },
];

const SkillsSection = () => {

    return (
        <div>
            <div className=" py-12 overflow-hidden">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-200 relative inline-block">
                        <span className="px-4 py-1 bg-gradient-to-r  rounded shadow-lg">
                            Skills
                        </span>
                    </h2>
                </div>

                {/* Continuous Sliding Row */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee space-x-6"> {/* ✅ Added space-x-6 */}
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-28 md:w-32 lg:w-36 bg-[#121a2e] rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2"
                                />
                                <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                            </div>
                        ))}

                        {/* Duplicate row for smooth infinite scroll */}
                        {skills.map((skill, index) => (
                            <div
                                key={`dup-${index}`}
                                className="flex-shrink-0 w-28 md:w-32 lg:w-36 bg-[#121a2e] rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2"
                                />
                                <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillsSection;