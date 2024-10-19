import "./Sponsor.css";
// import CoffeeMug from "../../assets/CoffeeMug.svg";
import L3Harris from "../../logos/L3Harris_Logo.png";
import Dynovas from "../../logos/Dynovas Matrix Logo (Final).jpg";
import LLNL from "../../logos/LLNLlogoBLACK.jpg";
import Viasat from "../../logos/Viasat_2018_Gradient_Web (1).jpg";
import LANL from "../../logos/LANL_Logo_Temp.png";
// import NTAG_SW from "../../logos/NTAG_SW_Logo.png";

function Sponsor() {
  return (
    <div className="sponsor" id="sponsor">
      <div className="title">
        <p>Sponsors</p>
      </div>
      <div className="content">
        <p>Gold</p>
        <div className="gold">
          {/* <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Coming Soon
          </div> */}
          <img src={L3Harris} alt="l3harris" className="gold-logo"></img>
        </div>
        <p>Silver</p>
        <div className="silver">
          <img src={Dynovas} alt="dynovas" className="logo"></img>
          <img src={Viasat} alt="viasat" className="logo"></img>
          <img src={LLNL} alt="llnl" className="logo"></img>
          {/* <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Coming Soon
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Coming Soon
          </div> */}
          <img src={LANL} alt="llal" className="logo"></img>
          {/* <img src={NTAG_SW} alt="ntag_sw" className="circle"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
