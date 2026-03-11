import React from "react";

export interface SidebarItem {
  id: string;
  name: string;
}

interface SidebarProps {
  clubs: SidebarItem[];
  selectedClubId: string;
  onSelectClub: (id: string) => void;
}

export default function Sidebar({
  clubs,
  selectedClubId,
  onSelectClub,
}: SidebarProps) {
  return (
    <aside className="w-[300px] min-h-[calc(100vh-80px)] bg-navy text-offWhite rounded-r-standard shadow-xl">
      <div className="px-7 py-7 border-b border-white/10">
        <h2 className="text-[clamp(26px,2vw,34px)] font-bold tracking-wide">
          Clubs
        </h2>
        <p className="mt-2 text-sm text-offWhite/80">
          Explore accomplishments by organization
        </p>
      </div>

      <div className="flex flex-col gap-3 p-5">
        {clubs.map((club) => {
          const isSelected = selectedClubId === club.id;

          return (
            <button
              key={club.id}
              onClick={() => onSelectClub(club.id)}
              className={`
                group w-full text-left px-6 py-4 rounded-xl
                transition-all duration-200 ease-out transform
                ${
                  isSelected
                    ? "bg-white text-navy font-bold scale-[1.04] shadow-md border-l-4 border-lightBlue"
                    : "bg-white/5 text-offWhite hover:bg-white/10 hover:scale-[1.15]"
                }
              `}
            >
              <span className="text-[clamp(18px,1.2vw,20px)] font-semibold tracking-wide">
                {club.name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}