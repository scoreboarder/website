import Image from "next/image";
import Heading from "./Heading";

export default function SectionFeatures() {
  return (
    <div className="bg-card shadow-xl border-l-0 sm:border-l-2 sm:border-r-2 border-r-0 border-2 border-primaryDarker -mx-4 sm:-mx-16 px-4 sm:px-16 py-16 sm:py-24 space-y-8 flex flex-col items-center">
      <Feature
        icon="/features/multple.svg"
        iconAlt="TODO"
        title="Multiple Scoreboards"
        description="You can have as many scoreboards as you want. You can also have the same people on multiple different scoreboards if you want."
        image="/features/multiple.png"
        imageAlt="TODO"
        reverse={false}
      />
      <Feature
        icon="/features/roles.svg"
        iconAlt="TODO"
        title="Use roles"
        description="By using roles, each individual with that role will be added to the scoreboard. This could be useful for keeping track of points for a game, competition or similiar. You can also add any word to your scoreboard if you want Team A and Team B on the scoreboard."
        image="/features/roles.png"
        imageAlt="TODO"
        reverse={true}
      />
      <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="View all your scoreboards in Discord"
        description="All of your scoreboards will be accessible straight from the Discord chat. There are also several themes available to suit your needs."
        image="/features/show.png"
        imageAlt="TODO"
        reverse={false}
      />
      <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="Supports slash commands"
        description="Scoreboarder works fully with slash commands. This includes autocomplete for scoreboard names and help filling out commands."
        image="/features/slash-commands.png"
        imageAlt="TODO"
        reverse={true}
      />
    </div>
  );
}

function Feature({
  icon,
  iconAlt,
  title,
  description,
  image,
  imageAlt,
  reverse,
}) {
  const base = "flex items-center ";
  const order = {
    [false]: base + "flex-col-reverse lg:flex-row",
    [true]: base + "flex-col-reverse lg:flex-row-reverse",
  };

  return (
    <section className={order[reverse]}>
      <div className="my-4 lg:mx-8 lg:w-1/2">
        {/* <div className="mb-4">
          <Image src={icon} width="40px" height="40px" alt={iconAlt} />
        </div> */}
        <Heading.H2>{title}</Heading.H2>
        <p className="text-white">{description}</p>
      </div>

      <div className="w-full lg:w-1/2 lg:mx-8 ">
        <Image
          src={image}
          alt={imageAlt}
          className="rounded-3xl"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
