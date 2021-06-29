import Heading from "./Heading";
import Button from "./Button";

import DiscordSvg from "../assets/icons/discord.svg";

export default function SectionContactUs() {
  return (
    <section className="flex flex-col items-center">
      <Heading.H2>Wondering something?</Heading.H2>
      <Heading.H3>
        Questions, feedback and suggestions are all welcome in the support
        server!
      </Heading.H3>
      <Button
        href="https://discord.gg/eY5rpZ8vrA"
        type="secondary"
        icon={DiscordSvg}
      >
        Join Support Server
      </Button>
    </section>
  );
}