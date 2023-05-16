import axios from "axios";

const API = axios.create({
  baseURL: "https://social-media-app-server-5y0z.onrender.com/",
});

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post("/message/", data);
