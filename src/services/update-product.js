import axios from "axios";

export const updateProduct = async (id, nombre, precio, stock) => {

  const product = {
    id,
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