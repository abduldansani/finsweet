import { about } from "../../assets";
import Section from "../Section";

const WhoWeAre = () => {
  return (
    <Section className="py-0">
      <div className="container bg-greyVariant px-0 pt-20">
        <div className="px-8 md:px-20">
          <div className="mb-2 font-medium">Who we are</div>
          <div className="flex justify-between gap-10 max-md:flex-col lg:gap-14">
            <div className="space-y-4">
              <h3>Goal focussed</h3>
              <p className="text-opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="space-y-4">
              <h3>Continuous improvement</h3>
              <p className="text-opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <img src={about} alt="who we are" className="mt-20 w-full" />
      </div>
    </Section>
  );
};

export default WhoWeAre;
