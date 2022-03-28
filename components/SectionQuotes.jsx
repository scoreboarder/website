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

          <span className="mb-8 text-white">{message}</span>
        </div>

        <cite className="text-primary font-bold not-italic">{user}</cite>
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
          message="Aliquip sint magna amet ut sint nulla ex elit."
          user="Alvar"
        />
        <Quote
          message="Ullamco adipisicing nulla fugiat ea. Ad minim consequat ea quis deserunt."
          user="sebbe"
        />
        <Quote
          message="Voluptate ex consectetur cillum pariatur culpa mollit qui sint."
          user="Alvar"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="sebbe"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="Alvar"
        />
        <Quote
          message="Consequat pariatur irure cupidatat qui adipisicing do dolore velit anim consequat aliquip."
          user="sebbe"
        />
        <Quote
          message="Eiusmod laboris non exercitation ut occaecat mollit id excepteur eu elit velit consequat."
          user="Alvar"
        />
      </ul>
    </section>
  );
}
