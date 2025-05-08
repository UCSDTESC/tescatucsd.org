import React, { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined, LinkedinFilled, MailFilled } from "@ant-design/icons";

interface Props {
  data: string[][];
  title: string;
}
export function Section({ data, title }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-4">
        <p className="text-[30px] text-[#11426B] font-medium">{title}</p>
        {open ? (
          <CaretUpOutlined onClick={() => setOpen(!open)} />
        ) : (
          <CaretDownOutlined onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] my-4 gap-5">
          {data.map((member, index) => (
            <MemberCard key={index} member={member as Member} />
          ))}
        </div>
      )}
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
  const imagePreloader = useImagePreloader([member[3]]);
  return (
    <div className="flex flex-col justify-center items-center">
      {imagePreloader.imagesPreloaded ? (
        <>
          {/* Container for image and ellipsis button */}
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <img
              className=" w-full  aspect-[1/1.3] p-4 mx-auto object-cover rounded-[40px] animate-[animate-in_1s]"
              src={member[3]}
              alt={member[0]}
            />
            <p className="text-center">
              <span className="font-bold">{member[0]}</span> <br />
              {member[1]}
            </p>
            <div className="flex flex-row gap-4 justify-center my-3">
              <a href={`mailto:${emailAddress}`}>
                <MailFilled width={"642px"} style={{ fontSize: "22px", color: "#DC3545" }} />
              </a>

              <a href={linkedInURL}>
                <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }} />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Container for loading images */}
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <div className="w-full aspect-[1/1.3] p-4 mx-auto object-cover my-0">
              <div className="bg-lightBlue w-full h-full  rounded-[40px] animate-pulse"></div>
            </div>
            <div className="">
              <div className="bg-lightBlue w-40 h-6 rounded-standard mx-auto my-1 animate-pulse"></div>
              <div className="bg-lightBlue w-20 h-5 rounded-standard mx-auto my-1 animate-pulse"></div>
            </div>
            <div className="flex flex-row gap-4 justify-center my-3">
              <a href={`mailto:${emailAddress}`}>
                <MailFilled width={"642px"} style={{ fontSize: "22px", color: "#DC3545" }} />
              </a>

              <a href={linkedInURL}>
                <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }} />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
