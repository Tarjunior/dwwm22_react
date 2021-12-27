import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const NotFound = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h3>erreur 404</h3>
        </div>
    );
};

export default NotFound;