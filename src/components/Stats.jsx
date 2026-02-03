const Stats = () => {
  const statData = [
    { label: "Pets rehomed", value: "100+" },
    { label: "Partner Shelters", value: "58" },
    { label: "Raised Medical Bills", value: "200k+" },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-dark text-white flex justify-around items-center py-4 px-4 shadow-lg relative -top-14 z-45 rounded-2xl w-5/6">
      {statData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col flex-1"
        >
          <span className="text-xl font-medium text-center">{item.value}</span>
          <span className="text-[10px] md:text-xs text-center text-gray-400 ">
            {item.label}
          </span>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Stats;
