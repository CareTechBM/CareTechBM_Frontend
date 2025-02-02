import React from 'react';

const PorductoIma = ({ url }) => {
    return (
        <div className="publicacion-ima-container">
            <img src={url} className="card-img-top" alt="Producto" />
        </div>
    );
};

export const ProductosCard = ({ product, onDelete }) => {
    const handleDelete = () => {
        const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");

        if (isConfirmed) {
            onDelete(product._id);
        }
    };
    return (
        <div className="card producto-card" style={{ width: '18rem' }}>
            <PorductoIma url={product.image} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>${product.price}</strong></p>
                <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};