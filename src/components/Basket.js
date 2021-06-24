import React from 'react'

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;   // Destructuring an object
    const itemsPrice = cartItems.reduce( (a,c) => a + c.price * c.qty, 0 );
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-2">
            <h2>Cart Items</h2>
            <div> { cartItems.length === 0 && <div>Cart is empty</div> }</div>

            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2"> {item.name} </div>
                    <div className="col-2">
                        <button  onClick={() => onAdd(item)} className="add"> + </button>
                        <button onClick={() => onRemove(item)} className="remove"> - </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} * {item.price.toFixed(2)}
                    </div>
                </div>
            ))}

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>

                    <div className="row">
                        <div className="col-2"> Items Price </div>
                        <div className="col-1 align-right"> {itemsPrice.toFixed(2)} </div>
                    </div>

                    <div className="row">
                        <div className="col-2"> Tax Price </div>
                        <div className="col-1 align-right"> {taxPrice.toFixed(2)} </div>
                    </div>
                    <div className="row">
                        <div className="col-2"> Shipping Price </div>
                        <div className="col-1 align-right"> {shippingPrice.toFixed(2)} </div>
                    </div>
                    <div className="row">
                        <div className="col-2"> <strong> Total Price  </strong></div>
                        <div className="col-1 align-right"> <strong> {totalPrice.toFixed(2)}</strong> </div>
                    </div>
                    <div className="row">
                        <button onClick={() => alert('Implement Checkout!!')}> Check Out</button>

                    </div>
                
                
                
                



                </>
            )}


            
        </aside>
    )
}
