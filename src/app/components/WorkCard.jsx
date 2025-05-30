const WorkCard = ({ title, company, description, date }) => {
    return (
      <div className="bg-[#181818] rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-purple-400 mb-2">{company} • {date}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    );
  };
  
  export default WorkCard;
  