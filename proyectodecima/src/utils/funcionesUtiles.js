export const consultarDatos= async (ruta) =>{
    const response = await fetch(ruta)
    const productos = await response.json()
        return productos
    
} 



// 'https://api.mercadolibre.com/sites/MLA/search?q=training'