// import AirTable from "./AirTable";
import "./CouncilMembers.css";
const AIRTABLEURL =
  "https://airtable.com/embed/appA3VErzwydr9T1M/shrxLuF6J25c0Z5WJ?backgroundColor=orange&viewControls=on?backgroundColor=green";
const CouncilMembers = () => {
  return (
    <div className="">
      <div className="button-container">
        <button>
          <a href="link" className="join-button-text">
            JOIN TESC AS AN ORGANIZATION
          </a>
        </button>
      </div>
      <iframe
        src={AIRTABLEURL}
        width={1000}
        height={1000}
        title="EventsAirtable"
      ></iframe>
    </div>
  );
};

export default CouncilMembers;
