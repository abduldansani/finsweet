import { fFeatures } from "../../constants";
import Feature from "./Feature";

const AllFeatures = () => {
  return (
    <section>
      {fFeatures.map((feature) => (
        <div key={feature.id}>
          <Feature feature={feature} />
        </div>
      ))}
    </section>
  );
};

export default AllFeatures;
