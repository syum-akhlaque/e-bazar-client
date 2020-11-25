import React from 'react';
import '../../Home/Shop.css'

const ProductCards2 = (props) => {
    const {name , price, discount, image, activeStatus} = props.products;
    
    return (
        // (activeStatus==='yes')&&  // for admin product page innored active status 
        <div className="col-md-3 p-2" > 
          <div className="card" >
              <div className="card-body" >
              <img className='card-img-top' src={"data:image/png;base64," + image.img} alt='imgd'/>
                  <p className="card-title pt-1 ">{name}</p>
                  <span className='d-flex pt-2 '>
                      <h5>BDT. {price}</h5>
                      <h6 className='ml-auto bg-warning'>{discount}</h6>
                  </span>
               </div>
               <div className="overlay">
                <button className="btn btn-warning" >Edit </button>
             </div>     
          </div>        
         </div>
    );
};

export default ProductCards2;