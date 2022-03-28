function Title({ children }) {
  return (
    <h1 className="font-bold text-6xl text-white font-heading max-w-[30ch] mb-4">
      {children}
    </h1>
  );
}

function Subtitle({ children }) {
  return <h2 className="text-2xl text-white mb-12">{children}</h2>;
}

function H2({ children }) {
  return <h2 className="font-heading text-white font-bold text-4xl mb-2 ">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="max-w-[55ch] text-white text-center mb-4">{children}</h3>;
}

const Heading = {
  Title,
  Subtitle,
  H2,
  H3,
};

export default Heading;
