import React, { useEffect, useState } from 'react';
import PromoCodesTr from './PromoCodesTr';

const PromoCodes = () => {
        //----------------------get promocodes-------------------
        const [promoCodes ,setPromocodes] = useState([]);
        const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        }
        }
        useEffect(() => {
        fetch('http://localhost:5000/getPromocodes',requestOptions) 
            .then(response => response.json())
            .then(data => setPromocodes(data)); 
        }, [promoCodes]);

            //---------------update request---------------------
    // const handleUpdatePromoCodes = (_id, statusValue)=> {      
      
    //     const updatableValues = {
    //         id : _id,
    //         activeStatus : statusValue    
    //     }
    //     const updateOptions = {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(updatableValues)
    //       }
    //     fetch('http://localhost:5000/updatePromoActiveStatus',updateOptions)  
    //     .then(
    //         // fetch('http://localhost:5000/orderByStatus?status='+status) // 
    //         // .then(response => response.json())
    //         // .then(data =>  setAllOrders(data))
    //     )  
    // }
    return (
        <div className="px-4 py-5">
             <table className="table"> {/*------------------- List of all orders of customer */}
               
                <tbody>
                {
                     promoCodes.map( orders => <PromoCodesTr key= {orders._id}  orders={orders}> </PromoCodesTr>)
                }  
                </tbody>
            </table>
        </div>
    );
};

export default PromoCodes;