import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';

const Home = () => {

const [producto, setproducto] = useState([]);

// consulto el estado de darkMode
const {darkMode, toggleDarkMode} = useContext(DarkModeContext);


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
        // Agregando DarkMODE//
        <div className={darkMode ?'darkMode row': 'row'}>
            <button onClick ={() => toggleDarkMode()}>Modo de visualización</button>
           {producto}
           <p>{darkMode}</p>
           
        </div>
    );
}

export default Home;


