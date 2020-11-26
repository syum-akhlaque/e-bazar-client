import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../Admin.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const UpdatePromoCodes = (props) => {
    const {_id, useTime,activeStatus}=props.editablePromoInfo;
   
    const { register, handleSubmit, errors } = useForm();
    const [newActiveStatus, setActiveStatus] = useState(activeStatus)
    const handleActiveStatus=(ststus)=>{
        console.log(ststus)
        setActiveStatus(ststus)
    }
    let [endDate, setEndDate] = useState(new Date("1/21/2021") ); 

    const onSubmit = (data,e) => {
        e.preventDefault();
       //---------------update request---------------------
        const updatablePromoData = { 
            id : _id,
            endDate: endDate.getDate()+'/'+ (endDate.getMonth() + 1)+'/'+ endDate.getFullYear(),
            useTime: data.useTime,
            activeStatus: newActiveStatus,
            }
        const updateOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatablePromoData)
          }
        fetch('http://localhost:5000/updatePromoCodes',updateOptions)  
        .then(
            // fetch('http://localhost:5000/orderByStatus?status='+status) // 
            // .then(response => response.json())
            // .then(data =>  setAllOrders(data))
        )  
        alert("Successfully updated");
        document.getElementById('updatePromoCodes').style.display='none';
        document.getElementById('promoCodeTable').style.display='block'
    }
    return (
        <div className="bg-white col-md-4 offset-md-4 my-5 p-5 add-products">
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <DatePicker className="px-5 pt-2 pb-1" closeOnScroll={true} closable selected={endDate} onChange={date => setEndDate(date)}/>
            </div>

            <div className="form-group">
                <label htmlFor="useTime">Use Time</label>
                <input name="useTime" className="form-control" type="text" defaultValue={useTime} ref={register({ required: true })} />
                {errors.useTime && <span className='error'>*Required </span>}
            </div>

            <div className='d-flex'>
                <p>Current ststus: {activeStatus}</p>
                <p className='d-flex ml-auto'>
                  <button onClick={()=>handleActiveStatus('yes')}type="button" className="btn light-border btn-sm">Yes</button>
                  <button onClick={()=>handleActiveStatus('no')} type="button" className="btn light-border btn-sm">No</button>
                </p>
                
            </div>

            <button className="btn  bg-warning px-5" type='submit' >Send</button>
        </form>
    </div>
    );
};

export default UpdatePromoCodes;