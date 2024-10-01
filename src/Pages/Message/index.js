import React, { useEffect } from "react";
import ContactMessages from "./ContactMessages";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessages,
  selectMessages,
} from "../../redux/features/message/MessageSlice";

const Index = () => {
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  // const users = [
  //   {
  //     name: "John Doe",
  //     email: "john@example.com",
  //     messages: ["I need help with my account.", "How do I reset my password?"],
  //   },
  //   {
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     messages: ["I am facing issues with the payment gateway."],
  //   },
  // ];

  return (
    <div className="App">
      <ContactMessages messages={messages} />
    </div>
  );
};

export default Index;
