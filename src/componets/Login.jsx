import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ display, id, password, onChange, onSubmit }) => {
    if (!display) {
        return null;
    }

    return (
        <div className="loginWrap">
            <div className="loginContainer">
                <form onSubmit={onSubmit}>
                    <h2>로그인</h2>
                    <div>
                        <input type="text" name="id" placeholder="아이디(E-mail)" value={id} required onChange={onChange} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호" value={password} required onChange={onChange} />
                    </div>
                    <div>
                        <span>
                            <input type="checkbox" id="saveIdCheck" />
                            <label htmlFor="saveIdCheck">아이디 저장</label>
                        </span>
                        <Link to="/">아이디 찾기</Link>
                        <Link to="/">비밀번호 찾기</Link>
                        <Link to="/">회원가입</Link>
                    </div>
                    <button type="submit">로그인</button>
                </form>
                <div>
                    <p>다른 계정으로 로그인</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
