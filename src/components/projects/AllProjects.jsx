import { useState } from "react";
import { categoryLinks, works } from "../../constants";
import { Link } from "react-router";
import Section from "../Section";
import { arrowDarkBlue } from "../../assets";

const AllProjects = () => {
  const [category, setCategory] = useState("all");

  return (
    <Section>
      <div className="container">
        <div className="">
          <div className="mx-auto mb-12 flex items-center gap-4 overflow-scroll text-nowrap no-scrollbar sm:justify-center">
            {categoryLinks.map((link) => (
              <button
                key={link.id}
                className={`text-lg font-medium ${
                  link.link === category
                    ? "text-royalBlue"
                    : "text-darkBlue text-opacity-70"
                }`}
                onClick={() => setCategory(link.link)}
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {works.map((work) => (
            <div key={work.id} className="">
              <img
                src={work.img}
                alt={work.title}
                width={623}
                height={380}
                className="mb-6 w-full"
              />
              <h3 className="mb-3">{work.title}</h3>
              <p className="mb-6">{work.content}</p>
              <Link to={`/projects/${work.id}`}>
                <div className="flex items-center gap-4">
                  <div className="font-medium">View Portfolio</div>
                  <img src={arrowDarkBlue} alt="" width={24} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AllProjects;
