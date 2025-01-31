import { Link } from "react-router";
import { blogPosts } from "../../constants";
import { arrowBlue } from "../../assets";

const AllPosts = () => {
  return (
    <section className="pb-10 md:pb-14 lg:pb-20 xl:pb-28">
      <div className="container">
        <h2 className="mb-6 text-center lg:mb-12">Our Blog</h2>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="">
              <img src={post.img} alt="" className="mb-4 w-full lg:mb-8" />
              <p className="mb-2 font-medium lg:mb-4">{post.date}</p>
              <h6 className="mb-2 lg:mb-4">{post.title}</h6>
              <p className="mb-3 lg:mb-6">{post.content}</p>
              <Link to={`/blog/${post.id}`} className="flex items-center gap-4">
                <div className="font-medium text-tintBlue">Read More</div>
                <img src={arrowBlue} alt="" width={24} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
