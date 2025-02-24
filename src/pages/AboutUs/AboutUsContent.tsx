import { useState } from "react";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon.tsx";
import { membersData } from "./member-info.tsx";

type Member = [
  string,
  string,
  string,
  string,
  (string | null | undefined)?,
  (string | null | undefined)?
];

interface MemberCardProps {
  member: Member;
  isOpen: boolean;
  onToggle: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, isOpen, onToggle }) => {

  const linkedInURL = member[4] || "https://linkedin.com";
  const emailAddress = member[5] || "https://gmail.com";

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Container for image and ellipsis button */}
      <div className="relative">
        <img
          className="h-80 w-64 object-cover rounded-standard"
          src={member[3]}
          alt={member[0]}
        />
        {/* Ellipsis Button */}
        <button
          onClick={onToggle}
          className="absolute bottom-2 right-2 z-20 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>

        {/* Pop-up menu */}
        {isOpen && (
          <div className="absolute bottom-10 right-2 bg-white rounded shadow-md p-2 flex flex-col space-y-1 z-10">
            <a
              href={linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 hover:bg-gray-200 rounded"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="px-2 py-1 hover:bg-gray-200 rounded"
            >
              Email
            </a>
          </div>
        )}
      </div>
      {/* Member Info */}
      <p className="text-center mt-2">
        <span className="font-bold">{member[0]}</span> <br />
        {member[1]}
      </p>
    </div>
  );
};

export default function AboutUsContent() {
  // State to track which member's popup is open.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const imagePreloader = useImagePreloader(
    membersData.map((member) => member[3])
  );

  return (
    <>
      {imagePreloader?.imagesPreloaded ? (
        membersData.map((member, index) => (
          <MemberCard
            key={index}
            member={member as Member}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
