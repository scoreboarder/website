import SectionFeatures from "../components/SectionFeatures";
import SectionUpcomingFeatures from "../components/SectionUpcomingFeatures";
import SectionJoin from "../components/SectionJoin";
import SectionQuotes from "../components/SectionQuotes";
import Header from "../components/Header";

export default async function Home() {
  return (
    <div className="space-y-32">
      {/* @ts-expect-error Async component */}
      <Header />
      <SectionFeatures />
      <SectionQuotes />
      {/* @ts-expect-error Async component */}
      <SectionUpcomingFeatures />
      <SectionJoin />
    </div>
  );
}
