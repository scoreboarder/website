import Image from "next/image";

export default function Button({ children, href, type, icon, iconAlt }) {
  const types = {
    primary: "text-black bg-primary hover:bg-primaryDarker",
    secondary: "text-black bg-secondary hover:bg",
    light: "text-black hover:bg-secondary",
  };

  return (
    <a
      className={
        "py-2 px-4 inline-flex flex-row items-center space-x-2 duration-200 " +
        types[type]
      }
      href={href}
    >
      <Image src={icon} alt={iconAlt} width="20px" height="20px" />
      <span className="font-semibold">{children}</span>
    </a>
  );
}
