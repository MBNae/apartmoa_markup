import React from 'react';

const Social = ({ name, img, desc }) => {
    return (
        <span className="socialImg">
            <i className="ir">{name}</i>
        </span>
    );
};

const SocialSignIn = ({ socialInfo }) => {
    return (
        <div className="socialBox">
            <p>다른 계정으로 로그인</p>
            <span>
                {socialInfo.map((social, index) => (
                    <Social key={index} {...social} />
                ))}
            </span>
        </div>
    );
};

export default SocialSignIn;
