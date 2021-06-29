import Image from "next/image";

import Heading from "./Heading";

export default function SectionFeatures() {
  return (
    <div className="bg-secondary rounded-[50px] -mx-16 px-8 py-24 space-y-16">
      <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="Multiple Scoreboards"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/multiplescoreboards.png"
        imageAlt="TODO"
        reverse={false}
      />
      <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="Use roles"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/roles.png"
        imageAlt="TODO"
        reverse={true}
      />
      {/* <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="Pick a theme"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/feature.png"
        imageAlt="TODO"
        reverse={false}
      /> */}
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
  const base = "flex ";
  const order = {
    [false]: base + "flex-row",
    [true]: base + "flex-row-reverse",
  };

  return (
    <section className={order[reverse]}>
      <div className="mx-8 w-1/2">
        <Image
          src={icon}
          className="mb-8"
          width="40px"
          height="40px"
          alt={iconAlt}
        />
        <Heading.H2 className="font-heading font-bold text-4xl mb-2">
          {title}
        </Heading.H2>
        <p>{description}</p>
      </div>
      <Image
        src={image}
        alt={imageAlt}
        className="mx-8 rounded-3xl"
        objectFit="cover"
        width="500px"
        height="300px"
      />
    </section>
  );
}
