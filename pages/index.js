import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scoreboarder</title>
        <meta name="description" content="Scoreboarder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Nav />
      </main>
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex flex-row justify-between w-[60%] mt-8">
      <div className="flex flex-row space-x-5 items-center">
        <img alt="Logo" src="/logo.svg" className="w-12 h-12" />
        <h1 className="text-2xl font-semibold">Scoreboarder</h1>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <div className="flex flex-row items-center space-x-4">
          <a>
            <img alt="Github" src="/github.svg" className="w-5 h-5" />
          </a>
          <a>
            <img alt="Discord" src="/discord.svg" className="w-5 h-5" />
          </a>
        </div>
        <a className="flex flex-row items-center bg-gray-200 p-3 rounded-xl space-x-3">
          <img alt="Heart" src="/heart.svg" className="w-5 h-5" />
          <span>Sponsor</span>
        </a>
      </div>
    </nav>
  );
}
