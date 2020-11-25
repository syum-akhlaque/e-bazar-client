import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../Admin.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const AddPromoCodes = () => {
   
    const { register, handleSubmit, errors } = useForm();
    const [activeStatus, setActiveStatus] = useState('yes')
    const handleActiveStatus=(ststus)=>{
        setActiveStatus(ststus)
    }
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date("1/21/2021") ); 

    // console.log(endDate.getDate()+'/'+ (endDate.getMonth() + 1)+'/'+ endDate.getFullYear()  )

    const onSubmit = (data,e) => {
        e.preventDefault();

        const promoData = { // this order data send to database
            promoCodes: data.promoCodes.toUpperCase(),
            startDate: startDate.getDate()+'/'+ (startDate.getMonth() + 1)+'/'+ startDate.getFullYear(),
            endDate: endDate.getDate()+'/'+ (endDate.getMonth() + 1)+'/'+ endDate.getFullYear(),
            discountRate: data.discountRate,
            useTime: data.useTime,
            activeStatus: activeStatus,
            }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(promoData)
        };
      
        fetch('http://localhost:5000/addPromoCodes', requestOptions) // fetch req for add new org 
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        alert('Promo Code Added Successfully')
        e.target.reset();
    }
    return (
        <div className="bg-white col-md-4 offset-md-4 my-5 p-5 add-products">
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <label htmlFor="promoCodes">Promo Codes</label>
                <input name="promoCodes" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.promoCodes && <span className='error'>*Required </span>}
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label> <br/>
               
                <DatePicker className="px-5 pt-2 pb-1" closeOnScroll={true} selected={startDate}  onChange={date => setStartDate(date)}/>
               
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <DatePicker className="px-5 pt-2 pb-1" closeOnScroll={true} closable selected={endDate} onChange={date => setEndDate(date)}/>
            </div>

            <div className="form-group">
                <label htmlFor="discountRate">Discount Rate</label>
                <input name="discountRate" className="form-control" type="text"  ref={register({ required: true})} />
                {errors.discountRate && <span className='error'>*Required  </span>}
            </div>

            <div className="form-group">
                <label htmlFor="useTime">Use Time</label>
                <input name="useTime" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.useTime && <span className='error'>*Required </span>}
            </div>

            <div className='d-flex'>
                <p>Active (Default: yes)</p>
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

export default AddPromoCodes;