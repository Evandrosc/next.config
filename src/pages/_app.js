import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Layout } from "@/modules/layout/";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import Dinero from "dinero.js";

export default function App({ Component, pageProps }) {
  Dinero.globalLocale = "pt-BR";

  useEffect(() => {
    // if (
    //   typeof window !== "undefined" &&
    //   typeof window.navigator !== "undefined" &&
    //   typeof navigator !== "undefined" &&
    //   navigator.userAgent
    // ) { 
    //   const disableDevtool = require("disable-devtool");
    //   disableDevtool();
    // }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </>
  );
}
