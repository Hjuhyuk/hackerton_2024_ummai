import './styles.css';

import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { IoHappyOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';

import ActiveButtons from '../../ActiveButtons';
import ErrorMessage from '../../ErrorMessage';
import InputText from '../../InputText';
import SelectCollege from '../../SelectCollege';
import SelectCountry from '../../SelectCountry';
import SelectMajor from '../../SelectMajor';

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    std_no: '',
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    country: '',
    college: '',
    major: '',
  }); // json으로 받으면 될거고 (JSON.stringify())

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const [isVisiblePasswordConfirm, setIsVisiblePasswordConfirm] =
    useState(false);

  const handlePasswordVisibility = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handlePasswordConfirmVisibility = () => {
    setIsVisiblePasswordConfirm(!isVisiblePasswordConfirm);
  };

  const [isCorrectStdNo, setIsCorrectStdNo] = useState(true);
  const [isCorrectId, setIsCorrectId] = useState(true);
  const [isCorrectPasswd, setIsCorrectPasswd] = useState(true);
  const [isMatchPasswd, setIsMatchPasswd] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);

  useEffect(() => {
    const regex = /^[0-9]{10}$/;
    if (regex.test(signUpInfo.std_no)) {
      setIsCorrectStdNo(true);
    } else {
      setIsCorrectStdNo(false);
    }
  }, [signUpInfo.std_no]);

  useEffect(() => {
    if (signUpInfo.id.length < 6 || signUpInfo.id.length > 12) {
      setIsCorrectId(false);
    } else {
      setIsCorrectId(true);
    }
  }, [signUpInfo.id]);

  useEffect(() => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{8,}$/;
    if (regex.test(signUpInfo.password)) {
      setIsCorrectPasswd(true);
    } else {
      setIsCorrectPasswd(false);
    }
  }, [signUpInfo.password]);

  useEffect(() => {
    if (signUpInfo.password !== signUpInfo.passwordConfirm) {
      setIsMatchPasswd(false);
    } else {
      setIsMatchPasswd(true);
    }
  }, [signUpInfo.password, signUpInfo.passwordConfirm]);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(signUpInfo.email)) {
      setIsCorrectEmail(true);
    } else {
      setIsCorrectEmail(false);
    }
  }, [signUpInfo.email]);

  const setNumber = (signUpNum) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      std_no: signUpNum,
    }));
  };

  const setName = (signUpName) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      name: signUpName,
    }));
  };

  const setId = (signUpId) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      id: signUpId,
    }));
  };

  const setPassword = (signUpPassword) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      password: signUpPassword,
    }));
  };

  const setConfirmPass = (passwordConfirm) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      passwordConfirm: passwordConfirm,
    }));
  };

  const setEmail = (signUpEmail) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      email: signUpEmail,
    }));
  };

  const setCountry = (signUpCountry) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      country: signUpCountry,
    }));
  };

  const setCollege = (signUpCollege) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      college: signUpCollege,
    }));
  };

  const setMajor = (signUpMajor) => {
    setSignUpInfo((prevInfo) => ({
      ...prevInfo,
      major: signUpMajor,
    }));
  };

  const handleSignUpData = (e) => {
    if (signUpInfo.std_no === '') {
      alert('학번을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.name === '') {
      alert('이름을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.id === '') {
      alert('아이디를 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.password === '') {
      alert('비밀번호을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.passwordConfirm === '') {
      alert('비밀번호 확인을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.email === '') {
      alert('이메일을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.id === '') {
      alert('학번을 입력해주세요');
      e.preventDefault();
    } else if (signUpInfo.country === '') {
      alert('국가를 선택해주세요');
      e.preventDefault();
    } else if (signUpInfo.college === '') {
      alert('단대를 선택해주세요');
      e.preventDefault();
    } else if (signUpInfo.major === '') {
      alert('전공을 선택하세요');
      e.preventDefault();
    }

    handlePost();
  };

  const handlePost = () => {
    fetch('https://ummai.cosh.kr/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpInfo),
    })
      .then((res) => {
        const sessionId = res.headers.get('Set-Cookie');
        console.log('Session ID:', sessionId);

        return res.json();
      })
      .then((data) => {
        if (data.result === 'Success') {
          console.log('Success');
        } else if (data.result === 'Fail') {
          console.error('Fail:', data.detail);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="signUp-form-container">
      <form className="num-form">
        <PiStudent className="num-icon" />
        <InputText
          type="text"
          placeholder="학번"
          value={signUpInfo.std_no}
          onChange={setNumber}
        />
        {isCorrectStdNo || <ErrorMessage message="알맞지 않은 학번입니다." />}
      </form>
      <form className="name-form">
        <IoHappyOutline className="name-icon" />
        <InputText
          type="text"
          placeholder="이름"
          value={signUpInfo.name}
          onChange={setName}
        />
      </form>
      <form className="id-form">
        <FaUser className="login-icon" />
        <InputText
          type="text"
          placeholder="아이디"
          value={signUpInfo.id}
          onChange={setId}
        />
        {isCorrectId || (
          <ErrorMessage message="아이디는 6-12자 이어야합니다." />
        )}
      </form>
      <form className="password-form">
        <FaLock className="login-icon" />
        <InputText
          type={isVisiblePassword ? 'text' : 'password'}
          placeholder="비밀번호"
          value={signUpInfo.password}
          onChange={setPassword}
        />
        <FaEyeSlash
          className={`hide-password ${isVisiblePassword ? ' hidden' : ''}`}
          onClick={handlePasswordVisibility}
        />
        <FaEye
          className={`show-password ${isVisiblePassword ? '' : ' hidden'}`}
          onClick={handlePasswordVisibility}
        />
        {isCorrectPasswd || (
          <ErrorMessage message="비밀번호는 8자 이상, 대소문자, 하나 이상의 특수문자를 포함해야합니다." />
        )}
      </form>
      <form className="confirmPass-form">
        <FaLock className="login-icon" />
        <InputText
          type={isVisiblePasswordConfirm ? 'text' : 'password'}
          placeholder="비밀번호 확인"
          value={signUpInfo.passwordConfirm}
          onChange={setConfirmPass}
        />
        <FaEyeSlash
          className={`hide-password ${
            isVisiblePasswordConfirm ? ' hidden' : ''
          }`}
          onClick={handlePasswordConfirmVisibility}
        />
        <FaEye
          className={`show-password ${
            isVisiblePasswordConfirm ? '' : ' hidden'
          }`}
          onClick={handlePasswordConfirmVisibility}
        />
        {isMatchPasswd || (
          <ErrorMessage message="비밀번호가 일치하지 않습니다" />
        )}
      </form>
      <form className="email-form">
        <MdEmail className="email-icon" />
        <InputText
          type="email"
          placeholder="이메일"
          value={signUpInfo.email}
          onChange={setEmail}
        />
        {isCorrectEmail || (
          <ErrorMessage message="올바른 이메일 형식이 아닙니다." />
        )}
      </form>
      <form className="country-form">
        <SelectCountry value={signUpInfo.country} setValue={setCountry} />
      </form>
      <form className="college-form">
        <SelectCollege value={signUpInfo.college} setValue={setCollege} />
      </form>
      <form className="major-form">
        {signUpInfo.college && (
          <SelectMajor
            type={signUpInfo.college}
            value={signUpInfo.major}
            setValue={setMajor}
          />
        )}
      </form>
      <div className="active-buttons">
        <ActiveButtons type="submit" onClick={handleSignUpData} />
      </div>
    </div>
  );
}

export default SignUp;
