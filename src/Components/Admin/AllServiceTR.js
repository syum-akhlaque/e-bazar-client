import React from 'react';
import './Admin.css'

const AllServiceCards = (props) => {
    const {name, serviceName, email, projectDetails,status ,_id} = props.services;
    const handleOptionValue = props.handleOptionValue;
    
    return (
        <>
             <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{projectDetails}</td>
                <td className="form-group select">
                    <select onChange={(event)=>handleOptionValue(_id ,event)} className="form-control select" id="sel1">
                        <option className='text-danger' selected>{status}</option>
                        <option className='text-danger'>Pending</option>
                        <option className='text-success'>Done</option>
                        <option className='text-warning'>On Going</option>            
                    </select>
                </td>
                
            </tr>
        </>
    );
};

export default AllServiceCards;