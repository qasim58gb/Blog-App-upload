import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import {
  deleteUser,
  getUsers,
  upgradeRole,
} from "../../redux/features/auth/AuthSlice";
import { useDispatch } from "react-redux";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

export default function UserTable({ i, id, name, email, role }) {
  const [roleToSet, setRoleToSet] = useState("");

  const dispatch = useDispatch();
  const handleChangeRole = async (id) => {
    if (!roleToSet) {
      toast.error("please select the role first");
    }

    const userData = {
      id: id,
      role: roleToSet,
    };

    await dispatch(upgradeRole(userData));

    await dispatch(getUsers());
  };

  const removeUser = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete This User",
      message: "Are you sure to do delete this user?",
      buttons: [
        {
          label: "Delete",
          onClick: () => removeUser(id),
        },
        {
          label: "Cancel",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <>
      <tr>
        <td
          className={`p-3 text-sm text-gray-700 whitespace-nowrap ${
            role === "reject" && "bg-red-600 text-white"
          }`}
        >
          {i}
        </td>
        <td
          className={`p-3 text-sm text-gray-700 whitespace-nowrap ${
            role === "reject" && "bg-red-600 text-white"
          }`}
        >
          {name.length > 15 ? name.substring(0, 15) : name}
        </td>
        <td
          className={`p-3 text-sm text-gray-700 whitespace-nowrap ${
            role === "reject" && "bg-red-600 text-white"
          }`}
        >
          {email}
        </td>

        <td
          className={`p-1 text-sm text-gray-700 whitespace-nowrap ${
            role === "reject" && "bg-red-600 text-white"
          }`}
        >
          <span
            className={`p-3 rounded ${
              role === "superAdmin"
                ? "bg-violet-300 text-violet-900"
                : role === "suspended"
                ? "bg-red-300 text-red-900"
                : role === "admin"
                ? "bg-green-300 text-green-900"
                : ""
            } capitalize`}
          >
            {role}
          </span>
        </td>

        <td
          className={`flex items-center  p-3 text-sm text-gray-700 whitespace-nowrap `}
        >
          <>
            <div className="border-b border-gray-400  ">
              <select
                className="outline-none w-28 h-full bg-gray-200 py-1 "
                onChange={(e) => setRoleToSet(e.target.value)}
              >
                <option selected value="">
                  --select--
                </option>
                <option value="SuperAdmin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="suspended">Suspend</option>
              </select>
            </div>
            <button
              className={`bg-sky-500 p-[.23rem]`}
              onClick={() => handleChangeRole(id)}
            >
              <TiTick className="w-[1.4rem] h-[1.3rem] hover:scale-150  transition-all ease-linear duration-200" />
            </button>
          </>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <>
            <button className="text-red-700">
              <FaTrashAlt
                onClick={() => confirmDelete(id)}
                className="size-6 hover:scale-125 transition-all ease-linear duration-300"
              />
            </button>
          </>
        </td>
      </tr>
    </>
  );
}
