import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hello to NextJS</h1>
      <Link href="/about">About</Link>
    </>
  );
}
