import './styles.css';

import { Link } from 'react-router-dom';
function ActiveButtons({ type, onClick, usage }) {
  if (type === 'signup') {
    return (
      <Link to="/signup" className="signup-button">
        회원가입
      </Link>
    );
  } else if (type === 'login') {
    return (
      <Link to="/" className="login-button" onClick={onClick}>
        로그인
      </Link>
    );
  } else if (type === 'submit') {
    return (
      <Link to="/login" className="submit-button" onClick={onClick}>
        회원가입
      </Link>
    );
  } else if (type === 'findId') {
    return (
      <Link to="/findid" className="findId-button" onClick={onClick}>
        아이디
      </Link>
    );
  } else if (type === 'findPass') {
    return (
      <Link to="/findpass" className="findPass-button" onClick={onClick}>
        비밀번호 찾기
      </Link>
    );
  } else if (type === 'check') {
    return (
      <Link to="/login" className="check-button" onClick={onClick}>
        {usage}
      </Link>
    );
  }

  return <>Error</>;
}

export default ActiveButtons;
