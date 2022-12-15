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
                <p className="card-text" >Cantidad: {producto.cantidad}</p>
                <p className="card-text">Precio: ${producto.producto.price}</p>
                <button className='btn btn-dark'> Eliminar del carrito</button>
                
            </div>
    </div>)
    
 setcarritoLocal(prodCarrito)



}, []);


    if(carrito.length !=0){
        return (
            <>
                <div className="container row">
                {carritoLocal}
                </div>
            </>
        )

    } else{
        return (
            <>
            <h1>No existen elementos en el carrito</h1>
            </>
        )

    }
   
}

export default Carrito;





// Swal.fire({

//     title: ``,
//     text: 'Modal with a custom image.',
//     imageUrl: 'https://unsplash.it/400/200',
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
//   })
