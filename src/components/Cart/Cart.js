import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // <==== Reduce system to count product total price ====>
    const total = cart.reduce((total, pd) => total + pd.price*pd.quantity, 0);


    // <==== For loop system to count product total price ====>
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    // shipping cost
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Cart;