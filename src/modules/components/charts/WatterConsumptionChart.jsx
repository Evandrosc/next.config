import { useContext, useState, useEffect, useMemo } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const WatterConsumptionChart = ({ isWeightGain }) => {
  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);
  const [watterConsumption, setWatterConsumption] = useState([
    "full",
    "full",
    "full",
    "half",
  ]);

  const calcWatterComsumption = useMemo(() => {
    if (user) {
      const consumption = user.weight * 35;

      return (consumption / 1000).toFixed(1);
    }
  }, [user]);

  return (
    <div
      className="flex flex-col items-start justify-start w-full h-full py-6 overflow-hidden rounded-lg shadow-xl"
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
            O índice de massa corporal (IMC) é uma medida comprovada utilizada
            por médicos e especialistas da saúde para determinar a condição do
            peso. O IMC fora do recomendado está diretamente ligado a doenças
            como diabetes, câncer, problemas articulares e muito mais.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between w-full px-6 ">
        <span className="text-2xl font-bold text-black">Ingestão de água</span>

        <button
          onClick={() => setShowTip(true)}
          className="relative flex items-center justify-center w-8 h-8 font-bold leading-none border border-black rounded-full"
        >
          <div className="absolute inset-0 border border-black rounded-full animate-ping" />
          ?
        </button>
      </div>

      <div className="flex flex-col w-full px-6">
        <span className="mb-4 mt-12 w-full h-[1px] bg-[url('/charts/separator-icon.svg')] bg-center bg-no-repeat bg-cover" />

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-[2px] flex-1s">
            {watterConsumption.map((item) => (
              <Image
                key={Math.random(1 * Math.random(2))}
                src={`/charts/${item}-chart.svg`}
                width={21}
                height={60}
              />
            ))}
          </div>

          <div className="flex-1 max-w-[60%] ">
            <div className="text-[1.5rem] text-[#1AA5F7] font-bold">
              {calcWatterComsumption}L
            </div>
            <p className="text-[0.75rem]">A sua ingestão de água recomendada</p>
          </div>
        </div>

        <span className="mt-4 mb-4 w-full h-[1.10px] bg-[url('/charts/separator-icon.svg')] bg-center bg-no-repeat bg-cover" />
      </div>

      <div className="flex flex-col items-center justify-center px-6 mt-2">
        <p className="text-center max-w-[100%]">
          <span className="font-bold">Com base na OMS</span>, a perda de água
          diária típica está entre{" "}
          <span className="text-[#1AA5F7] font-bold">2.5L</span> e
          <span className="text-[#1AA5F7] font-bold">3L</span>, sendo que{" "}
          <span className="text-[#1AA5F7] font-bold">0.7L</span> de água são
          fornecidos atraves dos alimentos diariamente.
        </p>

        <div className="flex flex-row items-center justify-center gap-2 mt-6">
          <Image
            src="/images/oms-icon.png"
            alt=""
            className="w-8 h-8"
            width={475}
            height={475}
          />
          <p className="font-bold text-[0.75rem] leading-3">
            World Health <br /> Organization
          </p>
        </div>
      </div>
    </div>
  );
};

export { WatterConsumptionChart };
