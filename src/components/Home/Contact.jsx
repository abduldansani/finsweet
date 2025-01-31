import { Link } from "react-router";
import { arrowRightWhite, contactImg } from "../../assets";
import Button from "../Button";
import Section from "../Section";

const Contact = () => {
  return (
    <Section>
      <div className="container grid px-0 text-white md:grid-cols-2">
        <div className="relative">
          <img src={contactImg} alt="" className="h-full w-full" />
          <div className="absolute inset-0 space-y-6 bg-tintBlue bg-opacity-50 p-6 sm:p-10 xl:p-28">
            <h1>Building stellar websites for early startups</h1>
            <div className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </div>
          </div>
        </div>
        <div className="bg-tintBlue px-4 py-12 xl:p-28">
          <h5 className="mb-4">Send inquiry</h5>
          <div className="mb-10 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <form action="" className="mb-7">
            <div className="space-y-4">
              <input
                type="text"
                className="w-full rounded-lg border-2 border-white border-opacity-5 bg-transparent px-8 py-4 focus:outline-yellow"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full rounded-lg border-2 border-white border-opacity-5 bg-transparent px-8 py-4 focus:outline-yellow"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full rounded-lg border-2 border-white border-opacity-5 bg-transparent px-8 py-4 focus:outline-yellow"
                placeholder="Paste your Figma design URL"
              />
            </div>
            <Link to="/contact">
              <Button isLarge className="mt-10 w-full">
                Send an Inquiry
              </Button>
            </Link>
          </form>
          <Link to="/contact">
            <Button isText isWhite className="w-full">
              <div className="flex items-center justify-center gap-4">
                <div className="font-medium">Get in touch with us</div>
                <img
                  src={arrowRightWhite}
                  alt=""
                  width={24}
                  className="group-hover:opacity-30"
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
