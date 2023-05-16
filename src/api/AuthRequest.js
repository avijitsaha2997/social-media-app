import axios from "axios";

const API = axios.create({
  baseURL: "https://social-media-app-server-5y0z.onrender.com",
});

export const logIn = (formData) => API.post("/auth/login", formData);

export const signUp = (formData) => API.post("/auth/register", formData);
