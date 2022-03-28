import Image from "next/image";

import Heading from "./Heading";

export default function SectionFeatures() {
  return (
    <div className="bg-card shadow-xl border-l-0 sm:border-l-2 sm:border-r-2 border-r-0 border-2 border-primaryDarker -mx-4 sm:-mx-16 px-4 sm:px-16 py-16 sm:py-24 flex flex-col items-center">
      <Feature
        icon="/features/multple.svg"
        iconAlt="TODO"
        title="Multiple Scoreboards"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/multiplescoreboards.png"
        imageAlt="TODO"
        reverse={false}
      />
      <Feature
        icon="/features/roles.svg"
        iconAlt="TODO"
        title="Use roles"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/roles.png"
        imageAlt="TODO"
        reverse={true}
      />
      <Feature
        icon="/features/icon.png"
        iconAlt="TODO"
        title="Pick a theme"
        description="Officia non fugiat anim dolore qui nostrud aute pariatur deserunt ullamco dolor minim dolor. Tempor velit laborum magna do voluptate nostrud. Excepteur amet adipisicing reprehenderit commodo commodo proident proident commodo Lorem commodo incididunt dolor. Incididunt nisi deserunt commodo do deserunt quis dolore cupidatat."
        image="/features/roles.png"
        imageAlt="TODO"
        reverse={false}
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
    [false]: base + "flex-col-reverse md:flex-row",
    [true]: base + "flex-col-reverse md:flex-row-reverse",
  };

  return (
    <section className={order[reverse]}>
      <div className="my-4 md:mx-8 md:w-1/2">
        <div className="mb-4">
          <Image src={icon} width="40px" height="40px" alt={iconAlt} />
        </div>
        <Heading.H2>{title}</Heading.H2>
        <p className="text-white">{description}</p>
      </div>

      <div className="w-full md:w-1/2 md:mx-8 ">
        <Image
          src={image}
          alt={imageAlt}
          className="rounded-3xl"
          layout="responsive"
          width="500px"
          height="300px"
        />
      </div>
    </section>
  );
}
