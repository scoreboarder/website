import SectionFeatures from "../components/SectionFeatures";
import SectionUpcomingFeatures from "../components/SectionUpcomingFeatures";
import SectionJoin from "../components/SectionJoin";
import SectionQuotes from "../components/SectionQuotes";
import Header from "../components/Header";

export const revalidate = 60 * 30;

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
