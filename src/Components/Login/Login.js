import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';


const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory()

    const onSubmit = (data,e) => {
        e.preventDefault();
        e.target.reset();
            const newUSer = {
                isLoggedin: true,
                number: data.number,
                password: data.password
            }
            setLoggedInUser(newUSer)
            console.log(loggedInUser)
            alert("sign up successfull")
            history.push({
                pathname: '/cart',
              })
    }
    return (
        <div className= 'bg-light'>
            <div className="col-md-4 offset-md-4 p-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white mt-5 p-5'>
                <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input name="number" className="form-control" type="text"  ref={register({ required: true })} />
                    {errors.number && <span className='error'>*Required </span>}
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

        </div>
    );
};

export default Login;