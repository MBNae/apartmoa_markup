import React from 'react';

const CheckBox = ({ children, onCheck, check }) => {
    return (
        <label className="checkboxLabel">
            <div className={`checkboxCircle ${check ? 'active' : null}`}></div>
            <input type="checkbox" id="saveIdCheck" name="saveIDCheck" value="saveIDCheck" onChange={onCheck} checked={check} />
            {children}
        </label>
    );
};

export default CheckBox;
