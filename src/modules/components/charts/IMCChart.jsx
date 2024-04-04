import { useContext, useState, useEffect, useMemo } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const IMCChart = ({ isWeightGain }) => {
  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);

  const userIMC = useMemo(() => {
    if (user.weight && user.height) {
      const userHeight = Number(user.height) / 100;
      const _height = userHeight * userHeight;

      const _IMC = Number(user.weight) / _height;

      const message = _IMC >= 22.6 ? "acima do peso" : "abaixo do peso";

      return {
        imc: _IMC,
        message,
      };
    }
    return {
      imc: 0,
      message: "peso indefinido",
    };
  }, [user.weight, user.height]);

  return (
    <div
      className="flex flex-col items-start justify-start w-full h-full overflow-hidden rounded-lg shadow-xl  py-6"
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
        <span className="text-2xl font-bold text-black">
          O seu <span className="text-[#1AA5F7] font-bold">IMC</span> atual
        </span>

        <button
          onClick={() => setShowTip(true)}
          className="relative flex items-center justify-center w-8 h-8 font-bold leading-none border rounded-full border-black"
        >
          <div className="absolute inset-0 border rounded-full border-black animate-ping" />
          ?
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pt-2 px-6">
        <div className="text-black">{userIMC.message}</div>
      </div>

      <div className="relative flex justify-center items-center w-full h-[205px] bg-[url('/charts/imc-chart.svg')] bg-no-repeat bg-cover bg-center">
        <span className="absolute text-[2rem] font-bold ml-[160px] mb-[15px] text-theme-orange">
          {userIMC.imc.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center px-6 mt-2">
        <p className="text-center max-w-[80%]">
          <span className="font-bold">Com base na OMS</span>, o IMC recomendado
          e de <span className="text-[#1AA5F7] font-bold">22.5</span> para estar
          dentro de uma faixa saudavel
        </p>

        <div className="flex flex-row items-center justify-center gap-2 mt-2 ">
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

export { IMCChart };
