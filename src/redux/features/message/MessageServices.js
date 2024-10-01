import axios from "axios";
export const BACKEND_BASEURL = "http://localhost:5000/";
export const API_MESSAGES = `${BACKEND_BASEURL}api/messages/`;

const getMessages = async () => {
  const response = await axios.get(API_MESSAGES + "getMessages");
  return response.data;
};

const messageServices = { getMessages };
export default messageServices;
