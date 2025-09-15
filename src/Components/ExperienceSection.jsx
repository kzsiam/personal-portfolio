import React from "react";
import { FaUser } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        <div className="col-span-12 row-span-12 border border-gray-800"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-center mb-16">
          <span className="px-6 py-2 rounded-lg bg-gradient-to-r shadow-lg text-2xl font-bold">
            Experiences
          </span>
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            {/* Replace with an illustration/image */}
            <img
              src="https://i.ibb.co.com/tMxGvB8C/image.png"
              alt="Laptop Illustration"
              className="w-72 md:w-96 mix-blend-screen rounded-4xl drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            />
          </div>

          {/* Right Side - Experience Card */}
          <div className="relative">
            <div className="p-6 md:p-8 rounded-2xl border border-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-gradient-to-r from-[#121826] to-[#1a2238]">
              <p className="text-green-400 text-sm mb-2">(Jan 2023 - Present)</p>
              <h3 className="flex items-center text-xl font-bold mb-2">
                <FaUser className="mr-2 text-pink-400" /> SELF EMPLOYED
              </h3>
              <p className="text-gray-300">
                Code and build something in everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
