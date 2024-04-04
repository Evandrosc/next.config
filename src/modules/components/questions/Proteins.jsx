import { useState, Fragment } from "react";

import {
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";

const Proteins = ({ handleQuestionUpdate }) => {
  const [showTipModal, setShowTipModal] = useState(true);

  return (
    <>
      {/* <Transition appear show={showTipModal} as={Fragment}>
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
                <Dialog.Panel className="flex flex-col items-center justify-center w-full max-w-md gap-3 p-6 pt-4 overflow-hidden text-left transition-all transform border border-black shadow-xl bg-black/20 rounded-xl backdrop-blur-lg">
                  <button onClick={() => setShowTipModal(false)}>
                    <XMarkIcon className="w-10 h-10 text-slate-300" />
                  </button>

                  <div className="flex flex-col items-center justify-center gap-2 mb-2 text-center">
                    O consumo adequado de proteínas preserva a massa muscular
                    enquanto você perde peso, fazendo seu organismo focar na
                    perda de gordura, dessa forma evitando a flacidez.
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 mb-2 text-center">
                    A proteína também ajuda na saciação, fazendo você ter um
                    controle maior sobre o seu apetite.
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowTipModal(false)}
                    className="z-20 w-full px-4 mx-auto font-bold rounded-full cursor-pointer shrink-0"
                  >
                    <div className="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
                      <div className="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
                        <div className="rounded-full bg-blue-gradient-2 shadow-bluedrop flex h-full w-full items-center justify-center p-2.5 text-black">
                          <span className="z-10 max-w-[85%] text-base">OK</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      <div
        className="flex flex-col items-center justify-center w-full gap-3 pb-10 mt-16 rounded-none shadow-lg sm:rounded-lg"
        style={{
          boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
          backdropFilter: "blur(10px)",
          borderRadius: "11px",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          background: "rgba(255, 255, 255, 0.20)",
        }}
      >
        <div
          className="w-48 h-48 p-4 -mt-16 rounded-full "
          style={{
            boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
            backdropFilter: "blur(10px)",
            borderRadius: "11px",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <div className="w-full h-full bg-cover rounded-full bg-center bg-[url('/images/proteina.png')]"></div>
        </div>
        <div className="-mt-2 text-3xl font-bold text-transparent capitalize bg-clip-text bg-pink-gradient">
          Proteína
        </div>

        <div className="px-8 font-bold text-center text-black">
          Selecione os tipos de carne que{" "}
          <span className="text-black">gosta</span> ou tem em casa
        </div>

        <div className="px-8 text-sm text-center text-black">
          Você pode escolher mais de um item
        </div>

        <ul className="grid items-center justify-center w-full grid-cols-2 grid-rows-2 gap-4 px-6 py-6">
          <li className="w-full">
            <input
              type="checkbox"
              id="activity-0"
              name="activity"
              value="0"
              className="hidden peer"
              onClick={() => window.scrollTo({ top: 999, behavior: "smooth" })}
            />
            <label
              htmlFor="activity-0"
              className="flex items-center justify-center w-full p-4 text-gray-500 transition-colors border border-gray-500 rounded-lg cursor-pointer peer-checked:text-sky-500 peer-checked:border-sky-500"
            >
              <div className="w-full font-semibold text-center">Frango</div>
            </label>
          </li>

          <li className="w-full">
            <input
              type="checkbox"
              id="activity-1"
              name="activity"
              value="0"
              className="hidden peer"
              onClick={() => window.scrollTo({ top: 999, behavior: "smooth" })}
            />
            <label
              htmlFor="activity-1"
              className="flex items-center justify-center w-full p-4 text-gray-500 transition-colors border border-gray-500 rounded-lg cursor-pointer peer-checked:text-sky-500 peer-checked:border-sky-500"
            >
              <div className="w-full font-semibold text-center">Carne</div>
            </label>
          </li>

          <li className="w-full">
            <input
              type="checkbox"
              id="activity-2"
              name="activity"
              value="0"
              className="hidden peer"
              onClick={() => window.scrollTo({ top: 999, behavior: "smooth" })}
            />
            <label
              htmlFor="activity-2"
              className="flex items-center justify-center w-full p-4 text-gray-500 transition-colors border border-gray-500 rounded-lg cursor-pointer peer-checked:text-sky-500 peer-checked:border-sky-500"
            >
              <div className="w-full font-semibold text-center">Peixe</div>
            </label>
          </li>

          <li className="w-full">
            <input
              type="checkbox"
              id="activity-3"
              name="activity"
              value="0"
              className="hidden peer"
              onClick={() => window.scrollTo({ top: 999, behavior: "smooth" })}
            />
            <label
              htmlFor="activity-3"
              className="flex items-center justify-center w-full p-4 text-gray-500 transition-colors border border-gray-500 rounded-lg cursor-pointer peer-checked:text-sky-500 peer-checked:border-sky-500"
            >
              <div className="w-full font-semibold text-center">
                Carne Suína
              </div>
            </label>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleQuestionUpdate("carbs")}
          className="z-20 w-full px-6 mx-auto font-bold rounded-full cursor-pointer shrink-0"
        >
          <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
            <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
              <div className="rounded-full bg-pink-gradient-2 shadow-pinkdrop flex h-full w-full items-center justify-center p-2.5 text-black">
                <span className="z-10 max-w-[85%] text-base text-white">AVANÇAR</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export { Proteins };
