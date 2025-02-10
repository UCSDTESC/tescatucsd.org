// import "./about-us.css";
import { membersData } from "./member-info.tsx";
import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
import { Key } from "react";
const AboutUs = () => {
  //[name, role/committee, major, image]
  return (
    <>
      <img
        className="w-full h-[50vh] object-cover"
        src={eventsPageImage}
        alt=""
      ></img>
      <Divider>
        The Triton Engineering Student Council (TESC), empowers UC San Diego's
        <br /> engineering students by connecting them to impactful communities,
        <br /> projects, and career-building opportunities
      </Divider>

      <div className="grid grid-cols-4 mt-4 gap-15 mx-auto w-[70%]">
        {membersData.map((member: string[], index: Key | null | undefined) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center mb-3"
          >
            <img
              className="h-full w-full object-cover rounded-standard"
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
    </>
  );
};

export default AboutUs;
