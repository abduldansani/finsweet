import React from "react";
import Section from "../Section";
import { plans } from "../../constants";
import { pointerDisabled, pointerEnabled } from "../../assets";
import Button from "../Button";
import { Link } from "react-router";

const Plans = () => {
  return (
    <Section>
      <div className="container">
        <h2 className="text-center lg:mb-4">Our Pricing Plans</h2>
        <p className="mb-8 text-center font-medium md:mb-16">
          When you’re ready to go beyond prototyping in Figma, Webflow is{" "}
          <br className="max-md:hidden" /> ready to help you bring your designs
          to life — without coding them.
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between gap-6 overflow-hidden px-12 py-14 lg:gap-12 ${
                i === 1 ? "relative bg-tintBlue text-white" : "bg-grey"
              }`}
            >
              <div
                className={`absolute left-1/2 top-0 h-5/6 w-[1000px] -translate-x-1/2 rounded-b-full bg-white bg-opacity-[0.06] ${
                  i === 1 ? "block" : "hidden"
                }`}
              />
              <div className="flex items-center gap-2 lg:mb-5">
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
              <Link to="/contact">
                <Button isSecondary={i !== 1} className="w-full">
                  {i === 2 ? "Contact us" : "Get started"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Plans;
