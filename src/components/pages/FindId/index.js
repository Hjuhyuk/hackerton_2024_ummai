import { useState } from 'react';
import { IoHappyOutline } from 'react-icons/io5';
import { PiStudent } from 'react-icons/pi';

import ActiveButtons from '../../ActiveButtons';
import InputText from '../../InputText';

function FindId() {
  const [toFindId, setToFindId] = useState({
    std_no: '',
    name: '',
  }); // 받고

  const setNumber = (toFindIdNo) => {
    setToFindId((prevInfo) => ({
      ...prevInfo,
      std_no: toFindIdNo,
    }));
  };

  const setName = (toFindIdName) => {
    setToFindId((prevInfo) => ({
      ...prevInfo,
      name: toFindIdName,
    }));
  };

  const handleNameStdNo = (e) => {
    if (toFindId.std_no === '') {
      alert('학번을 입력해주세요');
      e.preventDefault();
    } else if (toFindId.name === '') {
      alert('이름을 입력해주세요');
      e.preventDefault();
    }

    console.log(toFindId); // 보내고
  };

  return (
    <div className="signUp-form-container">
      <form className="num-form">
        <PiStudent className="num-icon" />
        <InputText
          type="text"
          placeholder="학번"
          value={toFindId.std_no}
          onChange={setNumber}
        />
      </form>
      <form className="name-form">
        <IoHappyOutline className="name-icon" />
        <InputText
          type="text"
          placeholder="이름"
          value={toFindId.name}
          onChange={setName}
        />
      </form>
      ;
      <div className="active-buttons">
        <ActiveButtons
          type="check"
          usage="아이디 찾기"
          onClick={handleNameStdNo}
        />
      </div>
    </div>
  );
}

export default FindId;
