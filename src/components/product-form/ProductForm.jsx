import React, { useState } from "react";
import { createProduct } from "../../services/create-product";

export const ProductForm = ({products, setProducts}) => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const isNombreValido = (nombre) =>
        nombre.trim().length > 0;

    const isPrecioValido = (precio) =>
        !isNaN(precio) && Number(precio) > 0;

    const isStockValido = (stock) =>
        Number.isInteger(Number(stock)) && Number(stock) > 0;

    const handleSubmit = async(e) => {

        setIsLoading(true)
        e.preventDefault();

        if (!isNombreValido(nombre)) {
            alert("El nombre es obligatorio.");
            return;
        }
        if (!isPrecioValido(precio)) {
            alert("El precio debe ser mayor a 0.");
            return;
        }
        if (!isStockValido(stock)) {
            alert("El stock debe ser un número natural mayor a 0.");
            return;
        }

        const response = await createProduct(nombre, precio, stock);

        setIsLoading(false)

        if (response){
            alert("Producto creado exitosamente");
            setProducts([...products, response])
            
        }else{
            alert("Tuvimos un problema creando tu producto, intenta nuevamente mas tarde...")
            return
        }
        
        setNombre("");
        setPrecio("");
        setStock("");
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del producto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label>Precio</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="100"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    min="0"
                    step="0.01"
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label>Stock</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="10"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    min="0"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary" disabled = {isLoading}>
                Guardar
            </button>

        </form>
    )

}