import React from 'react';

const ReviewItem = (props) => {
  const {name, quantity, key, price} = props.product;
  const reviewStyle = {
    borderBottom:'1px solid lightGray',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft: '250px'
  }
  return (
    <div style={reviewStyle}>
      <h3 className='product-name'>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p><small>${price}</small></p>
      <button 
      onClick = {()=>props.removeProduct(key)}
      className='main-button'>Remove</button>
    </div>
  );
};

export default ReviewItem;