import { Suspense } from "react";
import { CouncilMember } from "./council-member-data";
import CouncilMemberCard from "./CouncilMemberCard";
import { motion } from "framer-motion";
import { GlobalOutlined, InstagramOutlined } from "@ant-design/icons";

interface Props {
  data: CouncilMember[];
}
export default function CouncilMemberGrid({ data }: Props) {
  return (
    <>
      {data.map((councilMember, index) => (
        <motion.div
          key={councilMember.Name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <Suspense fallback={<CardFallback />}>
            <CouncilMemberCard councilMember={councilMember} />
          </Suspense>
        </motion.div>
      ))}
    </>
  );
}

function CardFallback() {
  return (
    <div className="flex flex-col justify-center items-center">
      What
      <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
        <div className="aspect-[1/1.1] w-full p-4 mx-auto ">
          <div className="bg-lightBlue w-full h-full rounded-[40px] animate-pulse"></div>
        </div>
        <p className="text-center font-bold h-10">
          <div className="bg-lightBlue animate-pulse h-8 w-[80%] mx-auto rounded-standard"></div>
        </p>
        <div className="flex flex-row gap-4 justify-center my-3">
          <GlobalOutlined
            className="hover:cursor-pointer"
            style={{ fontSize: "20px" }}
          ></GlobalOutlined>

          <InstagramOutlined
            className="hover:cursor-pointer"
            style={{ fontSize: "21px" }}
          ></InstagramOutlined>
        </div>
      </div>
    </div>
  );
}
