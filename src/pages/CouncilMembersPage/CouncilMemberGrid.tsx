import { CouncilMember } from "./council-member-data";
import CouncilMemberCard from "./CouncilMemberCard";
import { motion } from "framer-motion";

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
            ease: "easeOut",
          }}
        >
          <CouncilMemberCard councilMember={councilMember} />
        </motion.div>
      ))}
    </>
  );
}
