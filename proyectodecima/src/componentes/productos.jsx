import React ,{useState,useEffect}from 'react';

const Productos = () => {


    fetch('https://api.mercadolibre.com/sites/MLA/search?category=celulares')
    .then((response) => response.json())
    .then((producto) =>console.log(producto));

    
    return (
        <>
            <h1>hola</h1>
        </>
    );
}

export default Productos;
