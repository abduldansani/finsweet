const Feature = ({ i, feature }) => {
  return (
    <div
      className={`py-10 md:py-16 ${
        i === 1 ? "bg-grey" : i === 3 ? "bg-yellow bg-opacity-10" : "bg-white"
      }`}
    >
      <div
        className={`container flex flex-col-reverse items-center gap-10 lg:gap-20 ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="space-y-4">
          <div className="text-lg font-medium text-opacity-[87%]">
            {feature.summary}
          </div>
          <h3>{feature.title}</h3>
          <p className="text-opacity-60">{feature.description}</p>
        </div>
        <img src={feature.img} alt="-" className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export default Feature;
