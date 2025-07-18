import React, { useState, useEffect } from "react";
import { ProductForm } from "../components/product-form/ProductForm";
import { ProductList } from "../components/product-list/ProductList";
import { getProducts } from "../services/get-products";

export const Main = () => {
    const [products, setProducts] = useState([]);

    const handleEdit = (product) => {
        // Lógica para editar producto
        alert(`Editar producto: ${product.nombre}`);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        fetchProducts();
    }, []);
    const handleDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    return (
        <div className="container mt-4">
            <ProductForm />
            <hr />
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}