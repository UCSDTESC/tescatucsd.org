export const ACCOMPLISHMENT_CLUBS: { id: string; name: string }[] = [
  { id: "TESC", name: "TESC" },
  { id: "AIChE", name: "AIChE" },
  { id: "DBF", name: "DBF" },
  { id: "HPS", name: "HPS" },
  { id: "TritonAI", name: "Triton AI" },
  { id: "TritonBAJA", name: "Triton Baja" },
  { id: "TritonDroids", name: "Triton Droids" },
  { id: "TritonRacing", name: "Triton Racing" },
  { id: "TritonRobotics", name: "Triton Robotics" },
  { id: "TritonSolarCar", name: "Triton Solar Car" },
  { id: "YonderDynamics", name: "Yonder Dynamics" },
  { id: "DS3", name: "DS3" },
  { id: "WIC", name: "WIC" },
  { id: "NSBE", name: "NSBE" },
  { id: "SASE", name: "SASE" },
  { id: "IEEE", name: "IEEE Supercomputing" },
];

export type ClubAccomplishment = {
  id: string;
  name: string;
  logoSrc: string;
  overview: string[];
  highlights2025: string[];
};

export const accomplishmentsByClub: Record<string, ClubAccomplishment> = {
  TESC: {
    id: "TESC",
    name: "Triton Engineering Student Council (TESC)",
    logoSrc: "AllPages/TESC-logo-white.png",
    overview: [
      "The Triton Engineering Student Council (TESC) supports and represents engineering student organizations within the Jacobs School of Engineering at UC San Diego.",
      "TESC helps coordinate large-scale events, promotes collaboration between organizations, and connects students with industry, faculty, and research opportunities.",
    ],
    highlights2025: [
      "Hosted Engineers on the Green, featuring 40+ engineering and STEM organizations, giving students chances to explore technical teams and hands-on engineering projects.",
      "Organized the DECaF Career Fair, serving 1,000+ students across engineering and related disciplines.",
      "Facilitated networking between students, employers, and faculty across the Jacobs School of Engineering.",
      "Supported student organizations in expanding recruitment, collaboration, and professional development programming.",
    ],
  },
  AIChE: {
    id: "AIChE",
    name: "American Institute of Chemical Engineers (AIChE)",
    logoSrc: "council-member-logos/AIChE.jpeg",
    overview: [
      "AIChE at UC San Diego supports chemical engineering students through technical projects, industry networking, environmental initiatives, and national competitions.",
    ],
    highlights2025: [
      "140+ students participated in AIChE-led projects and leadership initiatives.",
      "Launched 6 student-led environmental and sustainability projects, applying chemical engineering concepts to real-world problems.",
      "Established 3 new national competition teams, expanding opportunities to participate in technical competitions.",
      "Hosted the largest Chemical & Nano Career Fair on campus, connecting students with companies and research organizations in chemical engineering, pharmaceuticals, and advanced materials.",
    ],
  },
  DBF: {
    id: "DBF",
    name: "Design / Build / Fly (DBF)",
    logoSrc: "council-member-logos/DBF.png",
    overview: [
      "Design/Build/Fly is an aerospace engineering competition team that designs, manufactures, and tests remote-controlled aircraft for the international AIAA Design/Build/Fly Competition.",
      "Students gain hands-on experience in aerodynamics, structural design, propulsion systems, and flight testing.",
    ],
    highlights2025: [
      "Achieved 1st Place Design Proposal Score, tied for the highest score among 175 teams worldwide.",
      "Recorded the highest design proposal score in the history of the UC San Diego DBF team.",
      "Engaged 50–60 active members in aircraft design, testing, and manufacturing.",
      "Developed an in-house multidisciplinary design optimization (MDO) tool to improve aircraft performance and design efficiency.",
      "Completed multiple prototype test flights to validate aerodynamic and structural design concepts.",
    ],
  },
  HPS: {
    id: "HPS",
    name: "Human Powered Submarine (HPS)",
    logoSrc: "council-member-logos/HPS.jpeg",
    overview: [
      "The Human Powered Submarine team designs and builds a fully functional submarine powered entirely by human propulsion, competing in the International Submarine Races.",
    ],
    highlights2025: [
      "Awarded Best Design Outline among 15+ international competitors.",
      "Engaged 60+ students across mechanical, electrical, and systems engineering disciplines.",
      "Completed design and manufacturing of new submarine components to improve hydrodynamics and efficiency.",
      "Provided hands-on experience in underwater vehicle design, CAD modeling, manufacturing, and systems integration.",
    ],
  },
  TritonAI: {
    id: "TritonAI",
    name: "Triton AI",
    logoSrc: "council-member-logos/Triton-AI.jpeg",
    overview: [
      "Triton AI focuses on developing autonomous systems and artificial intelligence technologies while competing in international robotics and autonomous vehicle competitions.",
    ],
    highlights2025: [
      "Participates in the Indy Autonomous Challenge, where autonomous race cars reach speeds of 166 mph — one of only 10 teams worldwide in the event.",
      "Conducted ~500 hours of STEM outreach, mentoring middle school, high school, and community college students.",
      "Developed the AI-Powered Autonomous Garden Ecosystem (AI-AGE), integrating machine learning and automation to optimize plant growth environments.",
      "Collaborated with Antelope Valley High School on an Automated Garden System, introducing younger students to AI and robotics.",
    ],
  },
  TritonBAJA: {
    id: "TritonBAJA",
    name: "Triton Baja",
    logoSrc: "council-member-logos/Triton-BAJA.png",
    overview: [
      "Triton Baja designs and builds off-road vehicles for the SAE Baja collegiate engineering competition, where teams compete in endurance, maneuverability, and design challenges.",
    ],
    highlights2025: [
      "Completed development of the team’s first full vehicle prototype.",
      "Dedicated 100+ weekends to engineering design, fabrication, and testing.",
      "Provided hands-on experience in suspension design, drivetrain systems, chassis fabrication, and vehicle dynamics.",
      "Enabled students to work in a fast-paced engineering environment similar to real-world automotive development.",
    ],
  },
  TritonDroids: {
    id: "TritonDroids",
    name: "Triton Droids",
    logoSrc: "council-member-logos/Triton-Droids.jpeg",
    overview: [
      "Triton Droids is a student-led robotics organization focused on developing full humanoid robots, combining mechanical engineering, electrical systems, and AI-driven control.",
    ],
    highlights2025: [
      "Designed a full humanoid robot architecture in one academic quarter.",
      "Built and prototyped the lower body and initial arm systems over two quarters.",
      "Developed early locomotion capabilities for the humanoid platform.",
      "Hosted Robothon, a robotics hackathon that attracted 200+ participants.",
      "Grew to 73 active members across mechanical, electrical, software, and business teams.",
      "Raised $5,000+ in funding to support early robot development.",
    ],
  },
  TritonRacing: {
    id: "TritonRacing",
    name: "Triton Racing (Formula Electric)",
    logoSrc: "council-member-logos/Triton-Racing.png",
    overview: [
      "Triton Racing designs and manufactures electric race cars for collegiate Formula Electric competitions, applying advanced automotive engineering principles.",
    ],
    highlights2025: [
      "Began construction of the team’s second electric race car.",
      "Expanded to 75 active team members.",
      "Completed vehicle frame and entered full manufacturing phase.",
      "Developed and calibrated high-voltage power systems and low-voltage control PCBs.",
      "Machined suspension, drivetrain, and chassis components while beginning aerodynamic bodywork development.",
    ],
  },
  TritonRobotics: {
    id: "TritonRobotics",
    name: "Triton Robotics",
    logoSrc: "council-member-logos/TR.png",
    overview: [
      "Triton Robotics develops autonomous robotic systems and organizes robotics competitions that bring together students from multiple universities.",
    ],
    highlights2025: [
      "Hosted a robotics competition with 29 collegiate teams participating.",
      "Engaged 50+ active members in hardware and software robotics development.",
      "Impacted 1,500+ members of the San Diego community through outreach and robotics demonstrations.",
      "Provided hands-on experience in robotics design, programming, and system integration.",
    ],
  },
  TritonSolarCar: {
    id: "TritonSolarCar",
    name: "Triton Solar Car",
    logoSrc: "council-member-logos/TSC.png",
    overview: [
      "Triton Solar Car designs and builds solar-powered vehicles to promote innovation in renewable energy transportation.",
    ],
    highlights2025: [
      "Achieved 75% completion of the mechanical phase for the team’s newest solar vehicle.",
      "Secured five new corporate sponsorships supporting vehicle development.",
      "Engaged 50 active members in renewable energy engineering projects.",
      "Advanced manufacturing of solar vehicle components and structural systems.",
    ],
  },
  YonderDynamics: {
    id: "YonderDynamics",
    name: "Yonder Dynamics",
    logoSrc: "council-member-logos/YNDR.jpeg",
    overview: [
      "Yonder Dynamics designs and builds planetary exploration rovers for international robotics competitions.",
    ],
    highlights2025: [
      "Ranked 19th out of 114 teams internationally in rover competitions.",
      "Engaged 75+ active students in robotics, mechanical systems, and autonomous navigation development.",
      "Helped members secure research positions and engineering internships through hands-on project experience.",
      "Continued development of rover systems for upcoming space robotics competitions.",
    ],
  },
  DS3: {
    id: "DS3",
    name: "Data Science Student Society (DS3)",
    logoSrc: "council-member-logos/DS3.png",
    overview: [
      "DS3 connects students interested in data science with industry, research opportunities, and real-world projects.",
    ],
    highlights2025: [
      "Hosted Student Career Day with 420+ attendees.",
      "Received 400+ applications for quarterly data science projects.",
      "Maintained 300+ active members across the organization.",
      "Organized technical workshops, industry panels, and weekly coding practice sessions.",
      "Hosted social and networking events to strengthen the data science community at UC San Diego.",
    ],
  },
  WIC: {
    id: "WIC",
    name: "Undergraduate Women in Computing",
    logoSrc: "council-member-logos/WIC.jpeg",
    overview: [
      "Undergraduate Women in Computing supports women and underrepresented genders in computing through mentorship, career development, and industry engagement.",
    ],
    highlights2025: [
      "Awarded 8 scholarships to attend the Grace Hopper Celebration, the world’s largest conference for women in computing.",
      "Maintained 60 active members participating in projects and professional development events.",
      "Hosted 7 company-sponsored events featuring engineers and recruiters.",
      "Organized mentorship programs including 80 EDGE mentors and 70+ participants.",
    ],
  },
  NSBE: {
    id: "NSBE",
    name: "National Society of Black Engineers (NSBE)",
    logoSrc: "council-member-logos/NSBE.png",
    overview: [
      "NSBE works to increase the number of culturally responsible Black engineers who excel academically and professionally.",
    ],
    highlights2025: [
      "Maintained 30 active members participating in community and professional development initiatives.",
      "Hosted 6 career workshops focused on engineering career preparation.",
      "Organized 5 study jam sessions supporting academic success.",
      "Built community spaces for Black engineering students at UC San Diego.",
    ],
  },
  SASE: {
    id: "SASE",
    name: "Society of Asian Scientists and Engineers (SASE)",
    logoSrc: "council-member-logos/SASE.png",
    overview: [
      "SASE connects Asian scientists and engineers with industry professionals while promoting leadership and career development.",
    ],
    highlights2025: [
      "Organized Dining with Professionals, connecting 65 students with 20 industry professionals.",
      "Hosted 5 networking and career events, reaching 160 student engagements.",
      "Featured industry representation from companies including Google, Apple, Qualcomm, IBM, Pfizer, Illumina, and Collins Aerospace.",
    ],
  },
  IEEE: {
    id: "IEEE",
    name: "IEEE Supercomputing Club",
    logoSrc: "council-member-logos/IEEE.png",
    overview: [
      "The IEEE Supercomputing Club designs and competes with high-performance computing clusters in international competitions.",
      "Students gain hands-on experience in GPU computing, parallel processing, system architecture, and large-scale scientific computing.",
    ],
    highlights2025: [
      "Ranked 1st in the United States for five consecutive years in the ISC Student Cluster Competition.",
      "Placed 3rd worldwide in the same competition.",
      "Represented UC San Diego at the International Supercomputing Conference for six consecutive years.",
      "Engaged 20+ undergraduate students in high-performance computing system design and optimization.",
    ],
  },
};

