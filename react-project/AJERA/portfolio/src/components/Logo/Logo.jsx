import React, { useState } from 'react';

function Logo() {
    const [product] = useState(data);
  return (
    <div className='product-container'>{product.map((product)=>(<product key={product.id} product={product} />))}</div>
  );
}

export default Logo;


