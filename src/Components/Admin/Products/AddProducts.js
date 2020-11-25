import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../Admin.css'

const AddProducts = () => {
    const [file, setFile] = useState({})
    const [activeStatus, setActiveStatus] = useState('yes')
    const { register, handleSubmit, errors } = useForm();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleActiveStatus=(ststus)=>{
        setActiveStatus(ststus)
    }

    const onSubmit = (data,e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('discount', data.discount);
        formData.append('shippingCharge', data.shippingCharge);
        formData.append('color', data.color);
        formData.append('size', data.size);
        formData.append('activeStatus', activeStatus);

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Ya Hoo !! Success!")
            }
        })
        .catch(error => {
            console.error(error)
            console.log('not send')
        })
        alert('Product Added Successfully')
        e.target.reset();
    }
    return (
        <div className="bg-white col-md-4 offset-md-4 p-5 add-products">
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input name="name" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.name && <span className='error'>*Required </span>}
            </div>

            <div className="form-group">
                <label htmlFor="price">Product Price(Before Discount)</label>
                <input name="price" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.price && <span className='error'>*Required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="discount">Discount Rate</label>
                <input name="discount" className="form-control" type="text"  ref={register({ required: true})} />
                {errors.discount && <span className='error'>*Required  </span>}
            </div>

            <div className="form-group">
                <label htmlFor="shippingCharge">Shipping Charge</label>
                <input name="shippingCharge" className="form-control" type="text"  ref={register({ required: true})} />
                {errors.shippingCharge && <span className='error'>*Required  </span>}
            </div>

            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input name="color" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.color && <span className='error'>*Required, minimum 3 charecters  </span>}
            </div>

            <div className="form-group">
                <label htmlFor="size">Size</label>
                <input name="size" className="form-control" type="text"  ref={register({ required: true })} />
                {errors.size && <span className='error'>*Required </span>}
            </div>

            <div className="form-group">
                <label className='pl-1' htmlFor="file">Upload Image (500*500)</label>
                <input onChange={handleFileChange} type="file" name="file" id="" ref={register({ required: true })}/>
               {errors.file && <span className='error'>file is required </span>}
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

export default AddProducts;