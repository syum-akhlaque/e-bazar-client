import React from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";


const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        alert("Ya Hoo !! Success!")
        const admin = { //object that will be push in database
            adminEmail: data.adminEmail,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin) 
        };
        fetch('https://polar-headland-31811.herokuapp.com/addAdmin', requestOptions)
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Ya Hoo !! Success!")
            }
        })
        .catch(error => {
            console.error(error)
        })
    };
    return (
        <div className="col-md-5 p-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-group">
                <input name="adminEmail" class="form-control" type="email" placeholder= 'Enter New Admin Email' ref={register({ required: true })} />
                {errors.adminEmail && <span className='error'>*Required</span>}
            </div>

            <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
        </form>
    </div>
    );
};

export default AddAdmin;