// import AirTable from "./AirTable";
import "../css/CouncilMembers.css";
import useWindowDimensions from "../../../Hooks/UseWindowDimensions";
const AIRTABLEURL =
  "https://airtable.com/embed/appA3VErzwydr9T1M/shrxLuF6J25c0Z5WJ?backgroundColor=orange&viewControls=on?backgroundColor=green";

const CouncilMembers = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="">
      <div className="button-container">
        <button>
          <a href="link" className="join-button-text">
            JOIN TESC AS AN ORGANIZATION
          </a>
        </button>
      </div>
      <div className="Airtable">
        <iframe
          src={AIRTABLEURL}
          width={width * 0.8}
          height={height}
          title="EventsAirtable"
        ></iframe>
      </div>
    </div>
  );
};

export default CouncilMembers;
