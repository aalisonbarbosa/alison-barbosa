"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { WhatsAppButton } from "../common/WhatsAppButton";

const links = [
  {
    href: "#sobre-mim",
    title: "Sobre mim",
  },
  {
    href: "#projetos",
    title: "Projetos",
  },
  {
    href: "#habilidades",
    title: "Habilidades",
  },
];

export const NavBar = () => {
  const [menuStatus, setMenuStatus] = useState<"open" | "closed">("closed");
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <IoIosMenu
        className={`md:hidden cursor-pointer ${
          menuStatus === "open" ? "hidden" : ""
        }`}
        size={25}
        onClick={() => setMenuStatus("open")}
      />
      {menuStatus === "open" && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenuStatus("closed")}
        />
      )}
      <nav
        className={`${
          menuStatus === "open"
            ? "max-md:translate-x-0"
            : "max-md:translate-x-full"
        } max-md:fixed top-0 right-0 max-md:h-screen max-md:w-1/2 transition-transform duration-300 bg-dark-black z-50`}
      >
        <div className={`md:hidden h-20 flex items-center justify-end pr-8`}>
          <IoIosClose
            className="md:hidden cursor-pointer"
            size={30}
            onClick={() => setMenuStatus("closed")}
          />
        </div>
        <ul className="flex max-md:flex-col items-center gap-2 md:gap-4">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className={hash === link.href ? "text-green-accent" : ""}
              >
                {link.title}
              </a>
            </li>
          ))}
          <WhatsAppButton
            customClass={`${menuStatus === "closed" ? "hidden" : ""} absolute bottom-8 md:hidden`}
          />
        </ul>
      </nav>
    </>
  );
};
