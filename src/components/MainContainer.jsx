import React from 'react';

const MainContainer = ({ children, className = "" }) => {
    return (
        <section
            // Added w-full to ensure it takes full width
            // Added overflow-hidden to prevent horizontal scrollbars from children
            className={`py-12 bg-gray-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </section>
    );
};

export default MainContainer;