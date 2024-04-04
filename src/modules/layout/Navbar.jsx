import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { userContext } from "@/services/userContext";
import { AnimatePresence, motion } from "framer-motion";

import { CentsToReais } from "@/helpers/format";

const Navbar = () => {
  const { user, setUser } = useContext(userContext);

  const router = useRouter();
  const pageKey = router.asPath;

  const [isOpen, setIsOpen] = useState(false);
  const [__document, setDocument] = useState(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pageKey]);

  useEffect(() => {
    setDocument(document);
  }, []);

  return (
    <nav className="flex p-2 rounded-lg shadow-lg z-40 shadow-slate-200 items-center justify-between h-[55px] gap-4 bg-white">
      {/* <Image
        src="https://i.imgur.com/mxsM4SZ.png"
        className="w-full max-w-[150px] h-auto"
      /> */}

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`balance_${user.balance}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="relative flex items-center justify-center h-full px-3 overflow-hidden font-bold text-white rounded-lg shadow-lg whitespace-nowrap animate-lightsweep shadow-primary-400/50 bg-primary-500"
        >
          SALDO: {CentsToReais(user.balance)}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export { Navbar };
