type WorkCardProps = {
  title: string;
  organization: string;
  period: string;
  location: string;
  descriptions: string[];
};

const WorkCard = ({ title, organization, period, location, descriptions }: WorkCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md max-w-xl w-full">
      <div className="flex justify-between items-start mb-4 flex-wrap">
        {/* Left side: Title and Organization */}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-300">{organization}</p>
        </div>

        {/* Right side: Period and Location */}
        <div className="text-sm text-gray-400 text-right whitespace-nowrap mt-2 md:mt-0">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>

      {/* Descriptions below */}
      <div>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-gray-200 mb-2">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
