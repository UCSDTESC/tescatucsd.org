import { LinkedinFilled, MailFilled } from "@ant-design/icons";
import React from "react";

interface Props {
  data: string[][];
  title: string;
}
export function Section({ data, title }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-[30px] text-[#11426B] font-medium">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-5">
        {data.map((member, index) => (
          <MemberCard key={index} member={member as Member} />
        ))}
      </div>
    </div>
  );
}

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
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  // If the linkedInURL or emailAddress is not provided, default to a placeholder
  const linkedInURL = member[4] || "https://linkedin.com";
  const emailAddress = member[5] || "https://mail.google.com";

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Container for image and ellipsis button */}
      <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-standard">
        <img
          className="h-56 w-full p-3 mx-auto object-cover rounded-standard"
          src={member[3]}
          alt={member[0]}
        />
        <p className="text-center">
          <span className="font-bold">{member[0]}</span> <br />
          {member[1]}
        </p>
        <div className="flex flex-row gap-3 justify-center my-3">
          <MailFilled
            width={"642px"}
            style={{ fontSize: "22px", color: "#DC3545" }}
          >
            <a href={linkedInURL}></a>
          </MailFilled>

          <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }}>
            <a href={`mailto:${emailAddress}`}>Email</a>
          </LinkedinFilled>
        </div>
      </div>
    </div>
  );
};
