import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = ({ customClass }: { customClass?: string }) => {
  return (
    <button className={`${customClass}`}>
      <a
        href="https://w.app/alisonbarbosa"
        target="_blank"
        className="flex max-sm:w-36 max-sm:text-sm items-center gap-2 px-4 py-1 rounded-2xl cursor-pointer bg-gradient-to-l from-green-dark via-green-primary to-green-accent"
      >
        <FaWhatsapp size={25} />
        Entrar em contato
      </a>
    </button>
  );
};
