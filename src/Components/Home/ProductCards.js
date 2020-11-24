import React from 'react';
import './Shop.css'

const ProductCards = (props) => {
    const {name , price, discount, image, activeStatus} = props.products;
    const handleUpdateCart= props.handleUpdateCart;

    return (
        (activeStatus==='yes')&&  // check active status is ok?
        <div className="col p-2" >
          <div className="card" >
              <div className="card-body" >
              <img className='card-img-top' src={"data:image/png;base64," + image.img} alt='img'/>
                  <p className="card-title pt-1 ">{name}</p>
                  <span className='d-flex pt-2 '>
                      <h5>BDT. {price}</h5>
                      <h6 className='ml-auto bg-warning'>{discount}</h6>
                  </span>
               </div>
               <div className="overlay">
                <button className="btn btn-warning" onClick={()=>handleUpdateCart(props.products)}>Add to Cart </button>
             </div>     
          </div>        
         </div>
    );
};

export default ProductCards;