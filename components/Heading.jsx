function Title({ children, className }) {
  return (
    <h1
      className={
        "font-bold text-6xl text-white font-heading max-w-[30ch] mb-4 " +
        className
      }
    >
      {children}
    </h1>
  );
}

function Subtitle({ children, className }) {
  return (
    <h2 className={"text-2xl text-white mb-12 " + className}>{children}</h2>
  );
}

function H2({ children, className }) {
  return (
    <h2
      className={"font-heading text-white font-bold text-4xl mb-2 " + className}
    >
      {children}
    </h2>
  );
}

function H3({ children, className }) {
  return (
    <h3 className={"max-w-[55ch] text-white text-center mb-4 " + className}>
      {children}
    </h3>
  );
}

const Heading = {
  Title,
  Subtitle,
  H2,
  H3,
};

export default Heading;
