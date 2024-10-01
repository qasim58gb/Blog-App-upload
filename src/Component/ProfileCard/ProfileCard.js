import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";

const ProfileCard = ({ user }) => {
  console.log(user);
  return (
    <div className="mx-auto bg-white shadow-md rounded-lg text-center overflow-hidden flex items-center justify-between flex-wrap">
      <div className="p-5 flex items-center gap-3 flex-wrap">
        <h2 className="text-xl font-bold text-gray-800 capitalize">
          {user.name}
        </h2>
        <p className="text-gray-600">({user.email})</p>
        <p className="text-gray-600 capitalize">Role: {user.role}</p>
      </div>
      <div className="px-6 pb-5 md:py-6">
        <ChangePassword />
        {/* <NavLink
          to="/changePassword"
          className="text-purple-500 hover:underline"
        >
          Change Password
        </NavLink> */}
      </div>
    </div>
  );
};

export default ProfileCard;
