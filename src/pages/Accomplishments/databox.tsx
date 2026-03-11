// accomplishments-data.ts (or at top of a file that holds data)

export type ClubAccomplishment = {
    id: string;           
    name: string;         
    items: string[];      
  };
  
  
  export const accomplishmentsByClub: Record<string, ClubAccomplishment> = {
    ACM: {
      id: "ACM",
      name: "Association for Computing Machinery",
      items: ["Hosted Triton Hackathon", "Workshop on algorithms"],
    },
    AIAA: {
      id: "AIAA",
      name: "American Institute of Aeronautics and Astronautics",
      items: ["Rocket design competition", "Industry talk"],
    },

    
  };
  type DataBoxProps = {
    selectedClubId: string | null;
    clubData: Record<string, ClubAccomplishment>;
  };
  export function DataBox({selectedClubId, clubData}: DataBoxProps) {
    if(!selectedClubId || !clubData[selectedClubId]) {
        return (
            <div className="p-6 border rounded-xl bg-gray-50 text-gray-600">
            <p>Select a club from the sidebar to see their accomplishments.</p>
            </div>
        );
    }
    const clubAccomplishments = clubData[selectedClubId];
    if(!clubAccomplishments) {
        return(
            <div className="p-6 border rounded-xl bg-gray-50 text-gray-600">
            <p>No club data found.</p>
            </div>
        )
    }
    return (
        <div className="p-6 border rounded-xl bg-gray-50 text-gray-600">
            <h2 className="text-lg font-bold">{clubAccomplishments.name}</h2>
            <ul className="list-disc list-inside mt-2">
                {clubAccomplishments.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
  }
