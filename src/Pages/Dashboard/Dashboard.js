import React from 'react';
import Admin from '../../Components/Admin/Admin';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

const DashboardPage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Admin></Admin>
        </div>
    );
};

export default DashboardPage;