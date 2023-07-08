import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const coffeeStore = () => {
  const router = useRouter();
  const { query } = router;
  console.log("router", router);
  return (
    <div>
      coffee store page {query.id}
      {/* scroll true, link to page and up to top */}
      <br />
      <Link href="/" legacyBehavior scroll={true}>
        <a> Back to home</a>
      </Link>
      <br />
      <Link href="/coffee-store/dynamic" legacyBehavior scroll={true}>
        <a> go to dynamic</a>
      </Link>
    </div>
  );
};

export default coffeeStore;
