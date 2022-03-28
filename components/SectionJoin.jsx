import Heading from "./Heading";
import Button from "./Button";

export default function SectionJoin() {
  return (
    <section className="md:flex flex-col items-center">
      <Heading.H2>What are you waiting for?</Heading.H2>
      <Heading.H3 className="!text-left">
        Add Scoreborder to your server
      </Heading.H3>
      <Button
        href="https://discord.com/oauth2/authorize?client_id=641229153433288724&scope=bot&permissions=18496"
        type="primary"
        icon="/icons/robot.svg"
      >
        Invite Scoreboarder
      </Button>
    </section>
  );
}
