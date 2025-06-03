type WorkCardProps = {
  title: string;
  organization: string;
  period: string;
  location: string;
  descriptions: string[];
};

const WorkCard = ({
  title,
  organization,
  period,
  location,
  descriptions,
}: WorkCardProps) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-md w-full transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-0 mb-3">
        {/* Title & Organization */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{organization}</p>
        </div>

        {/* Period & Location */}
        <div className="text-sm text-gray-400 sm:text-right">
          <p>{period}</p>
          <p className="truncate max-w-[150px]">{location}</p>
        </div>
      </div>

      {/* Descriptions */}
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-200">
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
