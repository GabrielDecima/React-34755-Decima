import React, {useState} from 'react';

const Home = () => {

const [producto, setproducto] = useState([]);
const consultarDatos=() =>{

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
    .then((response) => response.json())
    .then(({results}) => {
        
        results.forEach(producto => {
            console.log(producto)

            setproducto((results).map(detalle => <p>Nombre: {detalle.title}</p>))

        });
        
        
    })
}


consultarDatos()


    return (
        <>
           {producto}
        </>
    );
}

export default Home;





 // const productos =[
    //     {
    //         id:1,nombre:"papa",marca:"pepita",precio:230,stock:30
    //     },
    //     {
    //         id:2,nombre:"te",marca:"tecito",precio:530,stock:25
    //     },
    //     {
    //         id:3,nombre:"mate",marca:"matecito",precio:280,stock:15
    //     },
    //     {
    //         id:4,nombre:"cafe",marca:"cafecito",precio:930,stock:50
    //     },
    // ]

//     const consultaBase = (habilitado) =>{
//         return new Promise((resolve,reject) =>{

//             if(habilitado) {
//                 resolve(productos)
//             }else{
//                 reject("No habilitado")
//             }
            
//         })

//     }

//    consultaBase(true).then(data => console.log(data))