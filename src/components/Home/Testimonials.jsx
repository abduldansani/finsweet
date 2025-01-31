import { chevronLeftDark, chevronRightWhite, Jenny } from "../../assets";
import Section from "../Section";

const Testimonials = () => {
  return (
    <Section className="bg-grey bg-opacity-50">
      <div className="container flex gap-10 max-lg:flex-col lg:gap-16 xl:gap-28">
        <div className="shrink-0 space-y-2 max-lg:text-center md:space-y-4 lg:w-1/3">
          <h3 className="leading-tight">What our clients say about us</h3>
          <p className="text-opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="w-[95%] space-y-6 max-lg:mx-auto max-md:max-w-[30rem] lg:space-y-12">
          <h5 className="max-md:text-center">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={Jenny}
                alt="Jenny"
                width={52}
                height={52}
                className="size-10 rounded-full md:size-[52px]"
              />
              <div className="flex flex-col justify-between">
                <div className="text-base font-medium md:text-xl">
                  Jenny Wilson
                </div>
                <div className="text-xs font-medium">Vice President</div>
              </div>
            </div>
            <div className="flex cursor-not-allowed gap-2">
              <img
                src={chevronLeftDark}
                alt="-"
                width={48}
                height={48}
                className="size-8 md:size-12"
              />
              <img
                src={chevronRightWhite}
                alt="-"
                width={48}
                height={48}
                className="size-8 md:size-12"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
