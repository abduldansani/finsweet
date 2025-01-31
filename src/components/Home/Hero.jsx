import React from "react";
import { arrowRightWhite, heroImg } from "../../assets";
import Button from "../Button";
import Section from "../Section";
import { Link } from "react-router";

const Hero = () => {
  return (
    <Section className="bg-tintBlue text-white">
      <div className="container flex items-center justify-between gap-10 max-lg:flex-col-reverse lg:gap-4 xl:gap-16">
        <div className="space-y-6 text-center lg:text-start xl:space-y-12">
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex items-center gap-5 max-lg:justify-center max-sm:flex-col xl:gap-10">
            <Link to="/projects">
              <Button>View our work</Button>
            </Link>
            <Link to="/pricing">
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
            </Link>
          </div>
        </div>
        <div className="mx-auto shrink-0 max-lg:w-4/5 max-lg:max-w-[600px] lg:w-1/2">
          <img src={heroImg} alt="hero" className="" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
