"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { IconType } from "react-icons";

type SkillCardProps = ComponentProps<typeof motion.div> & {
  Icon: IconType;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const SkillCard = ({
  Icon,
  description,
  setDescription,
  ...props
}: SkillCardProps) => {
  return (
    <motion.div
      onMouseEnter={() => setDescription(description)}
      onMouseLeave={() => setDescription("")}
      className="w-28 h-28 flex justify-center items-center border-2 border-green-dark p-2 rounded-sm cursor-pointer"
      {...props}
    >
      <Icon size={55} className="text-green-accent" />
    </motion.div>
  );
};