type DataBoxProps = {
  selectedClubId: string | null;
  clubData: Record<string, ClubAccomplishment>;
};

function Subsection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-black">{title}</h3>
      <ul className="list-inside list-disc space-y-1 pl-0.5 text-[#444]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function DataBox({ selectedClubId, clubData }: DataBoxProps) {
  if (!selectedClubId || !clubData[selectedClubId]) {
    return (
      <div className="overflow-hidden rounded-[2.5rem] border border-[#e5e5e5] bg-white p-6 text-[#444] shadow-sm">
        <p>Select a club from the sidebar to see their accomplishments.</p>
      </div>
    );
  }
  const clubAccomplishments = clubData[selectedClubId];
  if (!clubAccomplishments) {
    return (
      <div className="overflow-hidden rounded-[2.5rem] border border-[#e5e5e5] bg-white p-6 text-[#444] shadow-sm">
        <p>No club data found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-[#e5e5e5] bg-white p-6 text-[#444] shadow-sm">
      <div className="mb-2 flex flex-row items-start justify-between gap-4">
        <div
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl ${
            clubAccomplishments.id === "TESC" ? "bg-[#333] p-2" : ""
          }`}
        >
          <img
            src={
              clubAccomplishments.logoSrc.startsWith("/")
                ? clubAccomplishments.logoSrc
                : `/${clubAccomplishments.logoSrc}`
            }
            alt={`${clubAccomplishments.id} logo`}
            className="max-h-full max-w-full object-contain object-center"
          />
        </div>
        <h2 className="max-w-[min(100%,20rem)] text-left text-lg font-bold leading-snug text-black">
          {clubAccomplishments.name}
        </h2>
      </div>

      <div className="mt-6 space-y-6">
        <Subsection title="Overview" items={clubAccomplishments.overview} />
        <Subsection title="2025 highlights" items={clubAccomplishments.highlights2025} />
      </div>
    </div>
  );
}
