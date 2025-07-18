import axios from "axios";

export const createProduct = async (nombre, precio, stock) => {


  const product = {
    nombre,
    precio, 
    stock
  }
  
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/productos`
  const res = await axios.post(URL, product);
  if (res.status = 200){
    return res.data
  }
  return false;
};