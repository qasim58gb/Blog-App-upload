import React from "react";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";

const ContactMessages = ({ messages }) => {
  useRedirectLogoutUser("/login");

  return (
    <div className="p-8 px-14">
      <h2 className="text-2xl font-bold mb-4">Contact Us Messages</h2>
      {messages.map((message, i) => (
        <div
          key={i}
          className="mb-6 p-4 border rounded-md bg-slate-200 shadow-lg"
        >
          <h3 className="text-xl font-semibold">
            {message.name}{" "}
            <span className="text-sm text-gray-600">({message.email})</span>
          </h3>
          <div className="mt-2 space-y-4 ">
            {message.message.map((message, messageIndex) => (
              <div
                key={messageIndex}
                className="bg-gray-100 p-3 rounded-md shadow-md"
              >
                <p className="text-sm text-gray-700">{message}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <button className=" bg-gradient-to-r from-purple-700  to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700">
              {" "}
              Response
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMessages;
