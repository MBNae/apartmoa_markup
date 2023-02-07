import React, { useState } from 'react';
import JoinButton from './JoinButton';
import LoginButton from './LoginButton';
import Mypage from '../Pages/Mypage';
import Login from './Login';

const Header = () => {
    const [display, setDisplay] = useState(false);
    const [form, setForm] = useState({
        id: '',
        password: '',
    });

    const onDisplay = () => {
        setDisplay(!display);
    };

    const onChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <>
            <div className="main_button">
                <LoginButton onDisplay={onDisplay} />
                <JoinButton onDisplay={onDisplay} />
                <Mypage />
            </div>
            <Login display={display} {...form} onChange={onChange} onSubmit={onSubmit} />
        </>
    );
};

export default Header;
