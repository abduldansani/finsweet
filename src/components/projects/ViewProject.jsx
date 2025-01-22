import { Link, useParams } from "react-router";
import Section from "../Section";
const ViewProject = () => {
  const params = useParams();
  return (
    <Section>
      <div className="container flex flex-col items-center justify-center gap-10 md:py-20">
        <h1>404</h1>
        <h4 className="text-center">
          Sorry! details about this project is not available at the moment. You
          can view{" "}
          <Link to="/project" className="underline text-tintBlue">
            a sample project detail page
          </Link>
        </h4>
      </div>
    </Section>
  );
};

export default ViewProject;
