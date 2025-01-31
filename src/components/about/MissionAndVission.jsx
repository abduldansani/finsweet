import { mission, vision } from "../../assets";
import Section from "../Section";

const MissionAndVission = () => {
  return (
    <Section className="bg-accent">
      <div className="container space-y-16 lg:space-y-24">
        <div className="flex items-center justify-between gap-5 max-md:flex-col lg:gap-10 xl:gap-36">
          <div className="space-y-4">
            <div className="font-medium">Our Mission</div>
            <h3>Inspire, Innovate, Share</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            src={mission}
            alt="Our mission"
            width={515}
            height={336}
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex items-center justify-between gap-5 max-md:flex-col-reverse lg:gap-10 xl:gap-36">
          <img
            src={vision}
            alt="Our mission"
            width={515}
            height={336}
            className="w-full md:w-1/2"
          />
          <div className="space-y-4">
            <div className="font-medium">Our Vision</div>
            <h3>Laser focus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MissionAndVission;
