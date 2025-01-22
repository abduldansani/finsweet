import React from "react";
import { blog } from "../../constants";
import Section from "../Section";
import { arrowDarkBlue } from "../../assets";
import { Link } from "react-router";

const Blog = () => {
  return (
    <Section>
      <div className="container max-lg:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {blog.map((post) => (
          <div key={post.id} className="space-y-8">
            <img
              src={post.img}
              alt="image"
              width={405}
              height={285}
              className="w-full"
            />
            <div className="space-y-4">
              <div className="font-medium text-opacity-70">{post.date}</div>
              <h6>{post.title}</h6>
              <p className="text-opacity-70">{post.content}</p>
            </div>
            <Link to={`/blog/${post.id}`} className="flex items-center gap-4">
              <div className="font-medium">Read More</div>
              <img src={arrowDarkBlue} alt="-" width={24} />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
