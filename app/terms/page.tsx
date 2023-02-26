import { Metadata } from "next";
import Link from "next/link";
import Heading from "../../components/Heading";

export const metadata: Metadata = {
  title: "Terms of service",
};

export default function TermsOfService() {
  return (
    <div className="space-y-32">
      <Heading.Title>Terms of service</Heading.Title>
      <div className=" text-white space-y-12">
        <div className="prose text-slate-300">
          <Heading.H2>Usage Agreement</Heading.H2>
          <p>
            By inviting Scoreboarder ("bot") and using its features, you agree
            to the Terms of service and{" "}
            <Link className="text-primary" href="/privacy">
              Privacy Policy
            </Link>{" "}
            of the bot.
          </p>

          <p>
            You acknowledge that you can use the bot freely on any Discord
            Server you share it with. You can invite it to any Server that you
            have "Manage Server" rights, and this privilege may get revoked if
            you are subject to breaking the terms of service or privacy policy
            of this bot or the Terms of Service, Privacy Policy, or Community
            Guidelines of Discord Inc.
          </p>
          <p>
            Through inviting, the bot may collect specific data as described in
            its Privacy Policy. This data's intended usage is for the bot's core
            functionalities, such as executing commands.
          </p>
          <p>
            The intended usage of this data is for core functionalities of the
            bot such as executing commands.
          </p>
        </div>

        <div className="prose text-slate-300">
          <Heading.H2>Affiliation </Heading.H2>
          <p>
            The bot is not affiliated with, supported, or made by Discord Inc.
          </p>
          <p>
            Any direct connection to Discord or any of its Trademark objects is
            purely coincidental. We do not claim copyright ownership of
            Discord's assets, trademarks, or other intellectual property.
          </p>
        </div>

        <div className="prose text-slate-300">
          <Heading.H2>Underage users</Heading.H2>
          <p>
            The bot is not permitted for minors under the age of 13 or under the
            legal consent of their country
          </p>
          <p>
            This complies with the Discord Terms of Service. No information will
            be knowingly stored from an underage user. If it is found out that a
            user is underage, we will take all necessary actions to delete the
            stored data.
          </p>
        </div>

        <div className="prose text-slate-300">
          <Heading.H2>Liability</Heading.H2>
          <p>
            The bots developers and owner may not be made liable for individuals
            breaking these Terms at any given time.
          </p>
          <p>
            The right to update these terms is reserved at our discretion,
            giving a 1-Week (7 days) period to opt out of these terms. A user
            may opt-out by removing the bot from any server where the user has
            the right to remove the bot.
          </p>
        </div>
      </div>
    </div>
  );
}
