import axios from "axios";

export const updateProduct = async (product) => {
  const res = await axios.post(BASE_URL, product);
  return res.data;
};