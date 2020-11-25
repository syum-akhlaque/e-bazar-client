import React from 'react';
import Shop from '../../Components/Home/Shop';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Shop></Shop>
        </div>
    );
};

export default Home;