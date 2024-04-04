import { Fragment, useState, useEffect } from "react";
import { UserContextProvider } from "@/services/userContext";

import { Navbar } from "./Navbar";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden bg-top bg-cover"
      style={{ backgroundImage: "url(/theme-bg/bg.svg)" }}
    >
      <UserContextProvider>
        <main className="relative flex flex-col justify-center">
          {/* <Navbar /> */}

          <AnimatePresence mode="popLayout">{children}</AnimatePresence>
        </main>
      </UserContextProvider>
    </div>
  );
};

export { Layout };
