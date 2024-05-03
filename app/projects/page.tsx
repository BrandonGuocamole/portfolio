import { Projects } from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">projects</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <Projects />
    </section>
  );
}
