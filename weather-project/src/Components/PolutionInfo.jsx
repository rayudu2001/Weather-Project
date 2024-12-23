import data from "../data";
import AirQuality from "./AirQuality";
import PollutionFact from "./PollutionFact";

const PollutionInfo = () => {
  return (
    <div className="pollution-info-container">
      {data.pollution.map((item, index) => (
        <PollutionFact
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
      <AirQuality></AirQuality>
    </div>
  );
};

export default PollutionInfo;
