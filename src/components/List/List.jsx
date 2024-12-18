import { useState, useEffect } from 'react'
import { Produit } from '../Produit/Produit'

export function List({list}) { 

    const [filter, setFilter]=useState(0)
    const [filteredProducts, setFilteredProducts]=useState([])

    useEffect(() => {
        if(filter != 0){
            setFilteredProducts(list.filter((elem) => elem.categorie.id == filter))
        }else{
            setFilteredProducts(list)
        }
        }, [filter, list]) 
    
    function handleFilter(e) {
        if(e.target.value != 0){
            setFilter(e.target.value)
        }else{
            setFilteredProducts(list)
        }
    }

    return (
        <>
            <h2>Liste des produits</h2>
            <button onClick={handleFilter} value="0">Tous</button>
            <button onClick={handleFilter} value="1">Epices</button>
            <button onClick={handleFilter} value="2">Céréales</button>
            <button onClick={handleFilter} value="3">Conserves</button>
            <button onClick={handleFilter} value="4">Confiseries</button>
            {filteredProducts.map((product, index) => 
                <Produit key={index} product={product} />
            )} 
        </>
    )
}