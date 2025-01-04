import { keywords } from "../../constants";
import Section from "../Section";

const Keywords = () => {
  return (
    <Section>
      <div className="container py-3 lg:py-6 border-y border-darkBlue border-opacity-20 flex gap-4 lg:gap-8 justify-between items-center overflow-hidden">
        <h6 className="text-royalBlue">Keywords</h6>
        {keywords.map((keyword, i) => (
          <div key={i} className="text-lg font-medium text-opacity-70">
            {keyword.link}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Keywords;
