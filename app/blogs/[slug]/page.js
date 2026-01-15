import React from "react";

function Page({ searchParams }) {
  return (
    <div>
      <p>Name: {searchParams.name}</p>
      <p>Age: {searchParams.age}</p>
    </div>
  );
}

export default Page;
