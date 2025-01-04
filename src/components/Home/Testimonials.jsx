import { chevronLeftDark, chevronRightWhite, Jenny } from "../../assets";
import Section from "../Section";

const Testimonials = () => {
  return (
    <Section className="bg-grey bg-opacity-50">
      <div className="container flex max-lg:flex-col gap-16 xl:gap-28">
        <div className="max-lg:text-center lg:w-1/3 shrink-0 space-y-2 md:space-y-4">
          <h3 className="leading-tight">What our clients say about us</h3>
          <p className="text-opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="space-y-6 lg:space-y-12 w-[95%] max-md:max-w-[30rem] max-lg:mx-auto">
          <h5 className="max-md:text-center">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h5>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center sm:gap-4">
              <img
                src={Jenny}
                alt="Jenny"
                width={52}
                height={52}
                className="size-10 md:size-[52px] rounded-full"
              />
              <div className="flex flex-col justify-between">
                <div className="text-base md:text-xl font-medium">
                  Jenny Wilson
                </div>
                <div className="text-xs font-medium">Vice President</div>
              </div>
            </div>
            <div className="flex gap-2">
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
