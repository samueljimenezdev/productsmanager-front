import React, { useState, useEffect } from "react";
import { updateProduct } from "../../services/update-product"; // crea esta función

export const EditProductModal = ({ show, onClose, product, onUpdate }) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (product) {
            setNombre(product.nombre);
            setPrecio(product.precio);
            setStock(product.stock);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            alert("El nombre es obligatorio.");
            return;
        }
        if (isNaN(precio) || Number(precio) <= 0) {
            alert("El precio debe ser mayor a 0.");
            return;
        }
        if (!Number.isInteger(Number(stock)) || Number(stock) <= 0) {
            alert("El stock debe ser un número natural mayor a 0.");
            return;
        }

        setIsLoading(true);
        const updated = await updateProduct(product.id, nombre, precio, stock);
        setIsLoading(false);

        if (updated) {
            alert("Producto actualizado.");
            onUpdate(updated); // notificar al padre
            onClose(); // cerrar modal
        } else {
            alert("No se pudo actualizar.");
        }
    };

    if (!show) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Editar Producto</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Stock</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    min="0"
                                    required
                                />
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>Guardar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
