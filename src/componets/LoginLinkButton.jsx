import React from 'react';
import { Link } from 'react-router-dom';

//
const LoginLink = ({ path, text }) => {
    return (
        <div className="dotLeftMargin">
            <span className="dotShape"></span>
            <Link to={`/${path}`}>{text}</Link>
        </div>
    );
};
const LoginLinkButton = () => {
    const loginLink = [
        {
            id: 1,
            path: 'idSearch',
            text: '아이디 찾기',
        },
        {
            id: 2,
            path: 'passwordSearch',
            text: '비밀번호 찾기',
        },
        {
            id: 3,
            path: 'SignUp',
            text: '회원가입',
        },
    ];

    return (
        <>
            {loginLink.map(link => (
                <LoginLink key={link.id} path={link.path} text={link.text} />
            ))}
        </>
    );
};

export default LoginLinkButton;
