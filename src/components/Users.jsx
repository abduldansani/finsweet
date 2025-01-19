import React from "react";
import { usersLogo } from "../constants";

const Users = () => {
  return (
    <div className="bg-white">
      <div className="container flex items-center gap-20 ">
        <div className="flex flex-col text-nowrap">
          <h3>100.000+</h3>
          <p>Finsweet Users</p>
        </div>
        <div className="flex gap-14 items-center justify-between">
          {usersLogo.map((logo, i) => (
            <img key={i} src={logo} alt="-" width={145} height={32} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
