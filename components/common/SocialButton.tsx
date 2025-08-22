import { IconType } from "react-icons";

interface SocialButtonProps {
  Icon: IconType;
  label: string;
  href: string;
}

export const SocialButton = ({ Icon, label, href }: SocialButtonProps) => {
  return (
    <button className="rounded-xl border-2 border-green-primary">
      <a
        href={href}
        target="_blank"
        className="flex items-center justify-center gap-2 w-40 sm:max-md:w-32 p-2"
      >
        <Icon size={20} className="text-green-primary" />
        <span className="bg-gradient-to-l from-green-dark via-green-primary to-green-accent bg-clip-text text-transparent">
          {label}
        </span>
      </a>
    </button>
  );
};
