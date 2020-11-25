import React from 'react';
import '../Admin.css'

const AllOrderTR = (props) => {
    const { itemPrice,_id,status} = props.orders;
    const handleStatusValue = props.handleStatusValue;
     
    return (
        <>
             <tr className='bg-white'>
                <td className='py-4'>1</td>
                <td  className='py-4'>123456</td>
                <td  className='py-4'>{itemPrice}</td>
                <td>
                    {
                        (status === 'pending') && <>
                        <buttoon  onClick={()=>handleStatusValue(_id ,'confirm')} className="btn btn-warning">Confirm</buttoon>
                        <buttoon onClick={()=>handleStatusValue(_id ,'cencel')} className="btn btn-danger ml-2">Cencel</buttoon>
                        </>
                    }
                </td>
                <td className='py-4' > {status} </td>            
            </tr>
            <tr className='text-white'>.</tr>
        </>
    );
};

export default AllOrderTR;