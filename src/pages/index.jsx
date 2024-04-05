import { useState, useEffect, useContext, Fragment } from "react";
import { signOut, getSession } from "next-auth/react";

import { CentsToReais } from "@/helpers/format/moneyFormat";
import { userContext } from "@/services/userContext";

import {
  Initial,
  UserInfo,
  UserInfo2,
  Charts,
  Quizz,
  Finish
} from "@/modules/components/pages";
import { AnimatePresence, motion } from "framer-motion";
import { Generating } from "@/modules/components/pages/Generating";

export default function Home() {
  const { user, setUser } = useContext(userContext);
  const [page, setPage] = useState("initial");

  const pages = {
    initial: <Initial handlePageUpdate={setPage} />,
    userInfo: <UserInfo handlePageUpdate={setPage} />,
    userInfo2: <UserInfo2 handlePageUpdate={setPage} />,
    charts: <Charts handlePageUpdate={setPage} />,
    quizz: <Quizz handlePageUpdate={setPage} />,
    generating: <Generating handlePageUpdate={setPage} />,
    finish: <Finish />
  };

  useEffect(() => {
    const _p = localStorage.getItem("_p");

    if (_p) setPage(_p);
  }, []);

  useEffect(() => {
    if (page !== "initial") localStorage.setItem("_p", page);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [page]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={page}
        className="overflow-y-hidden"
      >
        {pages[page]}
      </motion.div>
    </AnimatePresence>
  );
}
