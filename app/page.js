import Link from "next/link";

export default async function Home({ params, searchParams }) {
  console.log(await searchParams);
  console.log(await params);

  return (
    <>
      <h1>Hello to NextJS</h1>
      <p>
        <Link href="/blog">Blog1</Link>
      </p>

      <p>
        <Link href="/about">About</Link>
      </p>

      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}
