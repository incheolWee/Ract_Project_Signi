import React from 'react';
import '../css/MainContent.css';

const MainContent = () => {
    return (
        <main className='main-content'>
            <h1>종이보다 빠르고 간편한 전자서명 솔루션</h1>
            <p>당신만의 서명을 간편하게 등록하여 서명이 필요한 문서에 손쉽고 빠르게 서명하세요. 하나의 문서로 여러 명이서 함께 서명할 수 있습니다.</p>
            <button className='google-login-button'> 구글로 로그인하여 시작하기</button>
        </main>
    );
};

export default MainContent;