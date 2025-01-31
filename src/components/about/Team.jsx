import { team } from "../../constants";
import Section from "../Section";

const Team = () => {
  return (
    <Section className="bg-grey">
      <div className="container">
        <h3 className="mb-12 text-center">Meet our team</h3>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {team.map((member) => (
            <div key={member.id} className="bg-white px-12 py-9">
              <img
                src={member.pic}
                alt=""
                width={168}
                height={168}
                className="mb-7"
              />
              <h6>{member.name}</h6>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
