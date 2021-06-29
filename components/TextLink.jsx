import Link from "next/link";

export default function TextLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noreferrer" className="text-primary">
        {children}
      </a>
    </Link>
  );
}
