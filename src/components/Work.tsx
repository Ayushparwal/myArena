import work from "../constants/work";
import WorkCard from "./workCard";

const Work = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center tracking-wide">
          Work Experience
        </h2>

        <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in">
          {work.map((item, index) => (
            <WorkCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              location={item.location}
              descriptions={item.descriptions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
