import { useContext, useEffect, useState } from "react";
import { userContext } from "@/services/userContext";

import { AnimatePresence, motion } from "framer-motion";

import { Carbs, Fats, Fibers, Proteins } from "@/modules/components/questions";
import Image from "next/image";

const Quizz = ({ handlePageUpdate }) => {
  const { user, setUser } = useContext(userContext);

  const [question, setQuestion] = useState("proteins");
  const [activeSteps, setActiveSteps] = useState([]);

  const questions = {
    proteins: <Proteins handleQuestionUpdate={setQuestion} />,
    carbs: <Carbs handleQuestionUpdate={setQuestion} />,
    fibers: <Fibers handleQuestionUpdate={setQuestion} />,
    fats: (
      <Fats
        handleQuestionUpdate={setQuestion}
        handlePageUpdate={handlePageUpdate}
      />
    ),
  };

  const getActiveSteps = (step) => {
    const activeStep = Object.keys(questions).indexOf(step);

    let _steps = [];

    for (let index = 0; index < activeStep + 1; index++) {
      _steps.push(Object.keys(questions)[index]);
    }

    // if (_steps.length == 0) _steps.push(Object.keys(questions)[0]);
    if (_steps.length == questions.length - 1)
      _steps.push(Object.keys(questions)[questions.length - 1]);

    setActiveSteps(_steps);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    getActiveSteps(question);
  }, [question]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <section className="z-10 flex flex-col items-center justify-center w-full gap-8 pt-5 pb-10">
        <Image
          src="/images/logo-start.png"
          className="w-24 h-auto "
          width={475}
          height={475}
        />

        <ol class="flex items-center justify-center w-full max-w-[300px]">
          {Object.keys(questions).map((step, i) => {
            if (i + 1 == Object.keys(questions).length) {
              if (activeSteps.includes(step))
                return (
                  <li key={step} class="flex w-fit items-center">
                    <span class="flex items-center justify-center w-6 h-6 bg-theme-orange rounded-full lg:h-12 lg:w-12 shrink-0" />
                  </li>
                );

              return (
                <li key={step} class="flex w-fit items-center">
                  <span
                    class="flex items-center justify-center w-6 h-6  rounded-full lg:h-12 lg:w-12 shrink-0"
                    style={{
                      boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "11px",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      background: "rgba(0, 0, 0, 0.22)",
                    }}
                  ></span>
                </li>
              );
            }

            if (activeSteps.includes(step))
              return (
                <li
                  key={step}
                  class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-500 after:border-4 after:inline-block "
                >
                  <span class="flex items-center justify-center w-6 h-6 bg-theme-orange rounded-full lg:h-12 lg:w-12  shrink-0" />
                </li>
              );

            return (
              <li
                key={step}
                class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#151226]/10 after:border-4 after:inline-block "
              >
                <span
                  class="flex items-center justify-center w-6 h-6  rounded-full lg:h-12 lg:w-12 shrink-0"
                  style={{
                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "11px",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    background: "rgba(0, 0, 0, 0.22)",
                  }}
                ></span>
              </li>
            );
          })}
        </ol>

        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={question}
          >
            {questions[question]}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export { Quizz };
