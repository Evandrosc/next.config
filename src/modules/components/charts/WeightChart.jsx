import { useContext, useState } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const WeightChart = ({ isWeightGain }) => {
  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className="flex flex-col items-start justify-start w-full h-full gap-8 p-6 overflow-hidden rounded-lg shadow-xl "
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
            A perda de peso não é um processo linear. Você pode perder peso e
            gordura mais rápido no início, atingindo suas metas antes das 4
            semanas se seguir o planejamento corretamente.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-bold text-black">Meu peso</span>

        <button
          onClick={() => setShowTip(true)}
          className="relative flex items-center justify-center w-8 h-8 font-bold leading-none border rounded-full border-black"
        >
          <div className="absolute inset-0 border rounded-full border-black animate-ping" />
          ?
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-black">
          <b>Peso alcançável</b> no final das primeiras 4 semanas
        </div>

        <div className="flex items-center justify-start w-full gap-2">
          <div className="bg-[rgba(176,237,151,0.2)] aspect-square rounded-full p-1">
            {isWeightGain ? (
              <ArrowUpIcon className="w-5 h-5 text-[#b0ed97]" />
            ) : (
              <ArrowUpIcon className="w-5 h-5 text-[#b0ed97] rotate-180" />
            )}
          </div>

          <span className="text-xl font-bold text-[#b0ed97]">
            {parseInt(user.desiredWeight).toFixed(1)} kg
          </span>
        </div>
      </div>

      <div className="relative flex flex-col w-full gap-2">
        {isWeightGain ? (
          <>
            <span className="absolute right-0 font-bold -top-5">
              {parseInt(user.desiredWeight).toFixed(1)} kg
            </span>

            <span className="absolute left-0 font-bold bottom-[6%]">
              {parseInt(user.weight).toFixed(1)} kg
            </span>
          </>
        ) : (
          <>
            <span className="absolute left-0 font-bold -top-5">
              {parseInt(user.weight).toFixed(1)} kg
            </span>

            <span className="absolute right-0 font-bold   bottom-[6%]">
              {parseInt(user.desiredWeight).toFixed(1)} kg
            </span>
          </>
        )}

        <Image
          src={`/charts/weight-chart-${isWeightGain ? "up" : "down"}.svg`}
          alt=""
          srcSet=""
          width={475}
          height={475}
        />
      </div>
    </div>
  );
};

export { WeightChart };
