import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { DarkModeContext } from '../context/darkModeContext';

// Realizamos la consulta a la base de datos para poder traer los productos. 
const ItemListContainer = () => {

    const [producto, setproducto] = useState([]);
    const {id} =useParams()
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=training')
        .then(response => response.json())
        .then(productos =>{
            const resultado = productos.results.find((productoArray) => productoArray.id == id) 
           
            setproducto(resultado) 
          

        })
        
    
    }, []);


// Armamos la base que tendras los productos. Además llamamos a detalle producto. 
    return (
        <>
        {/* Agregando DarkMODE */}
          <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'}style={{maxWidth: '540px'}}>
          <button onClick ={() => toggleDarkMode()}>Modo de visualización</button>
           <ItemDetail producto={producto}/>
         </div>

            
        </>




    );
}

export default ItemListContainer;




