import Image from "next/image";

import Heading from "./Heading";

function Quote({ message, user }) {
  return (
    <li className="w-full sm:w-[unset] block m-2 border-2 border-dashed border-separator">
      <blockquote className="flex flex-col justify-between rounded-2xl bg-primaryLighter p-6 h-full">
        <div className="sm:max-w-[200px]">
          <div className="mb-4">
            <Image
              src="/icons/quote.svg"
              alt="Citation mark"
              width="30px"
              height="30px"
            />
          </div>

          <span className="text-white">{message}</span>
        </div>

        <cite className="text-primary font-bold not-italic mt-2">{user}</cite>
      </blockquote>
    </li>
  );
}

export default function SectionQuotes() {
  return (
    <section className="flex flex-col items-center w-full 	">
      <Heading.H2 className={"text-center"}>
        Don't take our word for it
      </Heading.H2>
      <Heading.H3>Here’s what our users say about Scoreborder</Heading.H3>
      <ul className="pt-8 w-full flex flex-row justify-center flex-wrap -m-2">
        <Quote
          message="Great for keeping track of scores, for instance, how many times I have kicked my friends from a VC"
          user="OSKVAJ"
        />
        <Quote
          message="I looked a lot and in the end I found what I was looking for thanks great job"
          user=".Fesor"
        />
        <Quote
          message="I looked everywhere and almost lost hope that I wouldn't be able to find anything but then I found this. I swear this is so simple yet so little amount of bots have this. Thanks a lot"
          user="webbiess"
        />
        <Quote
          message="It is just nice."
          user="ϻя✧๔ยςк"
        />
        <Quote
          message="Insane Bro Now I Can Make A Leaderboard Of How Many Kills You Got In A Game. Thanks"
          user="H u s s"
        />
        <Quote
          message="I am loving the bot. The only question I have it how to I pull up page 2 of my list's? I figured it out. I am very much enjoying this bot! Thank you. Upgrading this to a 5!"
          user="Mr Hoosier"
        />
        <Quote
          message="nice."
          user="huggoYT"
        />
        <Quote
          message="I really like this bot 👀"
          user="kioko yua"
        />
      </ul>
    </section>
  );
}
