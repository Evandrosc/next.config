import { useContext, useState } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const BodyComparisonChart = ({ isWeightGain }) => {
  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className="flex flex-col items-start justify-center w-full h-full gap-8 p-6 overflow-hidden rounded-lg shadow-xl "
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

      <div className="relative flex flex-col items-center justify-center w-full h-full gap-2 mb-5">
        <div className="flex items-center justify-center w-full gap-4 p-2">
          <div className="flex flex-col flex-1 w-1/2 gap-5">
            <div className="font-bold text-black whitespace-nowrap">
              <span className="text-[rgb(251,192,45)] text-5xl">94%</span>
            </div>

            <div className="text-left text-black">
              <b>
                Pessoas semelhantes a você alcançaram os resultados desejados
              </b>{" "}
              em menos de 4 semanas
            </div>
          </div>

          <Image
            src={`/charts/body-percentage-chart.svg`}
            className="w-1/2"
            width={475}
            height={475}
          />
        </div>
      </div>
    </div>
  );
};

export { BodyComparisonChart };
