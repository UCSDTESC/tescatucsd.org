import React from "react";
import { LinkedinFilled, MailFilled } from "@ant-design/icons";
import useImagePreloader from "../../Hooks/useImagePreload";
import { motion } from "framer-motion";

interface Props {
  data: string[][];
  title: string;
}
export function Section({ data, title }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-[30px] text-[#11426B] font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center items-center gap-10">
        {data.map((member, index) => (
          <motion.div
            key={member[0]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <MemberCard key={index} member={member as Member} />
          </motion.div>
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
  const imagePreloader = useImagePreloader([member[3]]);
  return (
    <div className="flex flex-col justify-center items-center">
      {imagePreloader.imagesPreloaded ? (
        <>
          {/* Container for image and ellipsis button */}
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <img
              className="aspect-[1/1.1] w-full p-4 mx-auto object-cover rounded-[40px] animate-[animate-in_1s]"
              src={member[3]}
              alt={member[0]}
            />
            <p className="text-center font-bold h-10">{member[0]}</p>
            <p className="text-center text-sm text-gray-600 mb-2">{member[1]}</p>
            <div className="flex flex-row gap-4 justify-center my-3">
              <a href={`mailto:${emailAddress}`}>
                <MailFilled width={"642px"} style={{ fontSize: "22px", color: "#DC3545" }} />
              </a>

              <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }} />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Container for loading images */}
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <div className="aspect-[1/1.1] w-full p-4 mx-auto">
              <div className="bg-lightBlue w-full h-full rounded-[40px] animate-pulse"></div>
            </div>
            <p className="text-center font-bold h-10">
              <div className="bg-lightBlue animate-pulse h-8 w-[80%] mx-auto rounded-standard"></div>
            </p>
            <div className="flex flex-row gap-4 justify-center my-3">
              <a href={`mailto:${emailAddress}`}>
                <MailFilled width={"642px"} style={{ fontSize: "22px", color: "#DC3545" }} />
              </a>

              <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }} />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
