import { Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-6"
    >
      
      <div className="relative z-10">
        {" "}
        {/* Added wrapper to keep text above background */}
        <h1 className="text-6xl font-extrabold mb-4 glow-text">Ayush Parwal</h1>
        <h6 className="text-green-500 text-xl font-semibold mb-4">
          Known as "ayushokaay"
        </h6>
        {/* Bio */}
        <p className="text-lg font-medium text-white max-w-2xl leading-relaxed">
          I am an <span className="text-[#6305d4] font-bold">ML developer</span>{" "}
          passionate about
          <span className="text-green-400 font-bold"> AI agents</span> and
          <span className="text-purple-400 font-bold">
            {" "}
            Natural Language Processing (NLP)
          </span>
          . I have a strong interest in{" "}
          <span className="text-yellow-400 font-bold">Linux</span>,
          <span className="text-orange-400 font-bold">
            {" "}
            Data Structures and Algorithms
          </span>
          . Currently, I work with{" "}
          <span className="text-red-400 font-bold">LLM APIs</span> to build
          intelligent and innovative applications. Always exploring new
          technologies to push the boundaries of AI.
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <a href="https://github.com/Ayushparwal" target="_blank">
            <Github className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-parwal-797a79255/"
            target="_blank"
          >
            <Linkedin className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/ayushparwal2004" target="_blank">
            <Twitter className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
