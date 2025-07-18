import axios from "axios";

export const createProduct = async (product) => {
  const res = await axios.post(BASE_URL, product);
  return res.data;
};