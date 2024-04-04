import { useContext, useState } from "react";
import { userContext } from "@/services/userContext";

import { InputMask } from "@react-input/mask";
import toast from "react-hot-toast";

import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const UserInfo2 = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);

  const [userActivity, setUserActivity] = useState(0);

  const saveUserInfo = (evt) => {
    evt.preventDefault();

    toast.loading("Enviando dados para análise...");

    const data = {
      activity: userActivity,
    };

    setUser({ ...user, ...data });

    setTimeout(() => {
      toast.dismiss();
      toast.success("Seus dados foram enviados!");
      handlePageUpdate("charts");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={saveUserInfo}
        className="flex flex-col items-center justify-center gap-8 px-4 pt-5 pb-10"
      >
        <Image
          src="/images/logo-start.png"
          className="w-24 h-auto"
          width={475}
          height={475}
        />

        <div
          className="flex flex-col items-start justify-center w-full p-6 pb-8 rounded-lg shadow-xl gap-9 "
          style={{
            boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
            backdropFilter: "blur(10px)",
            borderRadius: "11px",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            background: "rgba(255, 255, 255, 0.20)",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-left text-transparent bg-clip-text bg-pink-gradient">
              Análise Corporal
            </div>

            <div className="text-sm text-black/50">
              Preencha os campos abaixo para calcular seu{" "}
              <span className="font-bold">Plano Alimentar</span> e atingir o
              resultado que busca.
            </div>
          </div>

          <div className="flex flex-col w-full gap-7">
            <div className="flex flex-col w-full gap-3">
              <label className="text-sm font-bold text-left text-black">
                Frequência de exercícios semanais
              </label>

              <ul className="flex flex-col items-center justify-center w-full gap-4 py-2">
                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-0"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() => {
                      window.scrollTo({ top: 999, behavior: "smooth" });
                      setUserActivity(1.2);
                    }}
                  />
                  <label
                    htmlFor="activity-0"
                    className="flex items-center justify-center w-full px-5 py-4 transition-colors border rounded-full cursor-pointer border-black/50 text-black/50 peer-checked:text-theme-orange peer-checked:border-theme-orange group"
                  >
                    <div className="flex-1 font-semibold">
                      Não faço atividade
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border rounded-full border-black/50 group-peer-checked:border-black/50/0 group-peer-checked:bg-theme-orange">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-1"
                    name="activity"
                    value="1"
                    className="hidden peer"
                    onClick={() => {
                      window.scrollTo({ top: 999, behavior: "smooth" });
                      setUserActivity(1.375);
                    }}
                  />
                  <label
                    htmlFor="activity-1"
                    className="flex items-center justify-center w-full px-5 py-4 transition-colors border rounded-full cursor-pointer border-black/50 text-black/50 peer-checked:text-theme-orange peer-checked:border-theme-orange group"
                  >
                    <div className="w-full font-semibold">
                      Quase nenhuma atividade
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border rounded-full border-black/50 group-peer-checked:border-black/50/0 group-peer-checked:bg-theme-orange">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-2"
                    name="activity"
                    value="2"
                    className="hidden peer"
                    onClick={() => {
                      window.scrollTo({ top: 999, behavior: "smooth" });
                      setUserActivity(1.55);
                    }}
                  />
                  <label
                    htmlFor="activity-2"
                    className="flex items-center justify-center w-full px-5 py-4 transition-colors border rounded-full cursor-pointer border-black/50 text-black/50 peer-checked:text-theme-orange peer-checked:border-theme-orange group"
                  >
                    <div className="w-full font-semibold">
                      1-2 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border rounded-full border-black/50 group-peer-checked:border-black/50/0 group-peer-checked:bg-theme-orange">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-3"
                    name="activity"
                    value="3"
                    className="hidden peer"
                    onClick={() => {
                      window.scrollTo({ top: 999, behavior: "smooth" });
                      setUserActivity(1.725);
                    }}
                  />
                  <label
                    htmlFor="activity-3"
                    className="flex items-center justify-center w-full px-5 py-4 transition-colors border rounded-full cursor-pointer border-black/50 text-black/50 peer-checked:text-theme-orange peer-checked:border-theme-orange group"
                  >
                    <div className="w-full font-semibold">
                      3-5 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border rounded-full border-black/50 group-peer-checked:border-black/50/0 group-peer-checked:bg-theme-orange">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-4"
                    name="activity"
                    value="4"
                    className="hidden peer"
                    onClick={() => {
                      window.scrollTo({ top: 999, behavior: "smooth" });
                      setUserActivity(1.9);
                    }}
                  />
                  <label
                    htmlFor="activity-4"
                    className="flex items-center justify-center w-full px-5 py-4 transition-colors border rounded-full cursor-pointer border-black/50 text-black/50 peer-checked:text-theme-orange peer-checked:border-theme-orange group"
                  >
                    <div className="w-full font-semibold">
                      5-7 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border rounded-full border-black/50 group-peer-checked:border-black/50/0 group-peer-checked:bg-theme-orange">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="z-20 w-full mx-auto font-bold rounded-full cursor-pointer shrink-0 animate-pulse"
        >
          <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
            <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
              <div className="rounded-full bg-pink-gradient-2 shadow-pinkdrop flex h-full w-full items-center justify-center p-2.5 text-white">
                <span className="z-10 max-w-[85%] text-base">AVANÇAR</span>
              </div>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export { UserInfo2 };
