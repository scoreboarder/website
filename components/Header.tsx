import Heading from "./Heading";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Stat from "./Stat";

async function fetchTopGGStats() {
  const topggStatsResponse = await fetch(
    "https://top.gg/api/bots/641229153433288724",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: process.env.TOPGG_TOKEN,
      },
      cache: "no-cache",
    }
  );

  const json = await topggStatsResponse.json();

  return json?.server_count ?? "Error";
}

import discordIcon from "../assets/icons/discord.svg";
import robotIcon from "../assets/icons/robot.svg";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="space-y-8 sm:space-y-12">
      <div>
        <Heading.Title>
          Keep track of scoreboards on Discord{" "}
          <span className="text-primary">with ease</span>
        </Heading.Title>
        <Heading.Subtitle>
          Scoreboarder is a Discord bot for making scoreboards, leaderboards and
          much more! You can create any number of scoreboards and add however
          many people you want to them.
        </Heading.Subtitle>
        <ButtonGroup>
          <Button
            href="https://discord.com/api/oauth2/authorize?client_id=641229153433288724&permissions=2147485696&scope=applications.commands%20bot"
            type="primary"
            icon={robotIcon}
            iconAlt="robot"
          >
            Invite Scoreboarder
          </Button>
          <Button
            href="https://discord.gg/eY5rpZ8vrA"
            type="secondary"
            icon={discordIcon}
            iconAlt="discord logo"
          >
            Join Support Server
          </Button>
        </ButtonGroup>
      </div>

      <hr className="border-separator border-dashed" />

      <ul className="flex flex-col sm:flex-row gap-y-8 sm:space-y-0 sm:gap-x-16">
        <Suspense
          fallback={
            <div className="flex flex-col gap-3">
              <div className="bg-slate-800 h-7 w-44 rounded-lg animate-pulse" />
              <div className="bg-slate-800 h-14 w-44 rounded-lg animate-pulse" />
            </div>
          }
        >
          {/* @ts-ignore */}
          <CurrentServers />
        </Suspense>
        <Stat title="Top.gg rating" value="4.5/5" />
        <Stat title="Total scoreboards" value="18000+" />
      </ul>
    </header>
  );
}

async function CurrentServers() {
  await new Promise((r) => setTimeout(r, 1500));
  const currentServers = await fetchTopGGStats();

  return <Stat title="Current Servers" value={currentServers ?? "3500+"} />;
}
