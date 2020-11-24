import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './Admin.css'
import AllServiceTR from './AllServiceTR';

const AllService = () => {
    const [AllServiceLists ,setAllServiceLists] = useState([]);
    
    const [loggedInUser] = useContext(userContext);

    //---------------update request---------------------
    const handleOptionValue = (_id, event)=> {
               
        const updatableValues = {
            id : _id,
            status : event.target.value
            
        }
        console.log(updatableValues.id);
        const updateOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatableValues)
          }
        fetch('https://polar-headland-31811.herokuapp.com/update',updateOptions) 
        
    }

  
//---------------retrive all service order , shown in table --------------
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', }
      }
      useEffect(() => { 
        fetch('https://polar-headland-31811.herokuapp.com/allCustomerServices',requestOptions) 
           .then(response => response.json())
           .then(data => setAllServiceLists(data)); 
     }, [loggedInUser.email,requestOptions]);

    return (
        <div className = 'right-side '>
            <table className="table table-striped " id = 'event-list'> {/*------------------- List of all orders of customer */}
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Description</th> 
                        <th scope="col">Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        AllServiceLists.map( services => <AllServiceTR key= {services._id}  services={services} handleOptionValue={handleOptionValue}> </AllServiceTR>)
                    }   
                </tbody>
            </table>
        </div>
    );
};

export default AllService;