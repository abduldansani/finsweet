import { Link } from "react-router";
import {
  arrowDarkBlue,
  arrowYellow,
  project1,
  project2,
  project3,
} from "../../assets";
import Section from "../Section";

const Projects = () => {
  return (
    <Section className="bg-white">
      <div className="container space-y-6 lg:space-y-12">
        <div className="flex justify-between max-sm:flex-col sm:items-center">
          <h2>View our projects</h2>
          <Link to="/projects">
            <div className="flex items-center gap-4">
              <div className="">View More</div>
              <img src={arrowDarkBlue} alt="-" width={24} />
            </div>
          </Link>
        </div>
        <div className="flex gap-8 max-lg:flex-col">
          <div className="relative">
            <img src={project1} alt="project-1" className="h-full" />
            <div className="absolute inset-0 flex h-full flex-col justify-end bg-gradient-to-tl from-tintBlue to-[#1C1E536B] px-4 md:px-12 lg:w-3/4 xl:w-1/2">
              <div className="mt-auto pb-4 text-white md:pb-20">
                <div className="text-xl font-semibold md:text-2xl">
                  Workhub office Webflow Webflow Design
                </div>
                <p className="mb-5 mt-2 font-medium md:mb-12 md:mt-7">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <Link to="/projects/1" className="flex items-center gap-4">
                  <div className="font-medium text-yellow">View project</div>
                  <img src={arrowYellow} alt="-" width={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 overflow-hidden md:flex-row lg:flex-col">
            <Link to="/projects/2">
              <img src={project2} alt="" className="md:w-[45%] lg:w-full" />
            </Link>
            <Link to="/projects/3">
              <img src={project3} alt="" className="md:w-[45%] lg:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
