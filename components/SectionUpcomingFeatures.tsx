import Link from "next/link";

import Heading from "./Heading";
import TextLink from "./TextLink";

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

async function fetchGithubIssues() {
  const issuesResponse = await fetch(
    "https://api.github.com/repos/scoreboarder/suggestions/issues",
    {
      method: "GET",
      headers: { Accept: "application/vnd.github.v3+json" },
      next: {
        revalidate: 1200,
      },
    }
  );

  const json = await issuesResponse.json();

  if (!json || json.message) return [];

  return json
    .filter((item) => {
      return item.labels.some((label) => label.name == "accepted");
    })
    .map((item) => ({
      number: item.number,
      title: item.title,
      body: truncateString(item.body, 100),
      url: item.html_url,
    }));
}

export default async function SectionUpcomingFeatures() {
  const issues = await fetchGithubIssues();

  return (
    <div className="bg-card shadow-xl border-l-0 sm:border-l-2 sm:border-r-2 border-r-0 border-2 border-primaryDarker -mx-4 sm:-mx-16 px-4 sm:px-16 py-16 sm:py-24 flex flex-col items-center">
      <Heading.H2>Upcoming Features</Heading.H2>
      <Heading.H3>
        These are issues from{" "}
        <TextLink href="https://github.com/scoreboarder">GitHub</TextLink> with
        Feel free to{" "}
        <TextLink href="https://github.com/scoreboarder/suggestions/issues/new">
          create an issue
        </TextLink>{" "}
        if there is something you would want added.
      </Heading.H3>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 grid-flow-row w-full ">
        {issues.map((item) => {
          return <UpcomingFeature {...item} key={item.number} />;
        })}
      </ul>
    </div>
  );
}

function UpcomingFeature({ number, title, body, url }) {
  return (
    <li className="text-white border-primary cursor-pointer">
      <Link href={url} target="_blank" rel="noreferrer">
        <>
          <h3 className="font-semibold">
            <span className="text-primary">#{number}</span> {title}
          </h3>
          <p>{body}</p>
        </>
      </Link>
    </li>
  );
}
