"use client";

import { SectionTitle } from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="h-min md:h-[500px] max-md:py-4">
      <SectionTitle title="Sobre mim" id="sobre-mim" />
      <div className="grid md:grid-cols-2 items-center max-md:justify-center h-[calc(100%-64px)]">
        <div className="flex items-center justify-center h-full max-md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -200 }}
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
        <div className="h-full flex items-center justify-center md:pr-16 max-md:px-4 text-justify">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-light-gray max-sm:text-sm"
          >
            Sou Alison Barbosa, desenvolvedor Full Stack apaixonado por
            transformar ideias em aplicações web completas e funcionais. No
            front-end, domino React, Next.js e TypeScript, criando interfaces
            modernas, intuitivas e responsivas. No back-end, trabalho com
            Node.js, Prisma, MySQL, PostgreSQL, Java e Spring Boot, estruturando
            sistemas escaláveis e confiáveis.
            <br />
            <br />
            Tenho experiência prática em projetos reais, entregando soluções que
            vão do banco de dados à interface, sempre com foco em desempenho,
            organização e qualidade de código.
          </motion.p>
        </div>
        <div className="h-full flex items-center justify-center"></div>
      </div>
    </section>
  );
};
