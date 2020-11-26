import React from 'react';
import '../Admin.css'

const PromoCodesTr = (props) => {
    const { _id,activeStatus,promoCodes,startDate,endDate,discountRate, useTime,fullStartDate} = props.orders;
    const handleUpdatePromoCode = props.handleUpdatePromoCode;
    const startTime = new Date(fullStartDate).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") 
  
    return (
        <>
        <tr className='bg-white'>
           <td className="py-4" colspan="3">{promoCodes}</td>
           <td> <button onClick={()=>handleUpdatePromoCode(_id, useTime, endDate, discountRate,activeStatus )} className="btn btn-warning px-5">Edit</button></td>
           <td>
               {
                   (activeStatus === 'yes') ?  //---------check promotion active status-------------
                   <button className="btn btn-success px-5">Active</button> :
                   <button className="btn btn-danger px-5 ">Deactive</button>
               }
           </td>  
       </tr>
       
       <tr className='bg-white p-5' >
            <td>Create Date: {startTime} , {startDate}</td>
            <td>useage {useTime}</td>
            <td>Discount Rate {discountRate}%</td>
            <td>Start Date: {startDate}</td>
            <td>End Date: {endDate}</td>
       </tr>
       <br/>
   </>
    );
};

export default PromoCodesTr;