import { useState } from "react";
import { plus } from "../../assets";
import { faq } from "../../constants";
import Section from "../Section";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section className="bg-grey bg-opacity-50">
      <div
        id="faq"
        className="container flex flex-col justify-between gap-20 lg:flex-row"
      >
        <div className="shrink-0 space-y-2 max-lg:text-center md:space-y-4">
          <h2>
            Frequently <br className="max-lg:hidden" /> asked questions
          </h2>
          <Link
            to="/contact"
            className="text-base font-medium text-royalBlue text-opacity-[0.87] lg:text-lg"
          >
            Contact us for more info
          </Link>
        </div>
        <div className="flex-1 space-y-4 sm:max-lg:px-4 md:space-y-10 xl:space-y-12">
          {faq.map((q, i) => (
            <div key={q.id} className="border-b-2 pb-4 md:pb-10 xl:pb-12">
              <div className="flex items-center justify-between gap-4">
                <div className="flex">
                  <h6 className="mr-4 font-semibold text-royalBlue md:mr-8 xl:mr-12">
                    {q.number}
                  </h6>
                  <h6>{q.question}</h6>
                </div>
                <button
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                >
                  <motion.img
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openQuestion === i ? 45 : 0 }}
                    src={plus}
                    alt=""
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              {openQuestion == i && (
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,
                    transition: {
                      ease: "linear",
                    },
                  }}
                  className="mt-10 text-xs font-medium lg:text-lg"
                >
                  {q.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
