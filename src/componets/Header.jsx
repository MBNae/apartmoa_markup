import React, { useState } from 'react';
import JoinButton from './JoinButton';
import LoginButton from './LoginButton';
import Mypage from '../Pages/Mypage';
import Login from './Login';

const Header = () => {
    // 모달창 On/Off state
    const [display, setDisplay] = useState({
        loginShow: false,
        joinShow: false,
    });

    const { loginShow, joinShow } = display;

    //로그인 input 박스 State
    const [form, setForm] = useState({
        id: '',
        password: '',
    });
    const [check, setCheck] = useState(false);

    // 닫기/로그인 클릭 시 input박스 초기화
    const inputReset = () => {
        setForm({
            id: '',
            password: '',
        });
        setCheck(false);

        //<-- 로그인 성공 시 setDisplay로 창이 닫히도록 작업
    };

    // 모달창 On/Off
    const onDisplay = e => {
        const { name } = e.target;
        if (name === 'login') {
            setDisplay({ ...display, loginShow: !loginShow });
        } else if (name === 'join') {
            setDisplay({
                ...display,
                joinShow: !joinShow,
            });
        } else {
            setDisplay({
                loginShow: false,
                joinShow: false,
            });
            inputReset();
        }
    };

    // text input박스
    const onChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    // 체크박스
    const onCheck = () => {
        setCheck(!check);
    };

    // 로그인 submit
    const onSubmit = e => {
        e.preventDefault();

        // <--여기에 서버로 토큰 보내는 작업 추가
        // <--여기에 아이디 저장 true 시 쿠키에 로그인 정보 저장 작업 추가

        inputReset();
    };

    return (
        <header id="header">
            <div className="main_button">
                <LoginButton onDisplay={onDisplay} inputReset={inputReset} />
                <JoinButton onDisplay={onDisplay} />
                <Mypage />
            </div>
            <Login loginShow={loginShow} {...form} check={check} onDisplay={onDisplay} onChange={onChange} onSubmit={onSubmit} onCheck={onCheck} />
        </header>
    );
};

export default Header;
