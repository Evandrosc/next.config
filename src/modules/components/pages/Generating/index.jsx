import { useContext, useEffect, useState, Fragment } from "react";
import { userContext } from "@/services/userContext";

import { XMarkIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import { Dialog, Transition } from "@headlessui/react";

import {
  FadeInWhenVisible,
  PercentageGoingUp,
} from "@/modules/components/animations";
import Image from "next/image";

const Generating = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);

  const [isWeightGain, setIsWeightGain] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);

  useEffect(() => {
    if (parseInt(user.desiredWeight) > parseInt(user.weight))
      setIsWeightGain(true);
  }, []);

  // Percentage
  const [percentage, setPercentage] = useState(1);

  const easeOut = (t) => t * (2 - t); // Basic ease-out function

  const calculateSpeed = (currentPercentage) => {
    const firstAccelerationThreshold = 10;
    const secondAccelerationThreshold = 70;
    const thirdAccelerationThreshold = 90;
    let accelerationFactor = currentPercentage / secondAccelerationThreshold;

    if (currentPercentage < firstAccelerationThreshold) {
      return 2 * easeOut(accelerationFactor); // Adjust this factor for acceleration
    }

    if (currentPercentage < secondAccelerationThreshold) {
      return 1 * easeOut(accelerationFactor); // Adjust this factor for acceleration
    }

    if (currentPercentage < thirdAccelerationThreshold) {
      return 0.1 * easeOut(accelerationFactor); // Adjust this factor for acceleration
    } else {
      // Decelerate after reaching 80%
      const decelerationFactor =
        (currentPercentage - secondAccelerationThreshold) /
        (100 - secondAccelerationThreshold);
      return 0.05 * easeOut(1 - decelerationFactor); // Adjust this factor for deceleration
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const speed = calculateSpeed(prevPercentage);
        const newPercentage = prevPercentage + speed;

        if (newPercentage > 99.9) {
          setShowTipModal(true);
          return 100;
        }

        return newPercentage;
      });
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <>
      <Transition appear show={showTipModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowTipModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="flex flex-col items-center justify-center w-full max-w-md gap-3 p-6 pt-4 overflow-hidden text-left transition-all transform border shadow-xl rounded-xl backdrop-blur-lg "
                  style={{
                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "11px",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    background: "rgba(255, 255, 255, 0.60)",
                  }}
                >
                  <button onClick={() => setShowTipModal(false)}>
                    <XMarkIcon className="w-10 h-10 text-black/50" />
                  </button>

                  <div className="flex flex-col items-center justify-center gap-2 mb-1 text-center text-xl max-w-[70%] font-bold">
                    Terminamos de montar seu plano!
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePageUpdate("finish")}
                    className="z-20 w-full px-4 mx-auto font-bold rounded-full cursor-pointer shrink-0"
                  >
                    <div className="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
                      <div className="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
                        <div className="rounded-full bg-blue-gradient-2 shadow-bluedrop flex h-full w-full items-center justify-center p-2.5 text-black">
                          <span className="z-10 max-w-[85%] text-base">
                            AVANÇAR
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center w-full gap-6 px-4 pt-5">
          <img
            src="/images/logo-start.png"
            className="w-24 h-auto "
            width={475}
            height={475}
          />
        </section>

        <section className="flex flex-col items-center justify-center w-full px-4 pt-8 pb-12">
          <div
            className="flex flex-col items-center justify-center w-full gap-4 px-4 py-8"
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <span className="loader">
              <PercentageGoingUp percentage={percentage} />
            </span>

            <div className="flex flex-col items-center justify-center gap-6 leading-tight text-black/50">
              <div className="font-bold text-center ">
                Enquanto montamos <br />
                seu plano...
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center mb-1">
          <div className="text-xl font-bold text-center text-black">
            Entenda a{" "}
            <span className="text-transparent bg-clip-text bg-pink-gradient">
              verdade
            </span>{" "}
            <span className="text-black">sobre o </span>
          </div>

          <img
            src="/images/emagrecimento.svg"
            className="w-full h-auto -mt-7"
            width={475}
            height={475}
          />

          <ArrowDownIcon className="w-8 h-8" />
        </div>

        <section className="flex flex-col items-center justify-center w-full gap-4 px-4 pt-5 pb-10">
          <FadeInWhenVisible className="flex flex-col">
            <Image
              src="/images/comparison.png"
              className="h-auto mt-4 rounded-t-lg w-full max-w-[400px]"
              width={475}
              height={475}
            />

            <div
              className="p-6 rounded-b-lg w-full max-w-[400px] text-black/70"
              style={{
                boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                backdropFilter: "blur(10px)",
                borderRadius: "11px",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                background: "rgba(255, 255, 255, 0.20)",
              }}
            >
              Como você pode observar, a gordura é muito maior e é ela que muda
              a<span className="font-semibold text-black"> estética</span> e{" "}
              <span className="font-semibold text-black">prejudica</span> a
              saúde. Por isso, o segredo do emagrecimento, é focar em{" "}
              <span className="font-semibold text-black">
                reduzir a gordura corporal.
              </span>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible
            className="p-6 rounded-lg  w-full max-w-[400px] text-black/70"
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <div>
              O problema é que após um{" "}
              <span className="font-semibold text-black">
                estudo feito com 62.000 mulheres pela universidade de Yale - EUA
              </span>
              , foi descoberto um problema em comum:
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible className="p-px rounded-lg w-full max-w-[400px] ">
            <div
              className="w-full p-6 text-black border rounded-lg bg-orange-500/90 border-orange-500/10 shadow-pinkdrop"
              style={{
                // boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                backdropFilter: "blur(10px)",
                borderRadius: "11px",
                // border: "1px solid rgba(255, 255, 255, 0.22)",
                // background: "rgba(255, 255, 255, 0.20)",
              }}
            >
              <div className="flex items-center justify-start gap-4">
                <XMarkIcon className="w-8 h-8 p-1 text-white rounded-full bg-black/10" />

                <span className="flex-1 font-semibold text-white">
                  Desequilíbrio hormonal que impede a queima de gordura.
                </span>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible
            className="p-6 text-black rounded-lg  w-full max-w-[400px]"
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            Então se você já tentou de tudo e nunca conseguiu ter resultados ou
            se você vive lutando contra o efeito sanfona não se preocupe…
          </FadeInWhenVisible>

          <FadeInWhenVisible
            className="w-full text-2xl font-bold text-center text-black break-words"
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            Não é sua culpa e existe uma
            <span className="relative after:absolute after:inset-0 after:-bottom-5 after:z-[0] z-[2] after:bg-bottom after:bg-no-repeat after:bg-contain after:bg-[url('/images/underline.svg')] whitespace-nowrap">
              &nbsp;Solução pra isso!
            </span>
          </FadeInWhenVisible>
        </section>

        <section className="flex flex-col items-center justify-center w-full gap-6 px-4 pt-6">
          <FadeInWhenVisible
            className="p-6 rounded-lg  w-full max-w-[400px] text-black/70"
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            Ao fim desse estudo, os especialistas americanos desenvolveram um
            protocolo alimentar que usa uma nova forma de combinar alimentos
            para
            <span className="font-semibold text-black">
              &nbsp; destravar a queima de gordura.
            </span>
          </FadeInWhenVisible>
        </section>

        <section className="relative flex flex-col items-center justify-center w-full gap-6 px-4">
          <FadeInWhenVisible className="p-6 rounded-lg w-full max-w-[400px] text-black flex flex-col items-center justify-center gap-2 z-[3]">
            Hoje ele é conhecido como...
            <div className="relative flex flex-col items-center justify-center text-4xl font-bold text-center text-black mb-7">
              &nbsp; Protocolo{" "}
              <div className="relative before:absolute before:inset-0 before:-bottom-8 before:z-[0] before:bg-bottom before:bg-no-repeat before:bg-contain before:bg-[url('/images/underline-blue.svg')]">
                <span className="relative z-[2]">Queima Gordura</span>
              </div>
            </div>
            &nbsp;e é dividido em 2 fases:
          </FadeInWhenVisible>
        </section>

        <section className="flex flex-col items-center justify-center w-full gap-6 px-4 pb-10">
          <FadeInWhenVisible className="flex flex-col gap-2">
            <div
              className="p-6 rounded-t-lg  w-full max-w-[400px] text-black flex flex-col gap-4 justify-center items-start border-b border-b-black"
              style={{
                boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                backdropFilter: "blur(10px)",
                borderRadius: "11px",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                background: "rgba(255, 255, 255, 0.20)",
              }}
            >
              <span className="text-4xl font-bold text-transparent capitalize bg-clip-text bg-pink-gradient">
                01
              </span>

              <div>
                Regulação do organismo para destravar a queima de gordura
              </div>

              <div className="font-semibold text-black">
                Estimativa de 2 a 8 quilos de gordura reduzidos nos primeiros 7
                dias
              </div>
            </div>

            <div
              className="p-6 rounded-b-lg  w-full max-w-[400px] text-black flex flex-col gap-4 justify-center items-start"
              style={{
                boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                backdropFilter: "blur(10px)",
                borderRadius: "11px",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                background: "rgba(255, 255, 255, 0.20)",
              }}
            >
              <span className="text-4xl font-bold text-transparent capitalize bg-clip-text bg-pink-gradient">
                02
              </span>

              <div>
                Manutenção para continuar reduzindo medidas sem enfrentar o
                efeito ioiô.
              </div>

              <div className="font-semibold text-black">
                Fase focada em atingir sua meta particular
              </div>
            </div>
          </FadeInWhenVisible>

          <button
            class="rounded-full z-20 mx-auto w-full shrink-0 cursor-pointer font-bold animate-pulse"
            onClick={() => handlePageUpdate("finish")}
          >
            <div class="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
              <div class="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
                <div class="rounded-full bg-blue-gradient-2 shadow-bluedrop flex h-full w-full items-center justify-center p-2.5 text-black">
                  <span class="z-10 max-w-[85%] text-base text-white">
                    QUERO TER ACESSO AO MEU PROTOCOLO!
                  </span>
                </div>
              </div>
            </div>
          </button>
        </section>
      </div>
    </>
  );
};

export { Generating };
