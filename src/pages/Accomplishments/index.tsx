import { accomplishmentsByClub, DataBox } from "./databox";
import { useState } from "react";
import Sidebar from "./Sidebar";

const clubList = [
  { id: "ACM", name: "ACM" },
  { id: "AIAA", name: "AIAA" },
];

export default function Accomplishments() {
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  return (
    <div className="flex flex-row">
      <Sidebar
        clubs={clubList}
        selectedClubId={selectedClubId ?? ""}
        onSelectClub={setSelectedClubId}
      />

      <DataBox
        selectedClubId={selectedClubId}
        clubData={accomplishmentsByClub}
      />
    </div>
  );
}