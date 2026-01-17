import React from "react";

export default async function Page({ params }) {
  const { blogid } = await params;
  console.log(blogid);
  return (
    <div>
      <p>blogg{blogid}</p>
    </div>
  );
}
