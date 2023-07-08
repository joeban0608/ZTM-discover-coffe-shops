import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const dynamicPra = () => {
  const router = useRouter();
  const dynamicParams = router.query.dynamicParams;

  return (
    <div>
      here is dynamic page practice
      <Head>
        <title>{dynamicParams}</title>
      </Head>
    </div>
  );
};

export default dynamicPra;
