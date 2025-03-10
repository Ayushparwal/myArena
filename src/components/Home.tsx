const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-[800] mb-6 relative glow-text">
        Ayush Parwal
      </h1>
      <h6 className="text-green-500 text-xl font-semibold">known as "ayushokaay"</h6>
      <p className="text-xl font-[800] text-white/80 mb-6">
        Generative AI & LLMs | Machine Learning | Data Science | Data Structure & Algos
      </p>

      {/* Buttons Section */}
      <div className="flex space-x-4 mt-4">
  <a href="https://www.kaggle.com/ayushparwal" target="_blank" className="bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-purple-700 transition">
    Kaggle
  </a>
  <a href="https://www.linkedin.com/in/ayush-parwal-797a79255/" target="_blank" className="bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition">
    LinkedIn
  </a>
  <a href="https://github.com/Ayushparwal" target="_blank" className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-900 transition">
    GitHub
  </a>
  <a href="https://twitter.com/ayushparwal2004" target="_blank" className="bg-teal-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-teal-600 transition">
    Twitter
  </a>
</div>

    </section>
  );
};

export default Home;
