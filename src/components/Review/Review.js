import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from'../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';



const Review = () => {
  const [cart,setCart]= useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = ()=>{
    setCart([]);
    setOrderPlaced(true)
    processOrder();
  }

  const removeProduct = (productKey)=> {
    const product = cart.filter(pd=> pd.key !== productKey);
    setCart(product);
    removeFromDatabaseCart(productKey)
    console.log('previousProduct',productKey);
}
   
  useEffect(()=>{
      const sameProduct = getDatabaseCart();
      const productKeys = Object.keys(sameProduct);
      // to find out the value of property.
      // const product = productKeys.map(key=> sameProduct[key]);
      const cartProducts = productKeys.map(key=> {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = sameProduct[key];
        return product
      });
      setCart(cartProducts)
      // console.log(cartProducts);
  }, []);

  let thankyou;
  if(orderPlaced){
    thankyou = <img src={happyImage} alt="" />
  }

  return (
    <div className='twin-container'>
      <div className='product-container'>
          {
            cart.map(pd => <ReviewItem 
              removeProduct = {removeProduct}
              key = {pd.key}
              product = {pd}></ReviewItem>)
          }
          {thankyou}

      </div>
      <div>
          <Cart cart={cart}>
            <button
                onClick={handlePlaceOrder} 
                className='main-button'>Place Order</button>
          </Cart>
      </div>
   
    </div>
  );
};

export default Review;