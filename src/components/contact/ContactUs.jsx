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
          <br className="max-sm:hidden " /> eiusmod tempor incididunt ut labore.
        </p>
        <form className="bg-grey rounded-xl py-10 lg:py-14 px-8 lg:px-16 grid md:grid-cols-2 gap-4 lg:gap-8 max-w-[1061px] mx-auto text-left mb-8">
          {contactInput.map((input, i) => (
            <label key={i}>
              <div className="mb-1 lg:mb-1.5 font-medium text-base lg:text-lg">
                {input.label}
              </div>
              <input
                type="text"
                className="py-4 px-4 sm:px-8 rounded-lg bg-transparent focus:outline-none border border-black border-opacity-[12%] w-full"
                placeholder={input.placeholder}
              />
            </label>
          ))}
          <label className="md:col-span-2">
            <div className="mb-1 lg:mb-1.5 font-medium text-base lg:text-lg">
              Message
            </div>
            <textarea
              className="w-full h-32 py-4 px-8 rounded-lg bg-transparent focus:outline-none border border-black border-opacity-[12%]"
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
