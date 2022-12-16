import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';
import {consultarDatos} from '../utils/funcionesUtiles' 



const Carrito = () => {

const {carrito, agregarProducto, eliminarDelCarrito} = useContext(CarritoContext)
const [carritoLocal, setcarritoLocal] = useState([]);


useEffect(() => {



    const prodCarrito = carrito.map(producto=>
   
    <div className="card" key={producto.producto.id} style={{width: '18rem'}}>
            <img src={producto.producto.thumbnail} className="imgCard" alt="" />
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{producto.producto.title}</p>
                <p className="card-text">Precio unitario: ${producto.producto.price}</p>
                <p className="card-text" >Cantidad: {producto.cantidad}</p>
                <p className="card-text" >Precio total: ${producto.producto.price*producto.cantidad}</p>
                <button className='btn btn-dark'onClick={()=>eliminarDelCarrito(producto)}> Eliminar del carrito</button>
                
            </div>
    </div>

    )  

 setcarritoLocal(prodCarrito)
}, [carritoLocal]);

return (
    (carrito.length !=0) ? <><div className="container row">{carritoLocal}</div></>:<><h1>No existen elementos en el carrito</h1></>
    
    )
}

export default Carrito;





