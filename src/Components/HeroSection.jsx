import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import image4 from '../assets/image4.jpg'




const HeroSection = () => {

    const roles = ["Frontend Developer", "MERN Stack Developer"];
   
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 120; // delete faster, type slower

        const typing = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(typing);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return (
        <div className=''>
            <div className="flex space-x-2 text-2xl justify-end mt-5 mx-3">
                <a target="_blank" href="https://github.com/kzsiam" className="hover:text-pink-400 transition"><FaGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/kzsiam/" className="hover:text-blue-400 transition"><FaLinkedin /></a>
                <a target="_blank" href="https://www.facebook.com/kazeesiam" className="hover:text-indigo-400 transition"><FaFacebook /></a>
            </div>
            <div className="mt-30 bg-gradient-to-br  text-white flex items-center justify-center px-6">
                {/* Social Icons */}

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

                    {/* Right Side (Photo) -> Move first on mobile */}
                    <div className="flex justify-center md:order-2 order-1">
                        <img
                            src={image4} // 👉 replace with your photo path
                            alt="Your Name"
                            className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover border-4 border-pink-500"
                        />
                    </div>

                    {/* Left Side (Text Content) */}
                    <div className="space-y-6 md:order-1 order-2 mx-2 lg:mx-0">
                        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                            Hello, <br />
                            This is <span className="text-pink-500">Kazee Siam</span>, <br />
                            I'm a Professional{" "}
                            <span className="text-green-400 inline-block min-w-[250px]">
                                {text}_.
                            </span>
                        </h1>



                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline btn-primary">Contact Me</button>
                            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-white"><a href='https://drive.google.com/uc?export=download&id=1etyh5SheiwVXdpgogkNXIRzxW_Z9-h8U'>Get Resume</a></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HeroSection;