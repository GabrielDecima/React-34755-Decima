import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

const [producto, setproducto] = useState([]);
useEffect(() => {
    const consultarDatos= () =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=training')
        .then((response) => response.json())
        .then(({results}) => {
            results.forEach(producto => {
               
    
                setproducto((results).map((detalle) => 
                    
                    <div className="card" key={detalle.id} style={{width: '18rem'}}>
                        <img src={detalle.thumbnail} className="imgCard" alt="" />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">{detalle.title}</p>
                                <p className="card-text">Marca: {detalle.attributes[0].value_name}</p>
                                <p className="card-text">Precio: ${detalle.price}</p>
                                <button className='btn btn-dark'><Link className='nav-link' to={"/producto/" + detalle.id}>Ver producto</Link></button>
                            </div>
                    </div>
    
               ))
    
            }) 
        })
    } 
    consultarDatos()
    
}, []);



    return (
        <div className='row'>
           {producto}
        </div>
    );
}

export default Home;


