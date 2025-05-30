import work from "../constants/work";
import WorkCard from "./workCard";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
          Work Experience
        </h2>
        <div className="flex flex-col gap-10 animate-fade-in">
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
