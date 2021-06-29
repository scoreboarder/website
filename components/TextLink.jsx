import Link from "next/link";

export default function TextLink({ href, children }) {
  return (
    <Link href={href} passHref className="text-primary">
      <a target="_blank" rel="noreferrer">
        {children}
      </a>
    </Link>
  );
}
