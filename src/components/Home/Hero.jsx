import React from "react";
import { arrowRightWhite, heroImg } from "../../assets";
import Button from "../Button";
import Section from "../Section";
import { Link } from "react-router";

const Hero = () => {
  return (
    <Section className="bg-tintBlue text-white">
      <div className="container flex justify-between max-lg:flex-col-reverse items-center gap-10 lg:gap-4 xl:gap-16">
        <div className="space-y-6 xl:space-y-12 text-center lg:text-start">
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex max-sm:flex-col items-center max-lg:justify-center gap-5 xl:gap-10">
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
        <div className="shrink-0 lg:w-1/2 max-lg:w-4/5 mx-auto max-lg:max-w-[600px]">
          <img src={heroImg} alt="hero" className="" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
