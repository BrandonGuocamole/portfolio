import { Projects } from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">projects</h1>
      <Projects />
    </section>
  );
}
