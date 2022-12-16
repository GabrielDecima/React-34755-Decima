import React, {useState,useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';

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
  
    const confirmacion = () =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    }


  

    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.producto.thumbnail} className="img-fluid rounded-start h-75 w-75" alt={producto.producto.title} />
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.producto.title}</h5>
                        <p className="card-text">Precio: ${producto.producto.price}</p>

                        <p className='card-text'>{cantidad}</p>
                        <button className='btn btn-ligth m-1' onClick={()=> cantidadProducto("+")}>+</button>
                        <button className='btn btn-dark m-1' onClick={()=> cantidadProducto("-")}>-</button>
                        <a href="#" className="btn btn-dark m-1" onClick={()=> agregarProducto(producto,cantidad,confirmacion())}>Agregar al Carrito</a>
                      
                    </div>
                 </div>
                 
                </div> 
               
        </>
    );
}

export default ItemDetail;
