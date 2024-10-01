import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

const AccessPeoples = ({ access }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className=" flex  items-center gap-2 " onClick={handleLoginClick}>
        <FaUsers
          title="People that have access"
          className="size-6 text-gray-500"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-5">
          <div className="bg-white w-full max-w-sm p-6 rounded shadow-lg md:mx-0 mx-auto relative">
            <button
              className="absolute top-6 right-6 text-gray-600 text-xl font-bold hover:text-gray-800"
              onClick={handleClose}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Register Form */}
            <h2 className="md:text-2xl text-xl font-bold my-6 text-center">
              Access People
            </h2>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {access.allowedEmails.map((email, i) => (
                <p
                  key={i}
                  className="bg-gray-200 border-0 px-4 py-2 rounded-full w-fit"
                >
                  {email}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessPeoples;
