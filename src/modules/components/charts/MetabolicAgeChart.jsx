import { useContext, useState, useEffect } from "react";
import { userContext } from "@/services/userContext";

import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";

import dynamic from "next/dynamic";

const MetabolicAgeChart = ({ isWeightGain }) => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const { user, setUser } = useContext(userContext);

  const [showTip, setShowTip] = useState(false);
  const [idadeMetabolica, setIdadeMetabolica] = useState(0);
  const [series, setSeries] = useState([]);

  const calcularIdadeMetabolica = (age, height, weight) => {
    const tmbEsperada =
      10 * parseInt(weight) + 6.25 * parseInt(height) - 5 * parseInt(age) - 161;

    // Fórmula de Harris-Benedict para TMB
    let tmb =
      447.593 +
      9.247 * parseInt(weight) +
      3.098 * parseInt(height) -
      4.33 * parseInt(age);

    console.log("TMB Observada: " + tmb.toFixed(2));
    console.log("TMB Esperada: " + tmbEsperada);

    // Calcular idade metabólica
    const _idadeMetabolica = (tmb / tmbEsperada) * 100;

    return Math.floor(_idadeMetabolica);
  };

  const options = {
    chart: {
      height: 200,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    colors: ["#bf51e8", "#f53372"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top", // top, center, bottom
        },
        columnWidth: "98%",
        barHeight: "100%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return val;
      },
      offsetY: -35,
      style: {
        fontSize: "24px",
        colors: ["#000"],
        fontFamily: "Plus Jakarta Sans",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  useEffect(() => {
    const _idadeMetabolica = calcularIdadeMetabolica(
      user.age,
      user.height,
      user.weight
    );

    setIdadeMetabolica(_idadeMetabolica);

    console.log(_idadeMetabolica);

    setSeries([
      {
        name: "Idade metabólica",
        data: [user.age, _idadeMetabolica],
      },
    ]);
  }, []);

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
        <span className="text-2xl font-bold text-black">Idade metabólica</span>

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
          A <b>idade metabólica</b> é um indicador da idade do seu corpo
        </div>
      </div>

      <div className="relative flex flex-col w-full gap-2">
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="120%"
            className="-ml-[32%]"
          />
        )}

        <div className="absolute left-1.5 w-1/2 text-center text-xs bottom-4">
          Sua idade real
        </div>

        <div className="absolute right-0 w-1/2 text-xs text-center bottom-4">
          Sua idade metabólica
        </div>
      </div>
    </div>
  );
};

export { MetabolicAgeChart };
