import axios from "axios";

const BASEURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5001"
    : "https://meowgpt-6bsg.onrender.com";
const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const sendMessage = async (message, history = []) => {
  const res = await api.post("/api/groq", {
    message,
    history,
  });

  return res?.data;
};

export default sendMessage;
