import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Profile Image */}
        <div className="flex justify-center md:justify-start flex-1">
  <a href="https://www.instagram.com/ayushokaay" target="_blank" rel="noopener noreferrer">
    <img
      src="my_image.jpg"
      alt="Ayush Parwal"
      className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl object-cover 
                 ring-4 ring-green-500 ring-offset-2 ring-offset-white 
                 transform transition duration-500 hover:scale-105 hover:rotate-1"
    />
  </a>
</div>

        {/* Right Content */}
        <div className="text-center md:text-left animate-fade-in-up flex-1">
          <h1 className="relative text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-snug font-heading animate-fade-in-up">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Ayush Parwal
            </span>
            <br />
            <span className="text-green-500 italic text-base md:text-lg font-light tracking-wide transition-transform duration-300 hover:scale-105 inline-block">
              known as ayushokaay
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl leading-relaxed font-sans">
            AI/ML Engineer & Full-Stack Developer specializing in{" "}
            <span className="font-semibold text-blue-600">NLP</span>,{" "}
            <span className="font-semibold text-indigo-600">LLMs</span>, and{" "}
            <span className="font-semibold text-purple-600">
              Modern Web Technologies
            </span>
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Passionate about building intelligent systems and creating seamless
            user experiences through cutting-edge AI and web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Get In Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
