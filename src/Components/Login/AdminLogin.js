import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { adminContext } from '../../App';

const AdminLogin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInAdmin, setLoggedInAdmin] = useContext(adminContext)
    console.log('loggedInAdmin')
    console.log(loggedInAdmin)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const onSubmit = (data,e) => {
        e.preventDefault();
        if(data.userId === 'admin' &&  (data.password === '123456')) {
        const newUSer = {
            isLoggedin: true,
            userId: data.userId,
            password: data.password
        }
        setLoggedInAdmin(newUSer);
        e.target.reset();
        history.replace(from);
    }
            
    }
    return (
        <div className= 'bg-light'>
            <div className="col-md-4 offset-md-4 p-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white mt-5 p-5'>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input name="userId" className="form-control" type="text"  ref={register({ required: true })} />
                    {errors.userId && <span className='error'>*Required </span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" className="form-control" type="password"  ref={register({ required: true })} />
                    {errors.password && <span className='error'>*Required </span>}
                </div>

                <div className="text-center">
                     <button className="btn  bg-warning px-5" type='submit' >Sign Up</button>
                </div>
             </form>
            </div>   

            <div className="col-md-4 offset-md-4 px-5 ">
                <div className='bg-white  p-5'>   
                    <p><b>Use the following credentials to login</b></p>
                    <p><b>User Id:</b> <br/>admin </p>
                    <p><b>Password:</b> <br/> 123456 </p>
                </div>
            </div>  
        </div>
    );
};

export default AdminLogin;