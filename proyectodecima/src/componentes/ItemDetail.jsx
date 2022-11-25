import React from 'react';

// Recibimos por parametro el resultado de la busqueda en la base de datos, luego mostramos la información
// mediante una card de bt.

const ItemDetail = (producto) => {

    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.producto.thumbnail} className="img-fluid rounded-start" alt={producto.producto.title} />
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.producto.title}</h5>
                        {/* <p className="card-text">Marca: {producto.producto.attributes[0].value_name}</p> */}
                        <p className="card-text">Precio: ${producto.producto.price}</p>
                        <a href="#" className="btn btn-dark">Comprar</a>
                    </div>
                 </div>
                 
                </div> 
            
        </>
    );
}

export default ItemDetail;
