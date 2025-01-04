import { Link } from "react-router";
import { socialMediaDark } from "../../constants";
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="bg-grey">
      <div className="container max-w-[733px] text-center">
        <p className="font-medium mb-4">What we created</p>
        <h2 className="mb-6">Our Work Portfolio</h2>
        <p className="font-medium mb-8">
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>
        <div className="mt-8 flex gap-6 justify-center">
          {socialMediaDark.map((social, i) => (
            <Link key={i} to={social.link}>
              <img
                src={social.icon}
                alt={social.title}
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
