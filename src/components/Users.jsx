import React from "react";
import { usersLogo } from "../constants";

const Users = () => {
  return (
    <div className="bg-white">
      <div className="container flex items-center gap-10 pl-0 lg:gap-20">
        <div className="md-px-6 z-10 flex flex-col text-nowrap bg-white px-4 lg:px-8">
          <h3 className="max-md:text-base">100.000+</h3>
          <p className="max-md:text-sm">Finsweet Users</p>
        </div>
        <div className="flex animate-scroll items-center justify-between gap-14">
          {[...usersLogo, ...usersLogo].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="-"
              width={145}
              height={32}
              className="max-md:w-24"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
