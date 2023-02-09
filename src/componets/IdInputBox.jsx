import React from 'react';

const IdInputBox = ({ id, onChange }) => {
    return (
        <div className="inputID">
            <input type="text" name="id" placeholder="아이디(E-mail)" value={id} required onChange={onChange} />
        </div>
    );
};

export default IdInputBox;
