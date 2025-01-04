import { arrowRightWhite, contactImg } from "../../assets";
import Button from "../Button";
import Section from "../Section";

const Contact = () => {
  return (
    <Section>
      <div className="container px-0 grid md:grid-cols-2 text-white">
        <div className="relative">
          <img src={contactImg} alt="" className="w-full h-full" />
          <div className="absolute inset-0 bg-tintBlue bg-opacity-50 p-6 md:p-10 xl:p-28 space-y-6">
            <h1>Building stellar websites for early startups</h1>
            <div className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </div>
          </div>
        </div>
        <div className="bg-tintBlue py-12 px-4 xl:p-28">
          <h5 className="mb-4">Send inquiry</h5>
          <div className="font-medium mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <form action="" className="mb-7">
            <div className="space-y-4">
              <input
                type="text"
                className="py-4 px-8 border-2 focus:outline-yellow bg-transparent border-white border-opacity-5 rounded-lg w-full"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="py-4 px-8 border-2 focus:outline-yellow bg-transparent border-white border-opacity-5 rounded-lg w-full"
                placeholder="Email"
              />
              <input
                type="text"
                className="py-4 px-8 border-2 focus:outline-yellow bg-transparent border-white border-opacity-5 rounded-lg w-full"
                placeholder="Paste your Figma design URL"
              />
            </div>
            <Button isLarge className="w-full mt-10">
              Send an Inquiry
            </Button>
          </form>
          <Button isText isWhite className="w-full">
            <div className="flex gap-4 items-center justify-center">
              <div className="font-medium">Get in touch with us</div>
              <img
                src={arrowRightWhite}
                alt=""
                width={24}
                className="group-hover:opacity-30"
              />
            </div>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
