import React from 'react';

const NotFound = () => {
  const textStyle = {
    fontSize : '50px',
    fontWait : '600',
    color : 'orange'
  }
  return (
    <div style={textStyle}>
      <h2>Sorry, Page Not Found.</h2>
      <h3>Error 404!!!</h3>
    </div>
  );
};

export default NotFound;