import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>Our Services</h1>

      <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>

      <p>
        <Link href="/services/app-dev">App Development</Link>
      </p>

      <p>
        <Link href="/services/mern-stack">MERN Stack</Link>
      </p>
    </>
  );
}
