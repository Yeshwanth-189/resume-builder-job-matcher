import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Unauthorized</h1>
            <p>You do not have access to this page.</p>
            <button onClick={goBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Go Back
            </button>
        </div>
    );
};

export default Unauthorized;