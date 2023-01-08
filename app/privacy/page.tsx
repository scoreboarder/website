import Heading from "../../components/Heading";

export default function PrivacyPolicy() {
  return (
    <div className="space-y-32">
      <Heading.Title>Privacy Policy</Heading.Title>
      <div className=" text-white space-y-12">
        <div className="prose text-slate-300">
          <Heading.H2>Usage Agreement</Heading.H2>
          <p>
            The use of Scoreboarder ("bot") in a server requires the collection
            of some specific user data. The Data collected includes, but is not
            limited to, Discord user ID values, Discord user nicknames and a
            users server roles. Use of the Bot is considered an agreement to the
            terms of this policy.
          </p>
        </div>

        <div className="prose text-slate-300">
          <Heading.H2>Access to Data</Heading.H2>
          <p>
            Access to data is only permitted to the bot's developers and hosting
            services and only in the scope required for the development,
            testing, and implementation of features for the bot. Data is not
            sold, provided to, or shared with any third party, except where
            required by law or a Terms of Service agreement. You can view the
            Data upon request from SweSebbe3336#1152
          </p>
        </div>

        <div className="prose text-slate-300">
          <Heading.H2>Storage of Data</Heading.H2>
          <p>
            Data is stored in a PlanetScale database. The database is secured to
            prevent external access. However, no guarantee is provided, and the
            Bot owners assume no liability for the unintentional or malicious
            data breach. In the event of unauthorized Data access, server staff
            will notify users through the Support Server.
          </p>
        </div>
        <div className="prose text-slate-300">
          <Heading.H2>User Rights</Heading.H2>
          <p>
            At any time, you have the right to request to view the data of your
            Discord account. You have the right to request the removal of
            relevant Data. To do this, the user should submit a request through
            the Support Server.
          </p>
        </div>
        <div className="prose text-slate-300">
          <Heading.H2>Questions</Heading.H2>
          <p>
            If you have any questions or are concerned about what data might be
            stored from your account, contact SweSebbe3336#1152. For more
            information, check the Discord Terms Of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
