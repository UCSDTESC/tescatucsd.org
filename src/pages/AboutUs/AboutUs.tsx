import "./about-us.css";
import data from "./member-info.json";
import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
const AboutUs = () => {
  const members = data.members;
  //[name, role/committee, major, image]
  return (
    <>
      <img
        className="header-image object-fit-cover"
        src={eventsPageImage}
        alt=""
      ></img>
      <Divider>
        The Triton Engineering Student Council (TESC), empowers UC San Diego's
        <br /> engineering students by connecting them to impactful communities,
        <br /> projects, and career-building opportunities
      </Divider>

      <div className="container mt-4">
        <div className="row mt-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3"
            >
              <img
                className="member-image object-fit-cover rounded"
                src={member[3]}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              ></img>
              <p className="text-center">
                <span className="text-bold">{member[0]}</span> <br />
                {member[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
