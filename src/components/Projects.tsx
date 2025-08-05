import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Speech Emotion Detection',
      description: 'Analyzes human speech to detect emotions such as happiness, sadness, anger, and neutrality using advanced NLP and audio features.',
      image: 'https://images.pexels.com/photos/7587442/pexels-photo-7587442.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Python', 'NLP', 'MFCC', 'Speech Recognition', 'Deep Learning', 'LSTM'],
      github: 'https://github.com/Ayushparwal/Speech-Emotion-Detection'
    },
    {
      id: 2,
      title: 'Smoke Prediction',
      description: 'Predicts smoke levels based on environmental data using ML models, focusing on air quality and health-related metrics.',
      image: 'https://images.pexels.com/photos/1029289/pexels-photo-1029289.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Machine Learning', 'XGBoost', 'Streamlit', 'Air Quality', 'Environmental Monitoring'],
      github: 'https://github.com/Ayushparwal/Smoker-Prediction-app'
    },
    {
      id: 3,
      title: 'Plant Disease Classification',
      description: 'Classifies plant diseases using pre-trained deep learning models from leaf images for precision agriculture.',
      image: 'https://images.pexels.com/photos/532177/pexels-photo-532177.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Deep Learning', 'Pre-trained Models', 'LangChain', 'Streamlit', 'Python', 'Agriculture AI'],
      github: 'https://github.com/Ayushparwal/Plant-disease-Classification-using-pretrained-models'
    },
    

    {
      id: 4,
      title: 'String Matching',
      description: 'Performs text similarity analysis using Distance Metrics and Cosine Similarity for NLP tasks.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Cosine Similarity', 'NLP', 'Streamlit', 'Python'],
      github: 'https://github.com/Ayushparwal/String-Matching'
    },
    {
      id: 5,
      title: 'Learn Ayurveda',
      description: 'An AI chatbot using Groq API and Meta’s LLaMA model to deliver traditional Ayurvedic insights through natural conversations.',
      image: 'https://images.pexels.com/photos/4498302/pexels-photo-4498302.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Groq', 'Vite', 'Meta LLaMA', 'TypeScript', 'Ayurveda'],
      github: 'https://github.com/Ayushparwal/LearnAyurveda'
    },
    {
      id: 6,
      title: 'Meal Mentor',
      description: 'An AI food agent that assists with meal planning, grocery tracking, food ordering, and nutrition analysis.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Streamlit', 'Uvicorn', 'Python', 'FastAPI', 'Agentic AI', 'LLaMA 2', 'Falcon'],
      github: 'https://github.com/Ayushparwal/MealMentor-'
    },
    {
      id: 7,
      title: 'Deep Research Agent',
      description: 'An autonomous agent that researches and summarizes technical topics using LLMs and Crew AI pipelines.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['LangChain', 'Groq', 'LLama', 'LLMs', 'Crew AI'],
      github: 'https://github.com/Ayushparwal/Deep-Research-Agent'
    },
    {
      id: 8,
      title: 'Barcode Extension',
      description: 'Chrome extension that scans and decodes barcodes from websites using JavaScript and QuaggaJS.',
      image: 'https://images.pexels.com/photos/8454510/pexels-photo-8454510.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web-dev',
      tags: ['JavaScript', 'QuaggaJS', 'Chrome Extension', 'CSS'],
      github: 'https://github.com/Ayushparwal/Barcode-extension'
    },
    {
      id: 9,
      title: 'tantheta - Math Python Package',
      description: 'A Python package for solving algebra, calculus, trigonometry, and stats using SymPy. Ideal for beginners.',
      image: 'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Python', 'SymPy', 'Math Library', 'CLI'],
      github: 'https://github.com/Ayushparwal/tantheta'
    },
    {
      id: 10,
      title: 'Cavora (Building)',
      description: 'Cavora is an AI-powered platform for automating workflows and reasoning through intelligent agents.',
      image: 'https://images.pexels.com/photos/4065626/pexels-photo-4065626.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai-ml',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'AI Agents', 'LLMs'],
      github: 'https://github.com/Ayushparwal/cavora'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
