import Image from "next/image";
import Heading from "./Heading";

import featureMultiple from "../assets/features/multiple.png";
import featureRoles from "../assets/features/roles.png";
import featureShow from "../assets/features/show.png";
import featureCommands from "../assets/features/slash-commands.png";

export default function SectionFeatures() {
  return (
    <div className="bg-card shadow-xl border-l-0 sm:border-l-2 sm:border-r-2 border-r-0 border-2 border-primaryDarker -mx-4 sm:-mx-16 px-4 sm:px-16 py-16 sm:py-24 space-y-8 flex flex-col items-center">
      <Feature
        title="Multiple Scoreboards"
        description="You can have as many scoreboards as you want. You can also have the same people on multiple different scoreboards if you want."
        image={featureMultiple}
        imageAlt=""
        direction="normal"
      />
      <Feature
        title="Use roles"
        description="By using roles, each individual with that role will be added to the scoreboard. This could be useful for keeping track of points for a game, competition or similiar. You can also add any word to your scoreboard if you want Team A and Team B on the scoreboard."
        image={featureRoles}
        imageAlt=""
        direction="reverse"
      />
      <Feature
        title="View all your scoreboards in Discord"
        description="All of your scoreboards will be accessible straight from the Discord chat. There are also several themes available to suit your needs."
        image={featureShow}
        imageAlt=""
        direction="normal"
      />
      <Feature
        title="Supports slash commands"
        description="Scoreboarder works fully with slash commands. This includes autocomplete for scoreboard names and help filling out commands."
        image={featureCommands}
        imageAlt=""
        direction="reverse"
      />
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  image: any;
  imageAlt: string;
  direction: "normal" | "reverse";
}

function Feature({
  title,
  description,
  image,
  imageAlt,
  direction,
}: FeatureProps) {
  const base = "flex items-center ";
  const directionStyles = {
    ["normal"]: base + "flex-col-reverse lg:flex-row",
    ["reverse"]: base + "flex-col-reverse lg:flex-row-reverse",
  };

  return (
    <section className={directionStyles[direction]}>
      <div className="my-4 lg:mx-8 lg:w-1/2">
        <Heading.H2>{title}</Heading.H2>
        <p className="text-white">{description}</p>
      </div>

      <div className="w-full lg:w-1/2 lg:mx-8 ">
        <Image
          src={image}
          alt={imageAlt}
          className="rounded-3xl"
          sizes="(max-width: 1300x) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
