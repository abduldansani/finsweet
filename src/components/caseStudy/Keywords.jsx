import { keywords } from "../../constants";
import Section from "../Section";

const Keywords = () => {
  return (
    <Section>
      <div className="container flex items-center gap-4 border-y border-darkBlue border-opacity-20 py-3 max-md:pl-0 lg:gap-8 lg:py-6">
        <h6 className="z-10 bg-white pr-2 text-royalBlue max-lg:text-xl max-md:pl-4">
          Keywords
        </h6>
        <div className="w-full flex-1 overflow-scroll no-scrollbar">
          <div className="flex justify-around gap-4 lg:gap-8">
            {keywords.map((keyword, i) => (
              <div key={i} className="text-lg font-medium text-opacity-70">
                {keyword.link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Keywords;
