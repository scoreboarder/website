import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="block sm:hidden">
        <Image alt="Scoreboarder logo" src="/logo.svg" height={50} width={50} />
      </div>
      <div className="hidden sm:block">
        <Link href="/">
          <Image
            alt="Scoreboarder logotype"
            src="/logotype.svg"
            height={50}
            width={220}
          />
        </Link>
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
