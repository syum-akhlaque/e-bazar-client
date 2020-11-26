import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PromoCodesTr from './PromoCodesTr';
import UpdatePromoCodes from './UpdatePromoCodes';

const PromoCodes = () => {
        //----------------------get promocodes-------------------
        const [promoCodes ,setPromocodes] = useState([]);
        const [editablePromoInfo ,setEditablePromoInfo] = useState({});
        const handleUpdatePromoCode = (_id, useTime, endDate, discountRate,activeStatus)=>{

            const editableInfo = {
                _id: _id,
                useTime: useTime,
                endDate: endDate,
                discountRate: discountRate,
                activeStatus: activeStatus
            }
            setEditablePromoInfo(editableInfo)
            document.getElementById('updatePromoCodes').style.display='block';
            document.getElementById('promoCodeTable').style.display='none'
        }
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

           
    return (
        <div className="px-4 py-5">
             <table className="table" id='promoCodeTable'> {/*------------------- List of all orders of customer */}
               
                <tbody>
                {
                     promoCodes.map( orders => <PromoCodesTr key= {orders._id}  orders={orders} handleUpdatePromoCode={handleUpdatePromoCode}> </PromoCodesTr>)
                }  
                </tbody>
            </table>
           
            <div  id='updatePromoCodes' >
                <UpdatePromoCodes editablePromoInfo={editablePromoInfo}></UpdatePromoCodes>
            </div>
        </div>
    );
};

export default PromoCodes;