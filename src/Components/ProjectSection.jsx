import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi";

const projects = [
    {
        title: "SnazzMart Online Store",
        description:
            "SnazzMart is a full-featured e-commerce platform where users can explore products, add items to their cart, and complete secure purchases. The platform includes user authentication, dynamic product management, and a fully responsive design for desktop and mobile devices.",
        image: "https://i.ibb.co.com/N2cXVCmK/Screenshot-2025-09-15-112723.png",
        tags: ["React", "JavaScript", "Tailwind", "DaisyUI", "Node.js", "Express", "MongoDB", "Firebase"],
        client: "https://github.com/kzsiam/snazzmart-onlinestore-client-repo",
        server: "https://github.com/kzsiam/snazzmart-onlinestore-server-repo",
        demo: "https://snazzmart-onlinestore-client.web.app/",
    },
    {
        title: "EZInvo Billing Service",
        description:
            "EZInvo is a billing and invoicing system tailored for small businesses. Users can create, send, and track invoices, manage client records, and monitor payment statuses, all through a clean and intuitive interface.",
        image: "https://i.ibb.co.com/n8CcZwNw/Screenshot-2025-09-15-112751.png",
        tags: ["React", "JavaScript", "Tailwind", "ShadCnUI", "Node.js", "Express", "MongoDB", "PassportJs"],
        client: "https://github.com/kzsiam/ezinvo-billing-client",
        server: "https://github.com/kzsiam/ezinvo-billing-server",
        demo: "https://ezinvo-billing-client.vercel.app/",
    },
    {
        title: "Doctor Portal",
        description:
            "Doctor Portal is a healthcare management platform enabling patients to book appointments and doctors to manage schedules efficiently. The system features secure authentication, real-time availability tracking, and seamless communication between patients and medical professionals.",
        image: "https://i.ibb.co.com/s9WD7cxT/Screenshot-2025-09-15-112954.png",
        tags: ["React", "JavaScript", "Tailwind", "DaisyUI", "Node.js", "Express", "MongoDB", "Firebase"],
        client: "https://github.com/kzsiam/doctors-portal-client",
        server: "https://github.com/kzsiam/doctors-portal-server",
        demo: "https://doctors-portal-bc60e.web.app/",
    },
];



const ProjectSection = () => {
    return (
        <div className=" mt-30">
            <h1 className="text-4xl text-white font-semibold text-center">Projects</h1>
            <section className="py-12 px-6 bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card bg-[#1e293b] shadow-lg rounded-2xl overflow-hidden border border-gray-700 hover:shadow-pink-500/20 transition"
                        >
                            <figure>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body p-6 space-y-4">
                                <h2 className="card-title text-xl font-bold">
                                    {project.title}
                                </h2>
                                <p className="text-sm leading-relaxed">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-sm font-medium text-pink-400 hover:text-pink-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 pt-3">
                                    <a
                                        href={project.client}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm bg-[#111827] text-white border border-gray-600 hover:bg-gray-800 flex items-center gap-2"
                                    >
                                        <FaGithub /> Client Code
                                    </a>
                                    <a
                                        href={project.server}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm bg-[#1f2937] text-white border border-gray-600 hover:bg-gray-800 flex items-center gap-2"
                                    >
                                        <HiOutlineServer /> Server Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;