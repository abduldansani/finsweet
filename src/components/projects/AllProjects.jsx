import { useEffect, useRef, useState } from "react";
import { categoryLinks, works } from "../../constants";
import { Link } from "react-router";
import Section from "../Section";
import { arrowDarkBlue } from "../../assets";
import { motion } from "motion/react";

const AllProjects = () => {
  const [category, setCategory] = useState("all");
  const [parentWidth, setParentWidth] = useState(0);
  const parent = useRef();
  useEffect(() => {
    setParentWidth(parent.current.scrollWidth - parent.current.offsetWidth);
  }, []);
  return (
    <Section>
      <div className="container">
        <motion.div ref={parent} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -parentWidth }}
            className="cursor-grab flex items-center gap-4 mb-12 text-nowrap mx-auto sm:justify-center"
          >
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
          </motion.div>
        </motion.div>
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
