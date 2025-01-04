import React from "react";
import { arrowRightWhite, heroImg } from "../../assets";
import Button from "../Button";
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="bg-tintBlue text-white">
      <div className="container flex justify-between max-lg:flex-col-reverse gap-10 xl:gap-16">
        <div className="space-y-6 xl:space-y-12 text-center lg:text-start">
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex max-sm:flex-col items-center max-lg:justify-center gap-5 xl:gap-10">
            <Button>View our work</Button>
            <Button isSmall isText isWhite>
              <div className="flex items-center gap-2 sm:gap-6">
                <div className="">View Pricing</div>
                <img
                  src={arrowRightWhite}
                  alt="-"
                  width={24}
                  className="opacity-100 group-hover:opacity-30"
                />
              </div>
            </Button>
          </div>
        </div>
        <img
          src={heroImg}
          alt="hero"
          className="lg:w-1/2 shrink-0 max-lg:w-4/5 mx-auto"
        />
      </div>
    </Section>
  );
};

export default Hero;
