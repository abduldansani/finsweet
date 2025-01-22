import { useEffect, useRef, useState } from "react";
import { keywords } from "../../constants";
import Section from "../Section";
import { motion } from "motion/react";

const Keywords = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const parent = useRef();
  useEffect(() => {
    setParentWidth(parent.current.scrollWidth - parent.current.offsetWidth);
  }, []);
  return (
    <Section>
      <div
        ref={parent}
        className="container max-md:pl-0 py-3 lg:py-6 border-y border-darkBlue border-opacity-20 flex gap-8 items-center overflow-hidden"
      >
        <h6 className="text-royalBlue max-lg:text-xl z-10 bg-white pr-2 max-md:pl-4">
          Keywords
        </h6>
        <motion.div className="flex-1 w-full">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -parentWidth }}
            className="flex gap-4 lg:gap-8 justify-around"
          >
            {keywords.map((keyword, i) => (
              <div key={i} className="text-lg font-medium text-opacity-70">
                {keyword.link}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Keywords;
