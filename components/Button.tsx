import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  type: "primary" | "secondary";
  icon?: string;
  iconAlt?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  type,
  icon,
  iconAlt,
  ...props
}: Props) {
  const types = {
    primary: "text-black bg-primary hover:bg-primaryDarker",
    secondary: "text-black bg-secondary hover:bg-secondaryDarker",
  };

  return (
    <a
      className={
        "py-2 px-4 inline-flex flex-row items-center space-x-2 duration-200 " +
        types[type]
      }
      href={href}
      {...props}
    >
      <Image src={icon} alt={iconAlt} width={20} height={20} />
      <span className="font-semibold">{children}</span>
    </a>
  );
}
