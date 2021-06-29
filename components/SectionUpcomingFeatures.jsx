import Link from "next/link";

import Heading from "./Heading";
import TextLink from "./TextLink";

export default function SectionUpcomingFeatures({ issues }) {
  return (
    <div className="bg-secondary rounded-[50px] -mx-16 px-16 py-24 flex flex-col items-center">
      <Heading.H2>Upcoming Features</Heading.H2>
      <Heading.H3>
        These are Issues taken from{" "}
        <TextLink href="https://github.com/scoreboarder">GitHub</TextLink> with
        the label “feature”. Feel free to{" "}
        <TextLink href="https://github.com/scoreboarder/suggestions/issues/new">
          create an issue
        </TextLink>{" "}
        if there is something you would want added.
      </Heading.H3>
      <ul className="mt-8 grid grid-cols-3 gap-4 grid-flow-row w-full ">
        {issues.map((item) => {
          return <UpcomingFeature {...item} key={item.number} />;
        })}
      </ul>
    </div>
  );
}

function UpcomingFeature({ number, title, body, url }) {
  return (
    <li className="p-3 border-2 rounded-lg border-primary cursor-pointer">
      <Link href={url} passHref>
        <a target="_blank" rel="noreferrer">
          <h3 className="font-semibold">
            <span className="text-primary">#{number}</span> {title}
          </h3>
          <p>{body}</p>
        </a>
      </Link>
    </li>
  );
}
