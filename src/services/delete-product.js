import axios from "axios";

export const deleteProduct = async (id) => {
  const res = await axios.post(`${BASE_URL}/${id}`);
  return res.data;
};