import React, { useEffect, useState } from 'react';
import '../styles/Mainp.css';
import { Link } from 'react-router-dom';

function Mainp() {
  // 상태로 데이터를 저장하기 위한 useState 훅
  const [myName, setMyName] = useState('s');
  const [myStdnum, setMyStdnum] = useState('s');
  const [myMajor, setMyMajor] = useState('s');
  const [myCountry, setMyCountry] = useState('s');
  const [myPicture, setMyPicture] = useState('');
  const [title1, setTitle1] = useState('');
  const [contents1, setContents1] = useState('');
  const [title2, setTitle2] = useState('');
  const [contents2, setContents2] = useState('');
  const [articleId1, setArticleId1] = useState('');
  const [articleId2, setArticleId2] = useState('');

  // 서버에서 데이터를 가져오는 함수
  const fetchProfileData = async () => {
    try {
      const response = await fetch('https://ummai.cosh.kr/api/users/userInfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include' // 쿠키를 포함하여 요청
      });

      // 요청이 성공적으로 처리되지 않은 경우 에러 처리
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rdata = await response.json(); // 응답을 JSON 형태로 변환
      console.log(rdata);
      const data = rdata.info;
      setMyName(data.name); // 데이터 저장
      setMyStdnum(data.std_no);
      setMyMajor(data.major);
      setMyCountry(data.country);
      setMyPicture(data.img);
      console.log(data.img);
    } catch (error) {
      console.log('Error fetching profile data:', error); // 오류 처리
    }
  };

  const fetchBoarderData = async () => {
    try {
      const response = await fetch('https://ummai.cosh.kr/api/board/article', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // 쿠키를 포함하여 요청
      });

      // 요청이 성공적으로 처리되지 않은 경우 에러 처리
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const bdData = await response.json(); // 응답을 JSON 형태로 변환
      console.log(bdData);
      setTitle1(bdData.articles[0].title);
      setTitle2(bdData.articles[1].title);
      setContents1(bdData.articles[0].content);
      setContents2(bdData.articles[1].content);
      setArticleId1(bdData.articles[0].article_id);
      setArticleId2(bdData.articles[1].article_id);
    } catch (error) {
      console.log('Error fetching profile data:', error); // 오류 처리
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져오기 위한 useEffect 훅
  useEffect(() => {
    fetchProfileData(); // 컴포넌트가 마운트되면 데이터 가져오기
    fetchBoarderData();
  }, []);

  return (
    <div className="container">
      <div className="topBar">
        Home
      </div>

      <div className="head_box">
        <div className="title">Profile</div>
      </div>
      <div className="profile">
        <img src={myPicture} alt="profile_image" className="profile_img" width={50} height={50} />
        <div className="profile_text_box">
          <div className="profile_text">Name : {myName}</div>
          <div className="profile_text">Student Number : {myStdnum}</div>
          <div className="profile_text">Major : {myMajor}</div>
          <div className="profile_text">Country : {myCountry}</div>
        </div>
      </div>

      <div className="head_box">
        <div className="head_content">
          <div className="title">Tip Boarder</div>
          <Link to="/tipboard" className="add_btn">
            more
          </Link>
        </div>
      </div>
      <div className="tipboarder">
        <div className='innerBoard'>
            <Link to={"/articles/"+articleId1} className='innerTitle'>
                {title1}
            </Link>
            <div className='innerText'>{contents1}</div>
        </div>

        <div className='innerBoard'>
            <Link to={"/articles/"+articleId2} className='innerTitle' >
                {title2}
            </Link>
            <div className='innerText'>{contents2}</div>
        </div>
      </div>

      <div className="head_box">
        <div className="head_content">
          <div className="title">Suggestion</div>
          <Link to="/suggestion" className="add_btn">
            more
          </Link>
        </div>
      </div>
      <div className="noticeBoard"></div>

      <div className="head_box">
        <div className="head_content">
          <div className="title">Notice</div>
          <Link to="/notice" className="add_btn">
            more
          </Link>
        </div>
      </div>
      <div className="noticeBoard"></div>
    </div>
  );
}

export default Mainp;
