import { useContext } from "react";
import { userContext } from "@/services/userContext";

import { InputMask } from "@react-input/mask";
import toast from "react-hot-toast";

import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const UserInfo = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);

  const _i8n = {
    age: "idade",
    height: "altura",
    weight: "peso",
    desiredWeight: "peso desejado",
    activity: "atividade física",
  };

  const saveUserInfo = (evt) => {
    evt.preventDefault();

    toast.loading("Enviando dados para análise...");

    const data = {
      name: evt.target.name.value || user.name,
      age: evt.target.age.value || user.age,
      height: evt.target.height.value || user.height,
      weight: evt.target.weight.value || user.weight,
      desiredWeight: evt.target.desiredWeight.value || user.desiredWeight,
    };

    setUser({ ...user, ...data });

    setTimeout(() => {
      toast.dismiss();
      toast.success("Seus dados foram enviados!");
      handlePageUpdate("userInfo2");
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
          className="w-24 h-auto "
          width={475}
          height={475}
        />

        <div className="flex flex-col items-start justify-center w-full gap-10 p-6 pb-8 border rounded-lg shadow-lg shadow-cyan-800/20 border-white/50 bg-white/30 backdrop-blur-xl">
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

          <div className="flex flex-col w-full gap-9">
            <div class="relative">
              <InputMask
                defaultValue={user.name || ""}
                required
                mask="________________________________________________________________________________________________________________________________________________________________"
                replacement={{ _: /^[a-zA-Z\s]*$/ }}
                placeholder="  "
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Nome
              </label>
            </div>

            <div class="relative">
              <InputMask
                defaultValue={user.age == 0 ? "" : user.age}
                required
                inputmode="numeric"
                mask="___"
                replacement={{ _: /\d/ }}
                placeholder="  "
                type="text"
                id="age"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              />
              <label
                htmlFor="age"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Idade
              </label>

              <label
                htmlFor="age"
                className="absolute px-2 text-sm -translate-y-1/2 top-1/2 right-1.5 text-black"
              >
                anos
              </label>
            </div>

            <div class="relative">
              <InputMask
                defaultValue={user.height == 0 ? "" : user.height}
                required
                inputmode="numeric"
                mask="___"
                replacement={{ _: /\d/ }}
                placeholder="  "
                type="text"
                id="height"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              />
              <label
                htmlFor="height"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Altura (CM)
              </label>

              <label
                htmlFor="height"
                className="absolute px-2 text-sm -translate-y-1/2 top-1/2 right-1.5 text-black"
              >
                cm
              </label>
            </div>

            <div class="relative">
              <InputMask
                defaultValue={user.weight == 0 ? "" : user.weight}
                required
                inputmode="numeric"
                mask="___"
                replacement={{ _: /\d/ }}
                placeholder="  "
                type="text"
                id="weight"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              />
              <label
                htmlFor="weight"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Peso (KG)
              </label>

              <label
                htmlFor="weight"
                className="absolute px-2 text-sm -translate-y-1/2 top-1/2 right-1.5 text-black"
              >
                kg
              </label>
            </div>

            <div class="relative">
              <InputMask
                required
                defaultValue={user.desiredWeight == 0 ? "" : user.desiredWeight}
                inputmode="numeric"
                mask="___"
                replacement={{ _: /\d/ }}
                placeholder="  "
                type="text"
                id="desiredWeight"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              />
              <label
                htmlFor="desiredWeight"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Meta de peso (KG)
              </label>

              <label
                htmlFor="desiredWeight"
                className="absolute px-2 text-sm -translate-y-1/2 top-1/2 right-1.5 text-black"
              >
                kg
              </label>
            </div>

            {/* <div className="flex flex-col w-full gap-3">
              <label className="text-sm font-bold text-left text-transparent bg-clip-text bg-blue-gradient">
                6. Frequência de exercícios semanais
              </label>

              <ul className="flex flex-col items-center justify-center w-full gap-4 py-2">
                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-0"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() =>
                      window.scrollTo({ top: 999, behavior: "smooth" })
                    }
                    defaultChecked
                  />
                  <label
                    htmlFor="activity-0"
                    className="flex items-center justify-center w-full px-5 py-4 text-gray-500 transition-colors border border-gray-500 rounded-full cursor-pointer peer-checked:text-pink-500 peer-checked:border-pink-500 group"
                  >
                    <div className="flex-1 font-semibold">
                      Não faço atividade
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border border-gray-500 rounded-full group-peer-checked:border-gray-500/0 group-peer-checked:bg-pink-500">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-1"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() =>
                      window.scrollTo({ top: 999, behavior: "smooth" })
                    }
                  />
                  <label
                    htmlFor="activity-1"
                    className="flex items-center justify-center w-full px-5 py-4 text-gray-500 transition-colors border border-gray-500 rounded-full cursor-pointer peer-checked:text-pink-500 peer-checked:border-pink-500 group"
                  >
                    <div className="w-full font-semibold">
                      Quase nenhuma atividade
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border border-gray-500 rounded-full group-peer-checked:border-gray-500/0 group-peer-checked:bg-pink-500">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-2"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() =>
                      window.scrollTo({ top: 999, behavior: "smooth" })
                    }
                  />
                  <label
                    htmlFor="activity-2"
                    className="flex items-center justify-center w-full px-5 py-4 text-gray-500 transition-colors border border-gray-500 rounded-full cursor-pointer peer-checked:text-pink-500 peer-checked:border-pink-500 group"
                  >
                    <div className="w-full font-semibold">
                      1-2 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border border-gray-500 rounded-full group-peer-checked:border-gray-500/0 group-peer-checked:bg-pink-500">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-3"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() =>
                      window.scrollTo({ top: 999, behavior: "smooth" })
                    }
                  />
                  <label
                    htmlFor="activity-3"
                    className="flex items-center justify-center w-full px-5 py-4 text-gray-500 transition-colors border border-gray-500 rounded-full cursor-pointer peer-checked:text-pink-500 peer-checked:border-pink-500 group"
                  >
                    <div className="w-full font-semibold">
                      3-5 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border border-gray-500 rounded-full group-peer-checked:border-gray-500/0 group-peer-checked:bg-pink-500">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>

                <li className="w-full">
                  <input
                    type="radio"
                    id="activity-4"
                    name="activity"
                    value="0"
                    className="hidden peer"
                    onClick={() =>
                      window.scrollTo({ top: 999, behavior: "smooth" })
                    }
                  />
                  <label
                    htmlFor="activity-4"
                    className="flex items-center justify-center w-full px-5 py-4 text-gray-500 transition-colors border border-gray-500 rounded-full cursor-pointer peer-checked:text-pink-500 peer-checked:border-pink-500 group"
                  >
                    <div className="w-full font-semibold">
                      5-7 vezes por semana
                    </div>

                    <div className="flex items-center justify-center w-6 h-6 p-1 transition-all border border-gray-500 rounded-full group-peer-checked:border-gray-500/0 group-peer-checked:bg-pink-500">
                      <CheckIcon className="text-white transition-opacity opacity-0 group-peer-checked:opacity-100" />
                    </div>
                  </label>
                </li>
              </ul>
            </div> */}
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

export { UserInfo };
