import { Link } from "react-router";
import { socialMediaDark } from "../../constants";
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="bg-grey">
      <div className="container max-w-[733px] text-center">
        <p className="mb-4 font-medium">What we created</p>
        <h2 className="mb-6">Our Work Portfolio</h2>
        <p className="mb-8 font-medium">
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>
        <div className="mt-8 flex justify-center gap-6">
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
