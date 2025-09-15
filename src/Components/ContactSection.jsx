// import React from "react";
// import { FaGithub, FaLinkedin, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// const ContactSection = () => {
//     return (
//         <div>
//             <h2 className="text-center">
//                 <span className="px-6 py-2 rounded-lg bg-gradient-to-r shadow-lg text-2xl font-bold">
//                     Contact Me
//                 </span>
//             </h2>
//             <section className="py-20 px-4 md:px-20 bg-gray-900 text-white">

//                 <div className="flex flex-col md:flex-row md:justify-between gap-10">
//                     {/* Contact Form */}
//                     <div className="bg-gray-800 p-8 rounded-lg shadow-lg md:w-2/3">
//                         <p className="mb-6">
//                             If you have any questions or need further information, please feel free to reach out to me. I am open to work opportunities that match my skills and areas of interest
//                         </p>
//                         <form className="space-y-4">
//                             <div>
//                                 <label className="block mb-1" htmlFor="name">Your Name:</label>
//                                 <input type="text" id="name" className="input input-bordered w-full" placeholder="Your Name" />
//                             </div>
//                             <div>
//                                 <label className="block mb-1" htmlFor="email">Your Email:</label>
//                                 <input type="email" id="email" className="input input-bordered w-full" placeholder="Your Email" />
//                             </div>
//                             <div>
//                                 <label className="block mb-1" htmlFor="message">Your Message:</label>
//                                 <textarea id="message" className="textarea textarea-bordered w-full" placeholder="Your Message" rows="5"></textarea>
//                             </div>
//                             <button type="submit" className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-none flex items-center justify-center">
//                                 SEND MESSAGE <FaEnvelope className="ml-2" />
//                             </button>
//                         </form>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="flex flex-col justify-center space-y-6 md:w-1/3">
//                         <div className="flex items-center space-x-4">
//                             <FaEnvelope className="text-gray-400" />
//                             <span>kazisiam248@gmail.com</span>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <FaPhone className="text-gray-400" />
//                             <span>+8801317373763</span>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <FaMapMarkerAlt className="text-gray-400" />
//                             <span>Gazipur, Dhaka, Bangladesh</span>
//                         </div>

//                         {/* Social Links */}
//                         <div className="flex space-x-4 mt-4">
//                             <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition"><FaGithub /></a>
//                             <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition"><FaLinkedin /></a>
//                             <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition"><FaFacebookF /></a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>

//     );
// };

// export default ContactSection;






import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            style: {
              background: "linear-gradient(90deg, #ec4899, #8b5cf6)", // Pink → Purple
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            icon: "🚀",
          });
          form.current.reset();
        },
        (error) => {
          toast.success("Failed to send message, please try again.", {
            style: {
              background: "linear-gradient(90deg, #ec4899, #8b5cf6)", // Pink → Purple
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            icon: "🚀",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 ">Contact Me</h2>

      <div className="flex items-center flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <div className="flex flex-col items-center justify-center p-6 border-2 border-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all">
            <FaEnvelope className="text-2xl mb-2" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p>kazisiam248@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border-2 border-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all">
            <FaWhatsapp className="text-2xl mb-2" />
            <h3 className="font-semibold text-lg">WhatsApp</h3>
            <p>+8801317373763</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              className="input input-bordered w-full border-pink-500 focus:border-purple-500 focus:ring-purple-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full border-pink-500 focus:border-purple-500 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="textarea textarea-bordered w-full border-pink-500 focus:border-purple-500 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-pink-500 to-purple-500 border-none text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

