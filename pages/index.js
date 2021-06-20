export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center mx-4 md:mx-8 my-8">
        <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-24 ">
          <Nav />
          <Header />
          <Features />
        </div>
      </main>
    </div>
  );
}

function Button({ children, href, type, icon }) {
  const types = {
    primary: "text-white bg-primary hover:bg-primaryDarker",
    secondary: "text-black bg-secondary hover:bg-secondaryDarker",
    light: "text-black hover:bg-secondary",
  };

  return (
    <a
      className={
        "py-2 px-4 rounded-lg inline-flex flex-row items-center space-x-2 duration-200 " +
        types[type]
      }
      href={href}
    >
      <img src={icon} />
      <span className="font-semibold">{children}</span>
    </a>
  );
}

function Stat({ title, value }) {
  return (
    <li className="space-y-2">
      <h3 className="text-2xl font-heading text-gray-600">{title}</h3>
      <p className="text-6xl font-base">{value}</p>
    </li>
  );
}

function ButtonGroup({ children }) {
  return <div className="flex flex-row items-center space-x-2">{children}</div>;
}

function Nav() {
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-row space-x-5 items-center">
        <img alt="Logo" src="/logotype.svg" className="h-10" />
        {/* <h1 className="text-2xl font-heading font-bold">Scoreboarder</h1> */}
      </div>
      <ButtonGroup>
        <Button
          href="https://github.com/scoreboarder"
          icon="/icons/github.svg"
          type="light"
        >
          View Source
        </Button>

        <Button href="#" icon="/icons/heart.svg" type="secondary">
          Sponsor
        </Button>
      </ButtonGroup>
    </nav>
  );
}

function Header() {
  return (
    <header className="space-y-12">
      <div>
        <h1 className="font-bold text-6xl font-heading max-w-[30ch] mb-4">
          Keep track of scoreboards on Discord{" "}
          <span className="text-primary">with ease</span>
        </h1>
        <h2 className="text-2xl mb-12">
          Scoreboarder is a Discord bot for making scoreboards (or
          leaderboards). You can create scoreboards and add or remove points
          from people and much more!
        </h2>
        <ButtonGroup>
          <Button
            href="https://discord.com/oauth2/authorize?client_id=641229153433288724&scope=bot&permissions=18496"
            type="primary"
            icon="/icons/robot.svg"
          >
            Invite Scoreboarder
          </Button>
          <Button
            href="https://discord.com/oauth2/authorize?client_id=641229153433288724&scope=bot&permissions=18496"
            type="secondary"
            icon="/icons/discord.svg"
          >
            Join Support Server
          </Button>
        </ButtonGroup>
      </div>

      <hr className="border-secondary" />

      <ul className="flex flex-row space-x-16">
        <Stat title="Current Servers" value="3432" />
        <Stat title="Top.gg rating" value="4.7/5" />
        <Stat title="Total scoreboards" value="6543" />
      </ul>
    </header>
  );
}

function Features() {
  return <section className="bg-secondary rounded-3xl h-96 -mx-16"></section>;
}
