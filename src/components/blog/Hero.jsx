import { blogHero } from "../../assets";
import Section from "../Section";

const Hero = () => {
  return (
    <Section>
      <div className="container text-center">
        <h2 className="mb-2 lg:mb-4">
          A UX Case Study on Creating a <br className="max-md:hidden" />{" "}
          Studious Environment for Students
        </h2>
        <div className="font-medium mb-4 lg:mb-8">
          Andrew Jonson Posted on 27th January 2021
        </div>
        <img
          src={blogHero}
          alt="blog hero image"
          className="mb-6 lg:mb-12 w-full"
          width={1280}
          height={477}
        />
        <p className="max-w-[850px] mb-2 md:mb-4 mx-auto">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <p className="text-royalBlue">Read more</p>
      </div>
    </Section>
  );
};

export default Hero;
