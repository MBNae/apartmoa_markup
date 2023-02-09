import React from 'react';
import CheckBox from './CheckBox';
import CloseButton from './CloseButton';
import IdInputBox from './IdInputBox';
import LoginLinkButton from './LoginLinkButton';
import PasswordInputBox from './PasswordInputBox';
import SubmitButton from './SubmitButton';
import SocialSignIn from './SocialSignIn';

const Login = ({ loginShow, onDisplay, id, password, check, onChange, onSubmit, onCheck }) => {
    if (!loginShow) {
        return null;
    }

    //소셜 아이콘 info
    const socialInfo = [
        {
            name: 'Naver',
            img: '../assets/img/socialIcon',
            desc: '네이버 로그인',
        },
        {
            name: 'Google',
            img: '../assets/img/socialIcon',
            desc: '구글 로그인',
        },
        {
            name: 'KakaoTalk',
            img: '../assets/img/socialIcon',
            desc: '카카오톡 로그인',
        },
    ];

    return (
        <div className="loginWrap">
            <div className="loginContainer">
                <CloseButton onDisplay={onDisplay} />
                <form onSubmit={onSubmit}>
                    <h2>로그인</h2>
                    <IdInputBox id={id} onChange={onChange} />
                    <PasswordInputBox password={password} onChange={onChange} />
                    <div className="flexInline" style={{ marginBottom: '29px' }}>
                        <CheckBox onCheck={onCheck} check={check}>
                            아이디 저장
                        </CheckBox>
                        <div className="flexInline">
                            <LoginLinkButton />
                        </div>
                    </div>
                    <SubmitButton />
                </form>
                <SocialSignIn socialInfo={socialInfo} />
            </div>
        </div>
    );
};

export default Login;
