import React from 'react'

export default function Header(props) {
    const {countCartItems} = props;

    return (
        <header className="block row center">
            <div>
                <a href="#/"> <h1>Shopping Cart</h1> </a>             
            </div>
            <div>
                <a href="#/cart"> 
                 Cart {''} 
                 {countCartItems > 0 ? (
                     <button className="badge"> {countCartItems} </button>
                 ) : (' ')}
                 </a>

                <a href="#/signin"> Signin</a>
            </div>
        </header>
    )
}
