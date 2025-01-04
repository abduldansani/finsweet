import { useState } from "react";
import { plus } from "../../assets";
import { faq } from "../../constants";
import Section from "../Section";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section className="bg-grey bg-opacity-50">
      <div
        id="faq"
        className="container flex flex-col lg:flex-row gap-20 justify-between"
      >
        <div className="shrink-0 space-y-2 md:space-y-4 max-lg:text-center">
          <h2>
            Frequently <br className="max-lg:hidden" /> asked questions
          </h2>
          <div className="text-base lg:text-lg font-medium text-royalBlue text-opacity-[0.87]">
            Contact us for more info
          </div>
        </div>
        <div className="space-y-4 md:space-y-10 xl:space-y-12 flex-1 sm:max-lg:px-4">
          {faq.map((q, i) => (
            <div key={i} className="border-b-2 pb-4 md:pb-10 xl:pb-12">
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex gap-4 md:gap-6 xl:gap-20">
                  <h6 className="mr-4 md:mr-8 xl:mr-12 text-royalBlue font-semibold">
                    {q.number}
                  </h6>
                  <h6>{q.question}</h6>
                </div>
                <button
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                >
                  <img
                    src={plus}
                    alt=""
                    className={openQuestion === i ? "rotate-45" : ""}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              {openQuestion == i && (
                <div className="text-xs lg:text-lg font-medium mt-10">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
