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
          href="#"
          icon="/icons/heart.svg"
          iconAlt="Heart"
          type="secondary"
        >
          Sponsor
        </Button>
      </ButtonGroup>
    </nav>
  );
}
