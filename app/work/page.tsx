export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        work experience
      </h1>
      <p>
        On a mission to build products developers{" "}
        <a href="/blog/developer-experience">love</a>, and along the way, teach
        the next generation of developers. Here's a summary of my work so far.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Apple</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Technical Product Manager, 01/2023 — 06/2023
      </p>
      <p>
        I joined <a href="https://apple.com">Apple</a> under the{" "}
        <a href="https://platoon.ai">Platoon.ai</a> team. I worked on flows
        for the artist-facing webapp, and was also the first member of the team
        to integrate internal document search via LLMs.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">HBO Max</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Technical Program Manager Intern, Summer 2022
      </p>
      <p>
        I joined <a href="https://vercel.com/home">HBO Max</a> while the Warner Bros. Discovery merger was underway. I worked simultaneously as a TPM while working alongside the Product team while they worked on merging with Discovery+ to build Max.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Faxx App</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Founder, 2022 — 2023
      </p>
      <p>
        I co-founded an anonymous social media application called Faxx, which
        allowed Snapchat users to send anonymous messages to each other.
      </p>
      <ul className="list-disc list-inside m-4">
        <li>
          Released an MVP of the anonymous messaging platform on the iOS App Store and acquired 3,000+ users in under 3 months
        </li>
        <li>
          Met great advisors, wore many hats, and learned a lot about building
          products. Won 2nd place in the Berkeley SkyDeck Pad-13 Pitch Competition.
        </li>
        <li>
          Managed a team of 4 engineers to build the iOS app, and was the sole developer of the website.
        </li>
      </ul>
      <p>
      Unfortunately in 2022, Snapchat removed API access for anonymous applications, forcing us to shut down the project. To this day, however, I believe I learned the most while working on this project.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">
        Rockstar Games
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Product Manager Intern, Summer 2021
      </p>
      <p>
        Worked on the <a href="https://vercel.com/home">Social Club</a> team of {" "}
        <a href="https://nextjs.org">Rockstar Games</a> after working as a technical
        consultant for the company through Berkeley Consulting.
      </p>
    </section>
  );
}
