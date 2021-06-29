import Image from "next/image";
import TextLink from "./TextLink";
import LogoSvg from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t pt-5">
      <Image src={LogoSvg} alt="Scoreboarder logo" width="40px" height="40px" />
      <h2 className="font-semibold mt-2">Scoreboarder</h2>
      <div className="flex flex-row justify-between">
        <p className="text-gray-600">Copyright © 2021 Sebastian Danckwardt</p>
        <p className="text-gray-600">
          Designed by{" "}
          <TextLink href="https://alvar.dev?utm_source=scoreboarder.xyz">
            Alvar Lagerlöf
          </TextLink>
        </p>
      </div>
    </footer>
  );
}
