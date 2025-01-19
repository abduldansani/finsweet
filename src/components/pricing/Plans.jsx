import React from "react";
import Section from "../Section";
import { plans } from "../../constants";
import { pointerDisabled, pointerEnabled } from "../../assets";
import Button from "../Button";

const Plans = () => {
  return (
    <Section>
      <div className="container">
        <h2 className="text-center lg:mb-4">Our Pricing Plans</h2>
        <p className="font-medium text-center mb-8 md:mb-16">
          When you’re ready to go beyond prototyping in Figma, Webflow is <br />{" "}
          ready to help you bring your designs to life — without coding them.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`py-14 px-12 flex flex-col gap-6 lg:gap-12 justify-between overflow-hidden ${
                i === 1 ? "bg-tintBlue text-white relative " : "bg-grey"
              }`}
            >
              <div
                className={`absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-5/6 rounded-b-full bg-white bg-opacity-[0.06] ${
                  i === 1 ? "block" : "hidden"
                }`}
              />
              <div className="lg:mb-5 flex gap-2 items-center">
                <h3>{plan.price}</h3>
                <p
                  className={`text-opacity-100 ${
                    i === 1 ? "text-yellow" : "text-royalBlue"
                  }`}
                >
                  {plan.limit}
                </p>
              </div>
              <div className="">
                <h6 className="mb-2">{plan.title}</h6>
                <p className="font-medium">{plan.description}</p>
              </div>
              <div className="flex-1 space-y-5">
                {plan.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={pointerEnabled} alt="-" width={26} height={18} />
                    <p>{benefit}</p>
                  </div>
                ))}
                {plan.disabledBenefits &&
                  plan.disabledBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-70">
                      <img
                        src={pointerDisabled}
                        alt="-"
                        width={26}
                        height={18}
                      />
                      <p>{benefit}</p>
                    </div>
                  ))}
              </div>
              <Button isSecondary={i !== 1}>
                {i === 2 ? "Get started" : "Contact us"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Plans;
