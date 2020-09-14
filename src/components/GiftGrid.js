import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({ category }) => {
     
    const { data: images, loading } = useFetchGifs( category );

    //se usa para no llamar la funcion cada vez que se renderice el componente, entonces se escribe un [] vacio. 
   // useEffect ( () => {
     //   getGifs ( category )
       // .then ( setImages );
   // }, [ category ])


     
    return (
        <>
           <h3 className="animate__animated animate__bounce" > { category } </h3> 
        
            { loading && <p> Loading</p> }

            <div className = "card-grid ">
            
            
                {
                    images.map( img => (
                   <GifGridItem
                        key={img.id} 
                        { ...img }
                   />   

                    ))
                }
            
            </div>  
        </>        
        
    )
}
