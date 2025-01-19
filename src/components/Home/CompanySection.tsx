import "./CompanySection.css";
import { DetailsProps } from "../..";

function CompanySection({studentDetails} : {studentDetails : DetailsProps[]}) { 
  const placed = studentDetails.filter((studentdetail) => studentdetail.status === 'Placed');

  return (
    <div className="companyDesc-container">
      <div className="company-slogan">
        <h1>
          Empower your future with cutting-edge skills New, Embrace innovation,
          master technology, & shape the digital world Your journey to success
          starts here.
        </h1>
      </div>

      <div className="student-data">
        <div className="about-course">
          <p>
            Join our course with a proven track record of success, where
            learning isn't just about gaining skills; it's about growing them.
            Join us, learn with confidence, and watch your skills soar.
          </p>
        </div>

        <div className="student-info">
          <div className="total-student-box">
            <h2 className="total-student" >Total Students</h2>
            <h2 className="total-student-count">{studentDetails.length}</h2>
          </div>

          <div className="placed-student-box">
            <h2 className="placed-student">Placed Students</h2>
            <h2 className="placed-student-count">{placed.length}</h2>
          </div>

          <div className="unplaced-student-box">
            <h2 className="unplaced-student">Unplaced Students</h2>
            <h2 className="unplaced-student-count"> {studentDetails.length - placed.length} </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySection;