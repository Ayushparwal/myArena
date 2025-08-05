import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: '🧠 AI / ML / NLP / LLMs',
      skills: [
        'Python', 'PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face',
        'OpenAI APIs', 'Anthropic Claude', 'Groq', 'LangChain', 'LLMs', 'NLP',
        'AutoMLs', 'RAG', 'VLMs', 'Vector Databases', 'ChromaDB', 'Pinecone',
        'AutoGen', 'CrewAI', 'PromptLayer', 'Prompt Injection Defense', 'Toolformer', 'Function Calling'
      ]
    },
    {
      title: '🌐 Web Technologies',
      skills: [
        'TypeScript', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion',
        'HTML5', 'CSS3', 'REST APIs', 'WebSockets'
      ]
    },
    {
      title: '⚙️ Backend & Deployment',
      skills: [
        'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Render',
        'Docker', 'Firebase', 'Netlify', 'Vercel'
      ]
    },
    {
      title: '🔬 Research & Experimentation',
      skills: [
        'Weights & Biases', 'Colab', 'Kaggle', 'arXiv', 'Papers with Code', 'Open Source'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Skills & Technologies</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Technologies and tools I’ve worked with across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
