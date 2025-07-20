import Card from './AboutCard';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-4xl w-full text-center py-12">
        <h2 className="text-4xl font-bold mb-10 text-green-400 tracking-tight">
          About Me
        </h2>

        <div className="flex justify-center">
          <Card
            title="My Journey into AI & Code"
            content="From solving math puzzles to writing elegant code, my journey has always been fueled by curiosity. Scoring among the top 3% in JEE Mains, I pursued a B.Tech in AI & ML at IIIT Nagpur. I’m passionate about building intelligent systems that solve real-world problems. Outside of code, I’m equally captivated by the stock market, strategy games like chess, and the rhythm of a good Bruno Mars track. I believe in learning fast, iterating faster, and staying deeply curious about the world."
            className="w-full h-auto mx-auto shadow-lg"
          />
        </div>

        <p className="text-lg sm:text-xl font-medium text-gray-300 mt-8">
          🌐 Curious to dive deeper into my work?
          <a
            href="https://ayushparwal.github.io/boom/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block text-[#00FF7F] hover:text-white hover:underline transition duration-300 animate-pulse"
          >
            Visit my interactive profile →
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
