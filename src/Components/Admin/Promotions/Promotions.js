import React from 'react';
import AddPromoCodes from './AddPromoCodes';
import PromoCodes from './PromoCodes';
import './Promotions.css'

const Promotions = () => {
    return (
       <div>
            <div id='promoCodes'>
                <PromoCodes></PromoCodes>
            </div>
            <div id='addPromoCodes'> 
                <AddPromoCodes></AddPromoCodes>
            </div>
       </div>
    );
};

export default Promotions;