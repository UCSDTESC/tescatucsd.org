import { accomplishmentsByClub, DataBox } from "./databox";
import { useState } from "react";
const clubList = [
  { id: "ACM", name: "ACM" },
  { id: "AIAA", name: "AIAA" },
];
export default function Accomplishments() {
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  return (
    <div className="flex flex-row">
      <DataBox selectedClubId={selectedClubId} clubData={accomplishmentsByClub} />
    </div>
  );
}

  

