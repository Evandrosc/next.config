import { userContext } from "@/services/userContext";
import {
  ArrowDownIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useCallback, useContext } from "react";

const Initial = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);

  const handleSaveUserData = useCallback((objective) => {
    handlePageUpdate("userInfo");
    setUser({ ...user, objective });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white/40">
      <section className="flex flex-col items-center justify-center gap-8 px-4 pt-5 mb-12">
        <Image
          src="/images/logo-start.png"
          className="w-32 h-auto"
          width={192}
          height={125}
        />

        <div className="text-[22px] font-bold text-center text-black">
          Protocolo alimentar{" "}
          <span className="text-transparent bg-clip-text bg-pink-gradient">
            sem restrições{" "}
          </span>
          usa nova forma de combinar alimentos para{" "}
          <span className="text-transparent bg-clip-text bg-pink-gradient">
            destravar a queima de
          </span>
        </div>
        <Image
          src="/images/gordura.svg"
          width={250}
          height={125}
          alt=""
          className="mt-[-3.5rem] mb-[-1rem]"
        />
      </section>

      <section className="flex flex-col w-full gap-8">
        <div className="px-5">
          <div className="text-center text-black/50 backdrop-blur-xl shadow-lg shadow-sky-700/20 bg-white/30 border border-white/50 pt-4 px-4 pb-6 -mb-10 rounded-t-lg font-bold text-[14px] relative">
            Baseado em nova pesquisa da universidade de{" "}
            <span className="text-cyan-600">Yale - EUA</span>, este método ja
            está ajudando centenas de pessoas aqui no Brasil.

            <div className="absolute left-0 right-0 -bottom-4 scale-[1.005] h-8 bg-gradient-to-b from-[#fdf8e4] to-[#fcf4d8]">

            </div>
          </div>
        </div>

        <div className="pl-4">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={500}
            loop={true}
            spaceBetween={5}
            slidesPerView={1.2}
            className="w-full overflow-visible"
            modules={[Autoplay]}
          >
            {Array(10)
              .fill(" ")
              .map((item, index) => {
                return (
                  <SwiperSlide key={index + Math.random(1.5)}>
                    <Image
                      src={`/images/${index + 1}.png`}
                      alt={`depoimento-${index + 1}`}
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 px-4 pb-8 mt-8">
        <div className="flex items-center justify-between px-3 pb-2">
          <span className="flex flex-col flex-1 font-bold text-center">
            <span className="">Faça uma</span>
            <span className="py-1 text-4xl text-transparent bg-clip-text bg-pink-gradient">
              Simulação gratuita
            </span>
            <span className="text-sm text-black/50 mt-0.5">
              para ser a próxima história de sucesso!
            </span>
          </span>
        </div>

        <button
          onClick={() => handleSaveUserData("weightLoss")}
          class="animate-jump rounded-full z-20 mx-auto w-[90%] shrink-0 cursor-pointer font-bold"
        >
          <div class="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
            <div class="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
              <div class="rounded-full bg-pink-gradient-2 shadow-pinkdrop flex h-full w-full items-center justify-center p-2.5 text-white">
                <span class="z-10 max-w-[85%] text-base">
                  ELIMINAR GORDURA E REDUZIR MEDIDAS
                </span>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleSaveUserData("idealWeight")}
          class="animate-jump-2 rounded-full z-20 mx-auto w-[90%] shrink-0 cursor-pointer font-bold"
        >
          <div class="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
            <div class="rounded-full bg-blue-gradient-3 h-full w-full p-2.5">
              <div class="rounded-full bg-blue-gradient-2 shadow-bluedrop flex h-full w-full items-center justify-center p-2.5 text-white">
                <span class="z-10 max-w-[85%] text-base">
                  ATINGIR PESO IDEAL
                </span>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleSaveUserData("weightGain")}
          class="animate-jump-3 rounded-full z-20 mx-auto w-[86%] shrink-0 cursor-pointer font-bold"
        >
          <div class="rounded-full bg-green-gradient-3 h-full w-full p-2.5">
            <div class="rounded-full bg-green-gradient-3 h-full w-full p-2.5">
              <div class="rounded-full bg-green-gradient-2 shadow-greendrop flex h-full w-full items-center justify-center p-2.5 text-white">
                <span class="z-10 max-w-[85%] text-base">
                  GANHAR MASSA MAGRA
                </span>
              </div>
            </div>
          </div>
        </button>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 p-4">
        <EllipsisHorizontalIcon className="w-8 text-black/25" />

        <div className="text-xs text-center text-black">
          Este site não é afiliado ao Facebook ou a qualquer entidade do
          Facebook. Depois que você sair do Facebook, a responsabilidade não é
          deles e sim do nosso site. Fazemos todos os esforços para indicar
          claramente e mostrar todas as provas do produto e usamos resultados
          reais. Nós não vendemos o seu e-mail ou qualquer informação para
          terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma
          dúvida, sinta-se à vontade para usar o link de contato e falar conosco
          em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e
          respondemos todas as mensagens por ordem de chegada.
        </div>
      </section>
    </div>
  );
};

export { Initial };
