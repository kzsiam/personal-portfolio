import React from "react";
import { FaGithub, FaLinkedin, FaFacebookF, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 mb-5 px-4">
            <div className="">

                {/* Right Section */}
                <div className="text-center  text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Kazee Siam. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;