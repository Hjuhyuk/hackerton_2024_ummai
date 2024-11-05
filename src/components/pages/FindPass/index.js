import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';

import ActiveButtons from '../../ActiveButtons';
import InputText from '../../InputText';

function FindPass() {
  const [toFindPassword, setToFindPassword] = useState({
    std_no: '',
    id: '',
  }); // 받고

  const setStdNo = (toFindPassNo) => {
    setToFindPassword((prevInfo) => ({
      ...prevInfo,
      std_no: toFindPassNo,
    }));
  };

  const setId = (toFindPassId) => {
    setToFindPassword((prevInfo) => ({
      ...prevInfo,
      id: toFindPassId,
    }));
  };

  const handleNoId = (e) => {
    if (toFindPassword.std_no === '') {
      alert('학번을 입력해주세요');
      e.preventDefault();
    } else if (toFindPassword.id === '') {
      alert('아이디를 입력해주세요');
      e.preventDefault();
    }

    console.log(toFindPassword); // 보내고
  };

  return (
    <div>
      <form className="num-form">
        <PiStudent className="num-icon" />
        <InputText
          type="text"
          placeholder="학번"
          value={toFindPassword.std_no}
          onChange={setStdNo}
        />
      </form>
      <form className="id-form">
        <FaUser className="login-icon" />
        <InputText
          type="text"
          placeholder="아이디"
          value={toFindPassword.id}
          onChange={setId}
        />
      </form>
      <div className="active-buttons">
        <ActiveButtons
          type="check"
          usage="비밀번호 찾기"
          onClick={handleNoId}
        />
      </div>
    </div>
  );
}

export default FindPass;
