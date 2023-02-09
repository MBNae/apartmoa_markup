import React from 'react';

const PasswordInputBox = ({ password, onChange }) => {
    return (
        <div className="inputPassword">
            <input type="password" name="password" placeholder="비밀번호" value={password} required onChange={onChange} />
        </div>
    );
};

export default PasswordInputBox;
