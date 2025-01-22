import { Link } from "react-router";
import Button from "../Button";

const Cta = () => {
  return (
    <section className="mt-10 mb-10 md:mb-16 xl:mb-32">
      <div className="container space-y-5 text-center">
        <h2>
          Let's build something great <br className="max-md:hidden" /> together
        </h2>
        <p className="font-medium">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies <br className="max-md:hidden" /> nec dolor sit amet,
          scelerisque cursus purus.
        </p>
        <Link to="/contact" className="block">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
