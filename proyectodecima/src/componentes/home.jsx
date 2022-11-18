import React, {useState, useEffect} from 'react';

const Home = () => {

const [producto, setproducto] = useState([]);
useEffect(() => {
    const consultarDatos=() =>{

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
        .then((response) => response.json())
        .then(({results}) => {
            
            results.forEach(producto => {
                console.log(producto)
    
                setproducto((results).map((detalle) => 

                    <div className="card" style={{width: '18rem'}}>
                        <img src="" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">{detalle.title}</p>
                                <p className="card-text">Marca: {detalle.attributes[0].value_name}</p>
                                <p className="card-text">Precio: ${detalle.price}</p>
                                <a href="#" className="btn btn-dark">Agregar al carrito</a>
                            </div>
                    </div>

               ))
    
            }) 
        })
    }
    consultarDatos()
    
}, []);



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