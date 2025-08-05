import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Machine Learning Engineering Intern",
      company: "Stealth AI Startup",
      duration: "Jul 2025 – Present",
      location: "Remote",
      description:
        "Working on cutting-edge AI-powered platforms to optimize Security and LLM Hijacking",
      achievements: [
        "Building scalable machine learning pipelines and experimenting with multimodal learning approaches in stealth-mode product development.",
      ],
    },
    {
      title: "AI Intern",
      company: "PathBreakers",
      duration: "Jun 2025 – Jun 2025",
      location: "Remote",
      description:
        "Built and integrated AI-powered tools to generate personalized career reports and intelligent student profiling.",
      achievements: [
        "Engineered recommendation systems to deliver tailored guidance in ed-tech environments, enhancing user engagement and decision-making.",
      ],
    },
    {
      title: "Research Student/Fellow",
      company: "Indian Space Research Organisation (ISRO)",
      duration: "Jan 2025 – Feb 2025",
      location: "Remote",
      description:
        "Conducted in-depth research and simulations in Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).",
      achievements: [
        "Reviewed and interpreted research papers to enhance technical accuracy and support experimental validation.",
        "Submitted all finalized simulation data and analysis reports to the Financial Data & Planning Division for project budgeting and feasibility review.",
      ],
    },
    {
      title: "Top 25% Finisher (Rank 123/554)",
      company:
        "Detect AI vs. Human-Generated Images (2025 Women in AI Kaggle Challenge)",
      duration: "Jan 2025 - Mar 2025",
      location: "Remote",
      description:
        "Built models to distinguish AI-generated images from human-generated ones.",
      achievements: [
        "Worked on enhancing model accuracy under adversarial image perturbations.",
      ],
    },
    {
      title: "Top 20 Finisher (Rank 20/91)",
      company: "Innovative AI Challenge 2024 (Hackathon)",
      duration: "Dec 2024",
      location: "Remote",
      description:
        "Developed a high-accuracy XGBoost model (90.41%) for crop yield prediction.",
      achievements: [
        "Used 5-fold cross-validation and Optuna for hyperparameter tuning.",
        "Delivered a scalable, data-driven solution empowering farmers and policymakers.",
      ],
    },
    {
      title: "Rank 1 Winner",
      company:
        "Kaggle Competition - Classification with an Academic Success Dataset",
      duration: "Jun 2024",
      location: "Remote",
      description:
        "Achieved Rank 1 with Private LB score of 83.591% and Public LB score of 84.035%.",
      achievements: [
        "Trained models using XGBoost, CatBoost, and LightGBM, optimized via Optuna.",
        "Combined models using ensemble learning on a Kaggle T4 GPU instance.",
      ],
    },
  ];

  const certifications = [
    {
      title: "CUDA Programming Certified",
      issuer: "NVIDIA",
      year: "Apr 2025",
    },
    {
      title: "NVIDIA Certified - Anomaly Detection & BERT from Scratch",
      issuer: "NVIDIA",
      year: "Dec 2024",
    },
    {
      title: "Kaggle Rank 1 - Classification Competition",
      issuer: "Kaggle",
      year: "Jun 2024",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in AI/ML and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-blue-200"></div>
                  )}

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-gray-600">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <Award
                              size={16}
                              className="text-green-600 mt-0.5 flex-shrink-0"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-blue-600 font-medium">{cert.year}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8 mt-12">
              Education
            </h3>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <h4 className="font-bold text-gray-900 mb-2">
                B.Tech in Computer Science and Engineering (AI & ML)
              </h4>
              <p className="text-gray-600 mb-2">
                Indian Institute of Information Technology, Nagpur
              </p>
              <p className="text-blue-600 font-medium">Nov 2022 - June 2026</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <h4 className="font-bold text-gray-900 mb-2">
                PCM (Physics, Chemistry, Maths)
              </h4>
              <p className="text-gray-600 mb-2">Aakash Institute, Nanded</p>
              <p className="text-blue-600 font-medium">May 2020 - July 2022</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <h4 className="font-bold text-gray-900 mb-2">
                Schooling (Primary to Senior Secondary)
              </h4>
              <p className="text-gray-600 mb-2">
                Nagarjuna Public School, Nanded
              </p>
              <p className="text-blue-600 font-medium">2007 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
