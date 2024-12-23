/* eslint-disable react/prop-types */
const PollutionFact = ({ question, answer }) => {
  return (
    <div className="pollution-fact">
      <h2>{question}</h2>
      <div>
        {Array.isArray(answer) ? (
          <ul>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
};

export default PollutionFact;
