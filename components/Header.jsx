import Heading from "./Heading";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Stat from "./Stat";

export default function Header({ currentServers }) {
  return (
    <header className="space-y-12">
      <div>
        <Heading.Title>
          Keep track of scoreboards on Discord{" "}
          <span className="text-primary">with ease</span>
        </Heading.Title>
        <Heading.Subtitle>
          Scoreboarder is a Discord bot for making scoreboards, leaderboards and
          much more! You can create any number of scoreboards and add however
          many people you want to them.
        </Heading.Subtitle>
        <ButtonGroup>
          <Button
            href="https://discord.com/oauth2/authorize?client_id=641229153433288724&scope=bot&permissions=18496"
            type="primary"
            icon="/icons/robot.svg"
          >
            Invite Scoreboarder
          </Button>
          <Button
            href="https://discord.gg/eY5rpZ8vrA"
            type="secondary"
            icon="/icons/discord.svg"
          >
            Join Support Server
          </Button>
        </ButtonGroup>
      </div>

      <hr className="border-separator" />

      <ul className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
        <Stat title="Current Servers" value={currentServers ?? "3500+"} />
        <Stat title="Top.gg rating" value="4.5/5" />
        <Stat title="Total scoreboards" value="12000+" />
      </ul>
    </header>
  );
}
