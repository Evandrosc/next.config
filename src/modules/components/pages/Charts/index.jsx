import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { userContext } from "@/services/userContext";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  WeightChart,
  BodyPercentagesChart,
  BodyComparisonChart,
  MetabolicAgeChart,
  IMCChart,
  DayliCaloricExpenditureChart,
  WatterConsumptionChart,
} from "@/modules/components/charts";
import Image from "next/image";

const Charts = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);
  const [isWeightGain, setIsWeightGain] = useState(false);
  const swiperRef = useRef(null);

  const handleStopSwiperAutoPlay = () => {
    if (swiperRef) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  useEffect(() => {
    if (parseInt(user.desiredWeight) > parseInt(user.weight))
      setIsWeightGain(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto">
      <section className="flex flex-col items-center justify-center w-full gap-8 pt-5 pb-10">
        <Image
          src="/images/logo-start.png"
          className="w-24 h-auto"
          width={475}
          height={475}
        />

        <div className="px-4 text-3xl font-bold text-center text-black">
          Sua <span className="text-black">análise corporal</span> está
          pronta,&nbsp;
          <span className="text-3xl font-bold text-transparent capitalize bg-clip-text bg-pink-gradient">
            {user.name.toLowerCase()}!
          </span>
        </div>

        <div className="grid w-full grid-cols-3 gap-2 px-4 -mb-8">
          <div
            className="flex flex-col items-center justify-center w-full h-[145px] gap-2 p-6 font-bold text-center rounded-lg shadow-xl "
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <span className="text-3xl leading-none text-theme-light-blue">
              {user.age}
            </span>
            <span className="text-sm leading-none text-black">Anos</span>
          </div>

          <div
            className="flex flex-col items-center justify-center w-full gap-2 p-6 font-bold text-center rounded-lg shadow-xl "
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <span className="text-3xl leading-none text-theme-light-blue">
              {user.height}
            </span>
            <span className="text-sm leading-none text-black">Altura (cm)</span>
          </div>

          <div
            className="flex flex-col items-center justify-center w-full gap-2 p-6 font-bold text-center rounded-lg shadow-xl "
            style={{
              boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(10px)",
              borderRadius: "11px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <span className="text-3xl leading-none text-theme-light-blue">
              {user.weight}
            </span>
            <span className="text-sm leading-none text-black">Peso (kg)</span>
          </div>
        </div>

        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full !px-4 !py-8"
          modules={[Autoplay]}
          onSlideChange={() => {
            handleStopSwiperAutoPlay();
          }}
          ref={swiperRef}
        >
          <SwiperSlide>
            <WeightChart isWeightGain={isWeightGain} />
          </SwiperSlide>
          <SwiperSlide>
            <BodyPercentagesChart isWeightGain={isWeightGain} />
          </SwiperSlide>
          <SwiperSlide>
            <BodyComparisonChart isWeightGain={isWeightGain} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <MetabolicAgeChart isWeightGain={isWeightGain} />
          </SwiperSlide> */}
          <SwiperSlide>
            <IMCChart isWeightGain={isWeightGain} />
          </SwiperSlide>
          <SwiperSlide>
            <DayliCaloricExpenditureChart isWeightGain={isWeightGain} />
          </SwiperSlide>
          <SwiperSlide>
            <WatterConsumptionChart isWeightGain={isWeightGain} />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col items-center justify-center w-full px-4 -mt-8">
          <button
            type="button"
            onClick={() => handlePageUpdate("quizz")}
            className="z-20 w-full mx-auto font-bold rounded-full cursor-pointer shrink-0"
          >
            <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
              <div className="rounded-full bg-pink-gradient-3 h-full w-full p-2.5">
                <div className="rounded-full bg-pink-gradient-2 shadow-pinkdrop flex h-full w-full items-center justify-center p-2.5 text-black ">
                  <span className="z-10 max-w-[85%] text-base text-white">
                    Baseado na minha análise, quero montar meu protocolo!
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export { Charts };
