import Card from './AboutCard';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-green-400 text-center tracking-tight">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
        {/* Left Side: Profile Image */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-green-400 shadow-lg shrink-0">
          <img
            src="/assets/ayushprof.jpg"
            alt="Ayush Parwal"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Right Side: Text + Card */}
        <div className="w-full md:w-2/3">
          <Card
            title="My Journey into AI & Code"
            content={
              <ul className="list-disc text-sm sm:text-base text-zinc-300 pl-5 space-y-2">
                <li>
                  Deeply curious problem solver — started with math puzzles, now building intelligent systems.
                </li>
                <li>
                  Ranked in the top 3% of JEE Mains; pursuing B.Tech in AI & ML at IIIT Nagpur.
                </li>
                <li>
                  Passionate about AI, LLMs, and building real-world automation with NLP.
                </li>
                <li>
                  Exploring prompt engineering, generative AI, and agentic AI systems.
                </li>
                <li>
                  Currently researching jailbreaks and prompt injection attacks in LLMs.
                </li>
                <li>
                  Fast learner who loves building MVPs and iterating through feedback.
                </li>
                <li>
                  Obsessed with chess, strategy, and understanding how systems behave.
                </li>
                <li>
                  Regularly tunes into Bruno Mars and lo-fi beats while coding.
                </li>
                <li>
                  Loves learning about the stock market, investing, and financial data.
                </li>
                <li>
                  Always experimenting, open-sourcing, and pushing boundaries in AI.
                </li>
              </ul>
            }
            className="w-full h-auto mx-auto shadow-xl border border-zinc-700 bg-zinc-900/70 backdrop-blur-lg"
          />
        </div>
      </div>

      {/* GitHub Profile Link */}
      <p className="mt-12 text-center">
        <a
          href="https://ayushparwal.github.io/boom/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-base sm:text-lg font-semibold hover:text-green-400 transition-all duration-300 group"
        >
          <span className="underline decoration-dotted underline-offset-4 group-hover:decoration-solid">
            More About Me?
          </span>
          <svg
            className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 3.293a1 1 0 011.414 0l4.999 4.999a1 1 0 010 1.414l-4.999 5a1 1 0 01-1.414-1.415L15.586 10H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </p>
    </section>
  );
};

export default About;
