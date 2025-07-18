import React, { useState, useEffect } from "react";
import { ProductForm } from "../components/product-form/ProductForm";
import { ProductList } from "../components/product-list/ProductList";
import { EditProductModal } from "../components/product-form-edit/EditProductModal";
import { getProducts } from "../services/get-products";
import { deleteProduct } from "../services/delete-product";
export const Main = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
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

    const handleDelete = async (id) => {
        const response = await deleteProduct(id);
        if (response) {
            alert("Producto eliminado satisfactoriamente.")
            setProducts(products.filter((p) => p.id !== id));
        } else (
            alert("Ha ocurrido un error eliminando el producto, intente nuevamente...")
        )
    };

    const handleUpdate = (updatedProduct) => {
        const updatedList = products.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
        );
        setProducts(updatedList);
    };

    return (
        <div className="container mt-4">
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
            <EditProductModal
                show={showModal}
                onClose={() => setShowModal(false)}
                product={selectedProduct}
                onUpdate={handleUpdate}
            />
        </div>
    );
}