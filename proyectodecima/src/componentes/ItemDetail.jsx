import React, {useState,useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';

// Recibimos por parametro el resultado de la busqueda en la base de datos, luego mostramos la información
// mediante una card de bt.

const ItemDetail = (producto) => {

    const [cantidad, setcantidad] = useState(1);
   
    const {carrito,agregarProducto,eliminarDelCarrito} = useContext(CarritoContext)
    console.log(carrito)
    const cantidadProducto = (operacion) => {
      if (operacion== "+"){
        setcantidad(cantidad +1)
      }  else{
        setcantidad(cantidad -1)
      }
    }
  
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

                        <p className='card-text'>{cantidad}</p>
                        <button className='btn btn-ligth m-1' onClick={()=> cantidadProducto("+")}>+</button>
                        <button className='btn btn-dark m-1' onClick={()=> cantidadProducto("-")}>-</button>
                        <a href="#" className="btn btn-dark m-1" onClick={()=> agregarProducto(producto,cantidad)}>Agregar al Carrito</a>
                      
                    </div>
                 </div>
                 
                </div> 
               
        </>
    );
}

export default ItemDetail;
