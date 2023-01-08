"use client";

import Image from "next/image";
import Link from "next/link";
import TextLink from "./TextLink";

const year = new Date().getFullYear();

import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-separator pt-5">
      <Image src={logo} alt="Scoreboarder logo" className="w-10 h-10" />
      <h2 className="font-semibold text-text mt-2">Scoreboarder</h2>
      <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 mb-4">
        <p className="text-textSecondary">
          Copyright © {year} Sebastian Danckwardt
        </p>
        <p className="text-textSecondary">
          Designed by{" "}
          <TextLink href="https://alvar.dev?utm_source=scoreboarder.xyz">
            Alvar Lagerlöf
          </TextLink>
        </p>
      </div>
      <div className="space-x-4 flex-col">
        <Link className="text-primary" href="/terms">
          Terms of Service
        </Link>
        <Link className="text-primary" href="/privacy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
