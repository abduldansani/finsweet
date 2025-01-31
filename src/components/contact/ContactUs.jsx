import { contactInput } from "../../constants";
import Button from "../Button";
import Section from "../Section";

const ContactUs = () => {
  return (
    <Section>
      <div className="container text-center">
        <h2 className="mb-2 lg:mb-4">Contact Us</h2>
        <p className="mb-8 lg:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <br className="max-sm:hidden" /> eiusmod tempor incididunt ut labore.
        </p>
        <form className="mx-auto mb-8 grid max-w-[1061px] gap-4 rounded-xl bg-grey px-8 py-10 text-left md:grid-cols-2 lg:gap-8 lg:px-16 lg:py-14">
          {contactInput.map((input, i) => (
            <label key={i}>
              <div className="mb-1 text-base font-medium lg:mb-1.5 lg:text-lg">
                {input.label}
              </div>
              <input
                type="text"
                className="w-full rounded-lg border border-black border-opacity-[12%] bg-transparent px-4 py-4 focus:outline-none sm:px-8"
                placeholder={input.placeholder}
              />
            </label>
          ))}
          <label className="md:col-span-2">
            <div className="mb-1 text-base font-medium lg:mb-1.5 lg:text-lg">
              Message
            </div>
            <textarea
              className="h-32 w-full rounded-lg border border-black border-opacity-[12%] bg-transparent px-8 py-4 focus:outline-none"
              placeholder="Write your  question here"
            ></textarea>
          </label>
          <Button isSecondary className="w-fit">
            Send Messege
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactUs;
