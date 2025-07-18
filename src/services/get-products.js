import axios from "axios";

export const getProducts = async () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/productos`
  const res = await axios.get(URL);
  return res.data;
};