import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
//import PropTypes from 'prop-types';

const GiftExpertApp = ( ) => {

    const [categories, setCategories ] = useState(['Dragon Ball']);
    
    
       // const Handleadd = () => {
         //   setCategories( [ ...categories,'Digimon']);
        //setCategories ( cats => [...cats, 'Digimon']); 
        //}


    return (
    <>

    <h2>GiftExpertApp</h2>
    <AddCategory 
    setCategories={ setCategories }/>
    
    <hr/>
   
    <ol>
        {
            categories.map( category => 
            
            <GiftGrid
            key= { category } 
            category ={ category }
            />
            )
        }
    </ol>
    </>
);

}


export default GiftExpertApp;