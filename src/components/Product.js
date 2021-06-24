import React from 'react';

export default function Product(props) {
    // console.log(props);
    const {product, onAdd} = props;

    return (
        <div>
            <img className="small" src={product.image} alt="text"></img>
            <h1> {product.name} </h1>
            <h2> ${product.price} </h2>        
            <button onClick={ () => onAdd(product) } > Add to Cart</button>    
        </div>
    )
}
