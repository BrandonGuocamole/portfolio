import { BlogPosts } from "app/components/posts";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        brandonguo [dot] dev
      </h1>
      <p className="mb-4">
        {`Welcome to my corner of the internet. Here you can find my projects, skills, experiences, and more, or you can explore my blog.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
