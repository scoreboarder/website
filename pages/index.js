import Nav from "../components/Nav";
import Header from "../components/Header";
import SectionFeatures from "../components/SectionFeatures";
import SectionQuotes from "../components/SectionQuotes";
import SectionUpcomingFeatures from "../components/SectionUpcomingFeatures";
import SectionJoin from "../components/SectionJoin";
import Footer from "../components/Footer";

export default function Home({ issues, currentServers }) {
  return (
    <main className="flex flex-col items-center mx-4 md:mx-8 mt-8 mb-16">
      <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32">
        <Nav />
        <Header currentServers={currentServers} />
        <SectionFeatures />
        <SectionQuotes />
        <SectionUpcomingFeatures issues={issues} />
        <SectionJoin />
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      issues: await fetchGithubIssues(),
      currentServers: await fetchTopGGStats(),
    },
    revalidate: 60 * 30,
  };
}

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
    }
  );

  const json = await issuesResponse.json();

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

async function fetchTopGGStats() {
  const topggStatsResponse = await fetch(
    "https://top.gg/api/bots/641229153433288724",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: process.env.TOPGG_TOKEN,
      },
    }
  );

  const json = await topggStatsResponse?.json();

  return json?.server_count ?? "Error";
}
