import React from 'react'
import Product from './Product'

export default function Main(props) {
    const {products, onAdd} = props


 
    return (
      <main clasname="block col-1">
          <h1> Productsssssssssssssss</h1>
          <div className="row">
              {/* Mapping the 'products' array and making a new array by passing data to 'Product' component as props */}
              {products.map( currentProudct => (
                  <Product key={currentProudct.id} product={currentProudct} onAdd={onAdd} />
              ))}

          </div>
      </main>
    )
}
