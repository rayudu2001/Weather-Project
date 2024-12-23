import PollutionInfo from "../Components/PolutionInfo";
import { data } from "../data";
const Home = () => {
  return (
    <div className="mainBody">
      <PollutionInfo data={data}></PollutionInfo>
    </div>
  );
};

export default Home;
