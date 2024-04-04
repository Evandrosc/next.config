import { useContext, useState } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const BodyPercentagesChart = ({ isWeightGain }) => {
  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className="flex flex-col items-start justify-center w-full gap-8 p-6 overflow-hidden rounded-lg shadow-xl "
      style={{
        boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
        backdropFilter: "blur(10px)",
        borderRadius: "11px",
        border: "1px solid rgba(255, 255, 255, 0.22)",
        background: "rgba(255, 255, 255, 0.20)",
      }}
    >
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="tipWeight"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 p-4 text-center rounded-lg bg-whitest"
          >
            <button onClick={() => setShowTip(false)}>
              <XMarkIcon className="w-10 h-10" />
            </button>
            Ao seguir um planejamento correto seu corpo vai perder gordura de
            uma forma geral e a depender de fatores como genética, você vai ver
            a gordura de algumas regiões desaparecer mais rápido que em outras.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between w-full items-top">
        <span className="flex-1 text-2xl font-bold text-black">
          Estimativas de mudança corporal
        </span>

        <button
          onClick={() => setShowTip(true)}
          className="relative flex items-center justify-center w-8 h-8 font-bold leading-none border rounded-full aspect-square border-black"
        >
          <div className="absolute inset-0 border rounded-full border-black animate-ping" />
          ?
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-2">
        <div className="flex items-center justify-center w-full gap-4 p-2">
          <Image
            src={`/charts/body-percentage-chart.svg`}
            className="w-1/2"
            width={475}
            height={475}
          />

          <div className="flex flex-col w-auto gap-5">
            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[#b0ed97]">7%</span> &nbsp;&nbsp;Pescoço
            </div>

            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[#b0ed97]">12%</span> &nbsp;&nbsp;Braços
            </div>

            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[#b0ed97]">42%</span> &nbsp;&nbsp;Cintura
            </div>

            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[#b0ed97]">23%</span> &nbsp;&nbsp;Anca
            </div>

            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[#b0ed97]">16%</span> &nbsp;&nbsp;Coxas
            </div>
          </div>
        </div>

        <div className="text-center text-black">
          <b>Com base no sucesso de outros utilizadores</b> com o mesmo tipo
          metabólico
        </div>
      </div>
    </div>
  );
};

export { BodyPercentagesChart };
