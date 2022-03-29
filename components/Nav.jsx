import Image from "next/image";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="block sm:hidden">
        <Image
          alt="Scoreboarder logo"
          src="/logo.svg"
          height="50px"
          width="50px"
        />
      </div>
      <div className="hidden sm:block">
        <Image
          alt="Scoreboarder logotype"
          src="/logotype.svg"
          height="50px"
          width="220px"
        />
      </div>

      <ButtonGroup>
        <Button
          href="https://www.buymeacoffee.com/scoreboarder"
          icon="/icons/heart.svg"
          iconAlt="Heart"
          type="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor
        </Button>
      </ButtonGroup>
    </nav>
  );
}
