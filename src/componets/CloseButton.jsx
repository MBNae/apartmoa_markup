import React from 'react';

const CloseButton = ({ onDisplay, inputReset }) => {
    return (
        <div
            className="closeButton"
            onClick={e => {
                onDisplay(e);
            }}
        ></div>
    );
};

export default CloseButton;
