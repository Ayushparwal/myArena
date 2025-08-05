import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deeply curious problem solver — building intelligent systems, exploring AI frontiers, and constantly experimenting.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Building the Future with AI & Code
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I’m a B.Tech student at IIIT Nagpur in Artificial Intelligence & Machine Learning, ranked in the top 3% of JEE Mains.
            My journey began with math puzzles and curiosity — now I’m building AI-powered systems and automation tools that make a real-world impact.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm especially passionate about natural language processing, large language models, prompt engineering, and agentic AI systems. 
            Currently researching jailbreaks and prompt injection attacks in LLMs, I thrive in the fast-moving world of AI where rapid prototyping, feedback, and iteration matter.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether it’s creating smart automation workflows or deploying intelligent apps using multimodal data, I enjoy building MVPs that solve real problems. 
            I’m also active in competitions and research, constantly learning and collaborating.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            When I’m not working on AI or full-stack dev, I’m probably playing chess, listening to Bruno Mars or lo-fi while coding, 
            or diving deep into financial data and market strategies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Open-sourcing, researching, or just tinkering — I’m always pushing boundaries in tech, one experiment at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
