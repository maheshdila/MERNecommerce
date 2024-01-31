import React from 'react';
import {CartProvider} from "react-use-cart";
import {useCart} from "react-use-cart";

const Cart:React.FC = ()=>{

        const {
            items
        }=useCart();

    return(
        <>

                {console.warn(items)}

        </>
    )


}

export default Cart;