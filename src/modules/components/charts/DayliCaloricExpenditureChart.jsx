import { useContext, useState, useMemo } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";

import dynamic from "next/dynamic";

const DayliCaloricExpenditureChart = ({ isWeightGain }) => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);
  const [tmb, setTmb] = useState();

  const calcSeries = useMemo(() => {
    if (user) {
      // 655.1 + (9.563 X weight in kilos) + (1.85 X height in cm) – (4.676 x age in years)
      const tmb =
        655.1 +
        9.563 * parseInt(user.weight) +
        1.85 * parseInt(user.height) -
        4.676 * parseInt(user.age);

      const finalTmb = tmb * user.activity;

      setTmb(finalTmb);

      const value = finalTmb * 100;
      const total = 5000;
      const percentage = value / total;

      return percentage;
    } else {
      return 0;
    }
  }, [user]);

  const handleCalcConsumption = useMemo(() => {
    if (user.objective === "weightLoss") {
      const _1 = tmb - 1000;
      const _2 = tmb - 500;

      return `${_1.toFixed(0)}-${_2.toFixed(0)}Cal`;
    } else if (user.objective === "weightGain") {
      const _1 = tmb + 1000;
      const _2 = tmb + 500;

      return `${_1.toFixed(0)}-${_2.toFixed(0)}Cal`;
    } else if (user.objective === "idealWeight") {
      const _1 = tmb + 500;
      const _2 = tmb + 500;

      return `${_1.toFixed(0)}-${_2.toFixed(0)}Cal`;
    }
  }, [tmb, user]);

  const options = {
    series: [calcSeries],
    options: {
      chart: {
        type: "radialBar",
        sparkline: {
          enabled: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#1D3E59",
          },
          hollow: {
            margin: 15,
            size: "65px",
          },

          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        colors: ["#FF810C"],
        type: "solid",
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 2,
        },
      },
      labels: ["Average Results"],
      stroke: {
        lineCap: "round",
        width: 1,
      },
    },
  };

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
            Restringir calorias da maneira errada pode ocasionar uma série de
            problemas, dentre eles, aumento da idade metabólica e dificuldade de
            perda de gordura, flacidez, falta de energia e muito mais. Por isso
            é importante ter um planejamento feito da maneira correta para o seu
            corpo.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-bold text-black">Calorias Diárias</span>

        <button
          onClick={() => setShowTip(true)}
          className="relative flex items-center justify-center w-8 h-8 font-bold leading-none border rounded-full border-black"
        >
          <div className="absolute inset-0 border rounded-full border-black animate-ping" />
          ?
        </button>
      </div>

      <div className="flex flex-col items-start justify-start">
        <div className="text-black">Recomendado</div>
        <div className="font-bold text-[1.25rem]">{handleCalcConsumption}</div>
      </div>

      <div className="flex w-full relative mt-[100px] mb-[-50px]">
        <div className="flex justify-center items-center relative w-full max-h-[200px] min-h-[200px] ">
          {typeof window !== "undefined" && (
            <Chart
              options={options.options}
              type="radialBar"
              series={options.series}
              className="absolute w-[300px] h-[300px] scale-150"
            />
          )}

          <div className="flex justify-center items-center flex-col top-[-15%]  absolute">
            <span className="text-[#FF810C] text-[1rem] font-bold">
              {handleCalcConsumption}
            </span>
            <span className="text-[0.875rem]">Calorias</span>
          </div>

          <span className="z-[3] absolute bottom-[55%] ml-[240px] text-[0.75rem]">
            5000
          </span>
          <span className="z-[3] absolute bottom-[55%] mr-[240px]  text-[0.75rem]">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export { DayliCaloricExpenditureChart };
