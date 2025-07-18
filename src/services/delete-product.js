import axios from "axios";

export const deleteProduct = async (id) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/productos/${id}`
  const res = await axios.post(URL);
  if (res.status = 200){
    return true
  }
  return false;
};