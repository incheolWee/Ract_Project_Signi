import React from 'react';
import Header from '../components/js/Header';
import MainContent from '../components/js/MainContent';
import Illustration from '../components/js/Illustration';

const LogPage = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <MainContent />
                <Illustration />
            </div>
        </div>
    );
};

export default LogPage;
