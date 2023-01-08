import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

import heartIcon from "../assets/icons/heart.svg";
import logo from "../assets/icons/logo.svg";
import logotype from "../assets/icons/logotype.svg";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">
        <div className="block sm:hidden">
          <Image alt="Scoreboarder logo" src={logo} className="h-10 w-auto" />
        </div>
        <div className="hidden sm:block">
          <Image
            alt="Scoreboarder logotype"
            src={logotype}
            className="h-10 w-auto"
          />
        </div>
      </Link>

      <ButtonGroup>
        <Button
          href="https://www.buymeacoffee.com/scoreboarder"
          icon={heartIcon}
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
