import React from "react";
import { usersLogo } from "../constants";

const Users = () => {
  return (
    <div className="bg-white">
      <div className="container pl-0 flex items-center gap-10 lg:gap-20 ">
        <div className="flex flex-col text-nowrap bg-white z-10 px-4 md-px-6 lg:px-8">
          <h3 className="max-md:text-base">100.000+</h3>
          <p className="max-md:text-sm">Finsweet Users</p>
        </div>
        <div className="flex gap-14 items-center justify-between animate-scroll">
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
