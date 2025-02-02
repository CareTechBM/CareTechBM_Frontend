import React, { useEffect, useState } from "react";
import { ProductosCard } from "./ProductosCard";
import { getProducts, deleteProduct } from "../../services";

export const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };
        fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
          await deleteProduct(productId);
          setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
          console.error("Error deleting product", error);
        }
      };

    return (
        <div className="productos-container">
            {products.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                products.map((product) => (
                    <ProductosCard
                        key={product._id}
                        product={product}
                        onDelete={handleDeleteProduct}
                    />
                ))
            )}
        </div>
    );
};
