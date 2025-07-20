import { Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Ayush Parwal
        </h1>
        <p className="text-sm text-gray-400 italic mb-4">
          also known as <span className="text-orange-400">ayushokaay</span>
        </p>
        <h2 className="text-2xl text-green-400 font-semibold mb-6">
          ML Developer | AI Agent Builder | NLP Enthusiast
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          I’m passionate about building intelligent systems using LLMs, AI
          agents, and NLP. I enjoy working with Automations, open source tools, and
          algorithms. Currently exploring frontier technologies to build
          future-ready applications.
        </p>

        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://github.com/Ayushparwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-parwal-797a79255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a
            href="https://twitter.com/ayushparwal2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
