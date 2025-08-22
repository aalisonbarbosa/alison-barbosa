"use client";

import { FaCode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/common/SectionTitle";

export const ProjectsSection = () => {
  const projects = [
    {
      name: "FlixHub",
      thumbnail: "/images/flixhub.png",
      summary:
        "Aplicação web para explorar filmes e séries, consumindo dados de uma API pública. Conta com interface responsiva, busca dinâmica e organização de conteúdo. Desenvolvido para praticar consumo de APIs e criação de interfaces modernas.",
      techStack: [FaReact, BiLogoTypescript, RiTailwindCssFill],
      github: "https://github.com/aalisonbarbosa/flix-hub",
      demo: "https://flix-hub-five.vercel.app/",
    },
    {
      name: "Money Flow",
      thumbnail: "/images/moneyflow.png",
      summary:
        "Sistema de gerenciamento financeiro pessoal, com cadastro e visualização de despesas/receitas. Inclui gráficos, autenticação e foco em usabilidade. Projeto criado para reforçar conceitos de CRUD, Next.js e boas práticas de desenvolvimento.",
      techStack: [RiNextjsLine, BiLogoTypescript, RiTailwindCssFill],
      github: "https://github.com/aalisonbarbosa/money-flow",
      demo: "https://money-flow-kappa.vercel.app/",
    },
  ];

  return (
    <section className="h-min md:h-[650px] max-md:py-4">
      <SectionTitle title="Projetos" id="projetos" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-4 h-[calc(100%-64px)]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-light-gray w-[350px] h-[438px] flex flex-col justify-center gap-4 p-2 shadow-sm shadow-green-dark rounded-xl"
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={350}
              height={320}
              className="rounded-t-xl"
            />
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium bg-gradient-to-l from-green-dark via-green-primary to-green-accent bg-clip-text text-transparent">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                {project.techStack.map((Icon, index) => (
                  <Icon key={index} size={30} className="text-green-accent" />
                ))}
              </div>
            </div>
            <p className="text-sm text-justify">{project.summary}</p>
            <div className="flex gap-2 items-center">
              <button>
                <a href={project.github} target="_blank">
                  <FaCode
                    size={30}
                    className="text-green-accent hover:text-green-dark duration-300"
                  />
                </a>
              </button>
              <button>
                <a href={project.demo} target="_blank">
                  <IoEyeSharp
                    size={30}
                    className="text-green-accent hover:text-green-dark duration-300"
                  />
                </a>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
