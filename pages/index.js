import Head from "next/head";

export default function Home({ issues }) {
  return (
    <div>
      <main className="flex flex-col items-center mx-4 md:mx-8 my-8">
        <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32 mb-96">
          <Nav />
          <Header />
          <Features />
          <Quotes />
          <UpcomingFeatures issues={issues} />
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
        <Heading.Title>
          Keep track of scoreboards on Discord{" "}
          <span className="text-primary">with ease</span>
        </Heading.Title>
        <Heading.Subtitle>
          Scoreboarder is a Discord bot for making scoreboards (or
          leaderboards). You can create scoreboards and add or remove points
          from people and much more!
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

      <hr className="border-secondary" />

      <ul className="flex flex-row space-x-16">
        <Stat title="Current Servers" value="3432" />
        <Stat title="Top.gg rating" value="4.7/5" />
        <Stat title="Total scoreboards" value="6543" />
      </ul>
    </header>
  );
}

function Feature({ icon, title, description, image, reverse }) {
  const base = "flex ";
  const order = {
    [false]: base + "flex-row",
    [true]: base + "flex-row-reverse",
  };

  return (
    <section className={order[reverse]}>
      <div className="mx-8 w-7/12">
        <img src={icon} className="mb-8" />
        <Heading.H2 className="font-heading font-bold text-4xl mb-2">
          {title}
        </Heading.H2>
        <p>{description}</p>
      </div>
      <img src={image} className="mx-8 rounded-3xl w-5/12" />
    </section>
  );
}

function Features() {
  return (
    <div className="bg-secondary rounded-[50px] -mx-16 px-8 py-24 space-y-16">
      <Feature
        icon="/features/icon.png"
        title="Multiple Scoreboards"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/feature.png"
        reverse={false}
      />
      <Feature
        icon="/features/icon.png"
        title="Use roles"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/feature.png"
        reverse={true}
      />
      <Feature
        icon="/features/icon.png"
        title="Pick a theme"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/feature.png"
        reverse={false}
      />
    </div>
  );
}

function Quotes() {
  return (
    <section className="flex flex-col items-center w-full 	">
      <Heading.H2>Don't take our word for it</Heading.H2>
      <Heading.H3>Here’s what our users say about Scoreborder</Heading.H3>
      <ul className="pt-8 w-full flex flex-row justify-center flex-wrap -m-2">
        <Quote
          message="Aliquip sint magna amet ut sint nulla ex elit."
          user="Alvar"
        />
        <Quote
          message="Ullamco adipisicing nulla fugiat ea. Ad minim consequat ea quis deserunt."
          user="sebbe"
        />
        <Quote
          message="Voluptate ex consectetur cillum pariatur culpa mollit qui sint."
          user="Alvar"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="sebbe"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="Alvar"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="sebbe"
        />
        <Quote
          message="Eiusmod laboris non exercitation ut occaecat mollit id excepteur eu elit velit consequat."
          user="Alvar"
        />
      </ul>
    </section>
  );
}

function Quote({ message, user }) {
  return (
    <li className="block m-2">
      <blockquote className="flex flex-col justify-between rounded-2xl bg-primaryLighter p-6 h-full">
        <div className="max-w-[200px]">
          <img
            className="mb-4"
            src="/icons/quote.svg"
            aria-hidden
            width="30px"
            height="30px"
          />
          <span className="mb-8">{message}</span>
        </div>

        <cite className="text-primary font-bold not-italic">{user}</cite>
      </blockquote>
    </li>
  );
}

function Title({ children }) {
  return (
    <h1 className="font-bold text-6xl font-heading max-w-[30ch] mb-4">
      {children}
    </h1>
  );
}

function Subtitle({ children }) {
  return <h2 className="text-2xl mb-12">{children}</h2>;
}

function H2({ children }) {
  return <h2 className="font-heading font-bold text-4xl mb-2 ">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="mb-2 max-w-[55ch] text-center">{children}</h3>;
}

const Heading = {
  Title,
  Subtitle,
  H2,
  H3,
};

function Link({ href, children }) {
  return (
    <a href={href} className="text-primary">
      {children}
    </a>
  );
}

function UpcomingFeatures({ issues }) {
  return (
    <div className="bg-secondary rounded-[50px] -mx-16 px-8 py-24 flex flex-col items-center">
      <Heading.H2>Upcoming Features</Heading.H2>
      <Heading.H3>
        These are Issues taken from{" "}
        <Link href="https://github.com/scoreboarder">GitHub</Link> with the
        label “feature”. Feel free to{" "}
        <Link href="https://github.com/scoreboarder/website/issues/new">
          create an issue
        </Link>{" "}
        if there is something you would want added.
      </Heading.H3>
      <ul className="mt-8">
        {issues.map((item) => {
          return (
            <li>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://api.github.com/repos/scoreboarder/suggestions/issues",
    {
      method: "GET",
      headers: { Accept: "application/vnd.github.v3+json" },
    }
  );

  const issues = (await response.json())
    .filter((item) => {
      return item.labels.some((label) => label.name == "accepted");
    })
    .map((item) => ({
      title: item.title,
      body: item.body,
    }));

  return {
    props: {
      issues,
    },
  };
}
