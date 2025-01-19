import "./Home.css";
import PlacementColumn from './PlacementSection';
import AboutCompany from './About';
import CompanySection from './CompanySection';
import { DetailsProps } from "../..";

function Home({studentDetails} : {studentDetails :  DetailsProps[]}) {
  return (
    <div>
      <div className='home'>
      <h1 className='Home-heading'>Learn from the best, be<br></br> your best..</h1>
      <p className='Home-description'>Give yourself an upgrade with our inspiring online courses<br></br> and join a global community of learners</p>
      <button>Get Started</button>
    </div>
    <PlacementColumn />
    <AboutCompany />
    <CompanySection studentDetails = {studentDetails}/> 
    </div>
  )
}

export default Home