import { fFeatures } from "../../constants";
import Feature from "./Feature";

const AllFeatures = () => {
  return (
    <section>
      {fFeatures.map((feature, i) => (
        <Feature i={i} feature={feature} />
      ))}
    </section>
  );
};

export default AllFeatures;
