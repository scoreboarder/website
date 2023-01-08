import Heading from "./Heading";
import Button from "./Button";

import robotIcon from "../assets/icons/robot.svg";

export default function SectionJoin() {
  return (
    <section className="md:flex flex-col items-center">
      <Heading.H2>What are you waiting for?</Heading.H2>
      <Heading.H3 className="!text-left mb-8">
        Add Scoreborder to your server
      </Heading.H3>
      <Button
        href="https://discord.com/api/oauth2/authorize?client_id=641229153433288724&permissions=2147485696&scope=applications.commands%20bot"
        type="primary"
        icon={robotIcon}
        iconAlt="robot"
      >
        Invite Scoreboarder
      </Button>
    </section>
  );
}
