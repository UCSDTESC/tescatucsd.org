import "./about-us.css";
import data from "./member-info.json";
const AboutUs = () => {
  const members = data.members;
  //[name, role/committee, major, image]
  return (
    <>
      <img className="header-image" src="events-page-image.png" alt=""></img>
      <div className="divider d-flex justify-content-center align-items-center text-light">
        <p className="text-center">
          The Triton Engineering Student Council (TESC), empowers UC San Diego's
          <br /> engineering students by connecting them to impactful
          communities,
          <br /> projects, and career-building opportunities
        </p>
      </div>
      <div className="container mt-4">
        <div className="row mt-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3"
            >
              <img
                className="member-image img-fluid"
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
