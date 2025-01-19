import { team } from "../../constants";
import Section from "../Section";

const Team = () => {
  return (
    <Section className="bg-grey">
      <div className="container">
        <h3 className="text-center mb-12">Meet our team</h3>
        <div className="flex gap-8 justify-center text-center flex-wrap">
          {team.map((member) => (
            <div key={member.id} className="py-9 px-12 bg-white">
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
