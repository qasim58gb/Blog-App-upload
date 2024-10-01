import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import Register from "../../Component/Register/Register";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, selectUsers } from "../../redux/features/auth/AuthSlice";
import ReactPaginate from "react-paginate";
import "./user.css";
import { FILTER_USERS, filterUsers } from "../../redux/features/FilterSlice";

export default function Users() {
  useRedirectLogoutUser("/login");

  const [search, setSearch] = useState("");
  const filteredUsers = useSelector(filterUsers);

  // get users
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // start pagination
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;

    setItemOffset(newOffset);
  };
  // end pagination

  useEffect(() => {
    dispatch(FILTER_USERS({ search, users }));
  }, [dispatch, search, users]);

  return (
    <div className="min-h-[100vh]">
      <div className="w-[90%] mx-auto flex justify-between items-center md:flex-row flex-col gap-4">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search user..."
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <Register />
      </div>
      <div className="mt-[2rem] w-[90%] mx-auto overflow-auto touch-auto border-white border-4 rounded-3xl">
        <table className="w-[100%]   ">
          <thead className="border-b-4 border-white   ">
            <tr>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                #
              </th>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                Name
              </th>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                Email
              </th>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                Status
              </th>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                Role
              </th>
              <th className="p-3 font-bold tracking-wide text-left" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-slate-100">
            {currentItems.map((item, i) => (
              <UserTable
                key={i}
                id={item._id}
                i={i + 1}
                name={item.name}
                email={item.email}
                role={item.role}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
      />
    </div>
  );
}
