"use client";

import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaSass,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import { SectionTitle } from "@/components/common/SectionTitle";

export const SkillsSection = () => {
  const [description, setDescription] = useState("");

  const skills = [
    {
      icon: FaHtml5,
      description:
        "HTML5 - Linguagem de marcação para estruturação e apresentação de conteúdo na web, com elementos semânticos e APIs modernas.",
    },
    {
      icon: FaCss3Alt,
      description:
        "CSS3 - Linguagem de estilização para design web, com recursos como flexbox, grid, animações e design responsivo.",
    },
    {
      icon: IoLogoJavascript,
      description:
        "JavaScript - Linguagem de programação para criar interatividade em páginas web, aplicações e servidores (Node.js).",
    },
    {
      icon: BiLogoTypescript,
      description:
        "TypeScript - JavaScript com sintaxe de tipos para maior segurança e produtividade.",
    },
    {
      icon: FaPython,
      description:
        "Python - Linguagem versátil para desenvolvimento web, análise de dados, inteligência artificial e automação.",
    },
    {
      icon: FaJava,
      description:
        "Java - Linguagem de programação orientada a objetos robusta, utilizada em aplicações empresariais, Android e sistemas grandes.",
    },
    {
      icon: RiTailwindCssFill,
      description:
        "Tailwind CSS - Framework CSS utilitário para criar designs customizados rapidamente com classes pré-definidas.",
    },
    {
      icon: FaSass,
      description:
        "Sass - Pré-processador CSS que adota recursos como variáveis, nesting e mixins para estilos mais maintaináveis.",
    },
    {
      icon: FaReact,
      description:
        "React - Biblioteca JavaScript para construção de interfaces de usuário componentizadas e reativas.",
    },
    {
      icon: RiNextjsLine,
      description:
        "Next.js - Framework React com renderização server-side, geração de sites estáticos e roteamento simplificado.",
    },
    {
      icon: FaGitAlt,
      description:
        "Git - Sistema de controle de versão distribuído para rastrear mudanças no código e trabalho colaborativo.",
    },
    {
      icon: GrMysql,
      description:
        "MySQL - Sistema de gerenciamento de banco de dados relacional open source amplamente utilizado.",
    },
  ];

  return (
    <section className="h-min lg:h-[500px] max-lg:py-4">
      <SectionTitle title="Habilidades" id="habilidades" />
      <div className="md:grid grid-cols-2 h-[calc(100%-64px)]">
        <div className="text-light-gray flex items-center justify-center max-md:hidden">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center w-2/3"
          >
            {description.length > 0
              ? description
              : "*passe o cursor do mouse no card para ler*"}
          </motion.p>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 lg:grid-cols-4 max-lg:grid-cols-3 gap-2"
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                Icon={skill.icon}
                description={skill.description}
                setDescription={setDescription}
                animate={{ x: [0, 100, 0] }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
