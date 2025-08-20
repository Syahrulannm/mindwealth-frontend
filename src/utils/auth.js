import axios from "axios";

const API_URL = "http://localhost:5000"; // ganti sesuai backend-mu

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data;
};
