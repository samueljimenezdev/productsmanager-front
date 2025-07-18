import React from "react";

export const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product, idx) => (
            <tr key={product.id || idx}>
              <th scope="row">{product.id}</th>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(product)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No hay productos registrados.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};