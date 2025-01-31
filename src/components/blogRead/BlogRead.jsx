import { blogHero, readBlog } from "../../assets";
import Section from "../Section";

const BlogRead = () => {
  return (
    <div>
      <Section>
        <div className="container text-center">
          <h2 className="mb-2 lg:mb-4">
            A UX Case Study on Creating a <br className="max-md:hidden" />{" "}
            Studious Environment for Students
          </h2>
          <div className="mb-12 font-medium">
            <span className="text-opacity-[87%]">Andrew Jonson</span> Posted on
            27th January 2021
          </div>
          <img
            src={blogHero}
            alt="-"
            className="w-full"
            width={1280}
            height={477}
          />
        </div>
      </Section>
      <section className="mx-auto max-w-[840px] px-4">
        <h3 className="mb-4 lg:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="mb-4 lg:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className="mb-4 lg:mb-8">Ut enim ad minim veniam, quis nostrud.</h3>
        <p className="mb-3 lg:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="mb-3 list-inside list-disc font-medium opacity-70 lg:mb-6">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </li>
        </ul>
        <p className="mb-4 lg:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={readBlog} alt="-" className="w-full" />
      </section>
      <section className="mx-auto max-w-[840px] px-4 py-8 lg:py-14">
        <h3 className="mb-4 lg:mb-8">Ut enim ad minim veniam, quis nostrud.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default BlogRead;
