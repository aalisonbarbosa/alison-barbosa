import { NavBar } from "./NavBar";
import { WhatsAppButton } from "../common/WhatsAppButton";

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-20 w-full px-8 text-light-gray bg-dark-black">
      <h1 className="text-2xl font-medium bg-gradient-to-l from-green-dark via-green-primary to-green-accent bg-clip-text text-transparent">
        Alison Barbosa
      </h1>
      <NavBar />
      <WhatsAppButton customClass="max-md:hidden" />
    </header>
  );
};
