import React, { useEffect, useState } from 'react';
import '../Admin.css'
import AllOrderTR from './AllOrderTR';

const AllOrder = () => {
    const [AllOrders ,setAllOrders] = useState([]);
    const [status,setStstus]= useState('')
    
    const handleOrderListByStatus =(filterStatus)=>{
        setStstus(filterStatus);

        // change operation color by status
        if(filterStatus==='confirm'){
            document.getElementById('confirm').style.backgroundColor='#21AA00';
            document.getElementById('all').style.backgroundColor='white'   ;
            document.getElementById('cencel').style.backgroundColor='white';
            document.getElementById('pending').style.backgroundColor='white';
           
        }
        if(filterStatus ==='cencel'){
            document.getElementById('cencel').style.backgroundColor='#FF3D3D';
            document.getElementById('all').style.backgroundColor='white';
            document.getElementById('pending').style.backgroundColor='white';
            document.getElementById('confirm').style.backgroundColor='white'
        }
        if(filterStatus==='pending'){
            document.getElementById('pending').style.backgroundColor='#0099FF';
            document.getElementById('all').style.backgroundColor='white'   ;
            document.getElementById('cencel').style.backgroundColor='white';
            document.getElementById('confirm').style.backgroundColor='white';
        }
        if(filterStatus===''){
            document.getElementById('all').style.backgroundColor='#FFF700';
            document.getElementById('pending').style.backgroundColor='white';
            document.getElementById('cencel').style.backgroundColor='white';
            document.getElementById('confirm').style.backgroundColor='white'

        }
    }
    //---------------retrive all  order and filter by status --------------
    // eslint-disable-next-line react-hooks/exhaustive-deps
  
    useEffect(() => { 
        fetch('https://gentle-crag-19557.herokuapp.com/orderByStatus?status='+status) 
           .then(response => response.json())
           .then(data =>  setAllOrders(data)); 
     }, [status]);

    //---------------update request---------------------
    const handleStatusValue = (_id, statusValue)=> {      
      
        const updatableValues = {
            id : _id,
            status : statusValue    
        }
        const updateOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatableValues)
          }
        fetch('https://gentle-crag-19557.herokuapp.com/updateStatus',updateOptions)  
        .then(
            fetch('https://gentle-crag-19557.herokuapp.com/orderByStatus?status='+status) // 
            .then(response => response.json())
            .then(data =>  setAllOrders(data))
        )

       
    }

    return (
        <div className = 'right-side p-md-5 '>

        <div className="row row-cols-md-5">
           <div className="p-3">
                <div onClick={()=>handleOrderListByStatus('')} className="col pb-5 pt-2 pr-5 br-8px" role="button" id='all'>All</div>
            </div>
            <div className="p-3" >
                <div onClick={()=>handleOrderListByStatus('pending')} className="col pb-5 pt-2 pr-5 br-8px" role="button" id='pending'>Pending</div>
            </div>
            <div className="p-3" >
                <div onClick={()=>handleOrderListByStatus('confirm')} className="col pb-5 pt-2 pr-5 br-8px" role="button" id='confirm'>Confirmed</div>
            </div>
            <div className="p-3">
                <div onClick={()=>handleOrderListByStatus('cencel')} className="col pb-5 pt-2 pr-5 br-8px" role="button" id='cencel'>Cancelled</div>
            </div>
        </div>

            <table className="table " id = 'event-list'> {/*------------------- List of all orders of customer */}
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Order Number</th>
                        <th scope="col">Item Price</th>
                        <th scope="col">Action</th> 
                        <th scope="col">Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        AllOrders.map( orders => <AllOrderTR key= {orders._id}  orders={orders} handleStatusValue ={handleStatusValue}> </AllOrderTR>)
                    }   
                </tbody>
            </table>
        </div>
    );
};


export default AllOrder;