import Image from "next/image";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

import LogotypeSvg from "../assets/logotype.svg";
import HeartSvg from "../assets/icons/heart.svg";
import GithubSvg from "../assets/icons/github.svg";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-row space-x-5 items-center">
        <Image
          alt="Scoreboarder logotype"
          src={LogotypeSvg}
          height="50px"
          width="220px"
        />
      </div>
      <ButtonGroup>
        <Button
          href="https://github.com/scoreboarder"
          icon={GithubSvg}
          iconAlt="Github logo"
          type="light"
        >
          View Source
        </Button>

        <Button href="#" icon={HeartSvg} iconAlt="Heart" type="secondary">
          Sponsor
        </Button>
      </ButtonGroup>
    </nav>
  );
}
