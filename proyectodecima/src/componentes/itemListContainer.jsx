import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [producto, setproducto] = useState([]);
    const {id} =useParams()
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=training')
        .then(response => response.json())
        .then(productos =>{
            const resultado = productos.results.find((productoArray) => productoArray.id == id) 
           
            setproducto(resultado) 
          

        })
        
    
    }, []);



    return (
        <>
          <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                         <img src={producto.thumbnail} className="img-fluid rounded-start" alt={producto.title} />
                     </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default ItemListContainer;
