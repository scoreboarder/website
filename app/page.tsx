import SectionFeatures from "../components/SectionFeatures";
import SectionUpcomingFeatures from "../components/SectionUpcomingFeatures";
import SectionJoin from "../components/SectionJoin";
import SectionQuotes from "../components/SectionQuotes";
import Header from "../components/Header";
import { Metadata } from "next";

export const revalidate = 60 * 30;

export const metadata: Metadata = {
  title: "Scoreboarder: Keep track of scoreboards on Discord with ease",
  description:
    "Discord bot for making scoreboards, leaderboards and much more! Create any number of scoreboards and add however many people you want to them.",
  openGraph: {
    title: "Scoreboarder",
    description: "Keep track of scoreboards on Discord with ease",
  },
};

export default async function Home() {
  return (
    <div className="space-y-32">
      {/* @ts-ignore */}
      <Header />
      <SectionFeatures />
      <SectionQuotes />
      {/* @ts-ignore */}
      <SectionUpcomingFeatures />
      <SectionJoin />
    </div>
  );
}
