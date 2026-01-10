import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello to NextJS</h1>

      <p>
        <Link href="/about">About</Link>
      </p>

      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}
