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
        <div className="flex items-center justify-center gap-4 mb-12">
          {categoryLinks.map((link, i) => (
            <Link
              key={i}
              className={`text-lg font-medium ${
                link.link === category
                  ? "text-royalBlue"
                  : "text-darkBlue text-opacity-70"
              }`}
              onClick={() => setCategory(link.link)}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {works.map((work, i) => (
            <div className="">
              <img
                src={work.img}
                alt={work.title}
                width={623}
                height={380}
                className="mb-6 w-full"
              />
              <h3 className="mb-3">{work.title}</h3>
              <p className="mb-6">{work.content}</p>
              <Link>
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
