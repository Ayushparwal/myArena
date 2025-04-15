import { Github, Linkedin, Twitter } from "lucide-react";
import {
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiOpencv,
  SiPytorch,
  SiScikitlearn,
  SiFastapi,
  SiHuggingface,
  SiJupyter,
  // SiMatplotlib,
  // SiSeaborn,
  SiPlotly,
  SiMlflow,
  // SiXgboost,
  // SiLightgbm,
} from "react-icons/si";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-6"
    >
      <div className="relative z-10">
      <h1
  className="font-extrabold mb-6 glow-text tracking-wide"
  style={{ fontSize: "3rem" }}
>
  Ayush Parwal
</h1>
<h6 className="text-green-500 text-2xl font-semibold mb-4">
  Known as "ayushokaay"
</h6>


        <p className="text-lg font-medium text-white max-w-2xl leading-relaxed">
          I am a ML developer passionate about AI agents and Natural Language
          Processing. I have a strong interest in Linux and Data Structures
          and Algorithms. Currently, I work with LLM APIs to build intelligent
          and innovative applications. Always exploring new technologies to push
          the boundaries of AI.
        </p>

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

      {/* AI/ML Tech Stack Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>

        <div className="flex flex-col items-center space-y-4 text-center">
          <div>
            <h3 className="text-lg font-semibold text-purple-400"></h3>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <SiTensorflow className="text-orange-500 w-10 h-10" />
              <SiKeras className="text-red-500 w-10 h-10" />
              <SiNumpy className="text-blue-500 w-10 h-10" />
              <SiPandas className="text-purple-500 w-10 h-10" />
              <SiScipy className="text-cyan-400 w-10 h-10" />
              <SiOpencv className="text-green-500 w-10 h-10" />
              <SiPytorch className="text-red-600 w-10 h-10" />
              <SiScikitlearn className="text-orange-400 w-10 h-10" />
              <SiFastapi className="text-green-400 w-10 h-10" />
              <SiHuggingface className="text-yellow-400 w-10 h-10" />
              <SiJupyter className="text-orange-300 w-10 h-10" />
              <SiPlotly className="text-blue-400 w-10 h-10" />
              <SiMlflow className="text-blue-500 w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
