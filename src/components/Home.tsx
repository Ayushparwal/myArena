import { Github, Linkedin, Twitter } from "lucide-react";
import { FaInstagram, FaMedium, FaKaggle } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const techStack = {
  "🧠 AI / ML / NLP / LLMs": [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "Hugging Face",
    "OpenAI APIs",
    "Anthropic Claude",
    "Groq",
    "LangChain",
    "LLMs",
    "NLP",
    "AutoMLs",
    "RAG",
    "VLMs",
    "Vector Databases",
    "ChromaDB",
    "Pinecone",
    "AutoGen",
    "CrewAI",
    "PromptLayer",
    "Prompt Injection Defense",
    "Toolformer",
    "Function Calling",
  ],
  "🌐 Web Technologies": [
    "TypeScript",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5",
    "CSS3",
    "REST APIs",
    "WebSockets",
  ],
  "⚙️ Backend & Deployment": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Render",
    "Docker",
    "Firebase",
    "Netlify",
    "Vercel",
  ],
  "🔬 Research & Experimentation": [
    "Weights & Biases",
    "Colab",
    "Kaggle",
    "arXiv",
    "Papers with Code",
    "Open Source",
  ],
};

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-white text-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-3xl w-full text-center py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 text-black-600">
          Ayush Parwal
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 italic mb-3">
          aka <span className="text-green-500">ayushokaay</span>
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold mb-6 text-cyan-600">
          Building Smarter Machines, Shaping the Future with AI, Mastering
          Language with Code!
        </h2>

        <div className="bg-zinc-100 border border-zinc-300 rounded-xl p-6 mb-8 text-left">
          <h3 className="text-xl font-semibold text-purple-600 mb-3 text-center">
            💻 What I Do
          </h3>
          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4 text-justify">
            Exploring AI safety, Natural Language Processing, and generative
            models while building sleek, responsive web apps that bridge
            research with real-world impact.
          </p>

          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h4 className="text-sm sm:text-base text-purple-500 font-semibold mb-2 text-center">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-200 text-xs sm:text-sm text-zinc-800 px-3 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-100 border border-zinc-300 rounded-xl p-6 text-left">
          <h3 className="text-xl font-semibold text-purple-600 mb-3 text-center">
            🌐 Connect with Me
          </h3>
          <div className="flex justify-center flex-wrap gap-5 text-xl text-zinc-700">
            <a
              href="https://github.com/Ayushparwal"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-gray-700 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-parwal-797a79255/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/ayushparwal2004"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-sky-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/Ayushparwal22"
              target="_blank"
              aria-label="LeetCode"
              className="hover:text-yellow-500 transition"
            >
              <SiLeetcode className="w-6 h-6" />
            </a>
            <a
              href="https://medium.com/@ayushokaay"
              target="_blank"
              aria-label="Medium"
              className="hover:text-gray-600 transition"
            >
              <FaMedium className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ayushokaay"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.kaggle.com/ayushparwal"
              target="_blank"
              aria-label="Kaggle"
              className="hover:text-blue-500 transition"
            >
              <FaKaggle className="w-6 h-6" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/ayushokaay/"
              target="_blank"
              aria-label="GeeksforGeeks"
              className="hover:text-green-600 transition"
            >
              <SiGeeksforgeeks className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
