import './styles.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import ActiveButtons from '../../ActiveButtons';
import InputText from '../../InputText';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {  // onLogin prop 추가
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const setId = (loginId) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      id: loginId,
    }));
  };

  const setPassword = (loginPassword) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      password: loginPassword,
    }));
  };

  const handleLoginData = (e) => {
    if (loginInfo.id === '') {
      alert('아이디를 입력하세요');
      e.preventDefault();
    } else if (loginInfo.password === '') {
      alert('비밀번호를 입력하세요');
      e.preventDefault();
    }

    handlePost();
  };

  const handlePost = () => {
    fetch('https://ummai.cosh.kr/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.result === 'success') {
          console.log('Success');
          onLogin();
          navigate('/');
        } else if (data.result === 'fail') {
          console.log('Fail:', data.detail);
          alert('로그인 실패: ' + data.detail);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <h1>Fall in Us</h1>
      <form className="id-form">
        <FaUser className="login-icon" />
        <InputText
          type="text"
          placeholder="아이디"
          value={loginInfo.id}
          onChange={setId}
        />
      </form>
      <form className="password-form">
        <FaLock className="password-icon" />
        <InputText
          type={isVisible ? 'text' : 'password'}
          placeholder="비밀번호"
          value={loginInfo.password}
          onChange={setPassword}
        />
        <FaEyeSlash
          className={`hide-password ${isVisible ? ' hidden' : ''}`}
          onClick={handlePasswordVisibility}
        />
        <FaEye
          className={`show-password ${isVisible ? '' : ' hidden'}`}
          onClick={handlePasswordVisibility}
        />
      </form>
      <div className="active-buttons">
        <ActiveButtons type="signup" />
        <ActiveButtons type="login" onClick={handleLoginData} />
      </div>
      <div className="forgot-myInfo">
        <ActiveButtons type="findId" className="forgot-id" />
        <span> / </span>
        <ActiveButtons type="findPass" className="forgot-password" />
      </div>
    </div>
  );
}

export default LoginPage;
