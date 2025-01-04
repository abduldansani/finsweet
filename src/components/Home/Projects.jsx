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
        <div className="flex max-sm:flex-col justify-between sm:items-center">
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
            <div className="absolute inset-0 lg:w-3/4 xl:w-1/2 h-full px-4 md:px-12 flex flex-col justify-end bg-gradient-to-tl from-tintBlue to-[#1C1E536B]">
              <div className="text-white pb-4 md:pb-20 mt-auto">
                <div className="text-xl md:text-2xl font-semibold">
                  Workhub office Webflow Webflow Design
                </div>
                <p className="mt-2 mb-5 md:mt-7 md:mb-12 font-medium">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <Link className="flex items-center gap-4">
                  <div className="font-medium text-yellow">View project</div>
                  <img src={arrowYellow} alt="-" width={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-8 overflow-hidden justify-between">
            <img src={project2} alt="" className="md:w-[45%] lg:w-full" />
            <img src={project3} alt="" className="md:w-[45%] lg:w-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
