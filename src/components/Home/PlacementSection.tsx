import './PlacementSection.css';

import airbnbLogo from '../../assets/airbnb.png';
import grabyoLogo from '../../assets/grabyo.png';
import lifeGroupsLogo from '../../assets/lifegroups.png';
import myobLogo from '../../assets/myob.png';
import tailusLogo from '../../assets/tailus.png';
import microsoftLogo from '../../assets/microsoft.png';
import cotyLogo from '../../assets/coty.png';
import lillyLogo from '../../assets/lilly.png';

function PlacementSection() {
  return (
    <div className="placement-container">
      <div style={{width: '100%'}}>
      <h1 className="placement-heading">Our Placement Partners</h1>
      <div style={{width: "100%",display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
      <div className="placement-logos">
        <img src={airbnbLogo} alt="Airbnb" />
        <img src={grabyoLogo} alt="Grabyo" />
        <img src={lifeGroupsLogo} alt="Life Group" />
        <img src={myobLogo} alt="MYOB" />
        <img src={tailusLogo} alt="Tailus" />
        <img src={microsoftLogo} alt="Microsoft" />
        <img src={cotyLogo} alt="Coty" />
        <img src={lillyLogo} alt="Lilly" />
      </div>
      </div>
      <button className="placement-button">and, more<br></br> companies</button>
      </div>
    </div>
  );
}

export default PlacementSection;
