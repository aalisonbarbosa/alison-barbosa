"use client";

import { SocialButton } from "@/components/common/SocialButton";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="h-min sm:h-[500px] max-sm:pt-4 grid max-sm:grid-rows-2 max-sm:justify-center sm:grid-cols-2 items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center max-sm:order-2"
      >
        <div className="max-sm:text-center">
          <h1 className="text-4xl lg:text-6xl md:max-lg:text-5xl font-medium mb-2 bg-gradient-to-l from-green-dark via-green-primary to-green-accent bg-clip-text text-transparent">
            Alison Barbosa
          </h1>
          <h2 className="text-xl lg:text-3xl md:max-lg:text-2xl text-light-gray">Front-End Developer.</h2>
          <div className="flex items-center gap-2 mt-4">
            <SocialButton
              Icon={IoLogoLinkedin}
              label="Linkedin"
              href={"https://www.linkedin.com/in/aalisonbarbosa"}
            />
            <SocialButton
              Icon={IoLogoGithub}
              label="Github"
              href="https://github.com/aalisonbarbosa"
            />
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center max-sm:order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 200 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            src="/images/foto.jpg"
            alt="foto"
            width={320}
            height={320}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
