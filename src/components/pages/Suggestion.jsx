import '../styles/Suggestion.css';
import profile_test from '../assets/profile_test.webp';
import React, { useState, useEffect } from 'react';

function Suggestion() {
    const [selectedOption, setSelectedOption] = useState("College");
    const [profiles, setProfiles] = useState([]);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        getSuggestionData(event.target.value);
    };
    

    const handleScroll = () => {
        const scrollTop = window.scrollY; // 현재 스크롤 위치
        const windowHeight = window.innerHeight; // 브라우저 창 높이
        const documentHeight = document.documentElement.scrollHeight; // 전체 문서 높이

        // 스크롤이 끝까지 갔는지 확인
        if (windowHeight + scrollTop >= documentHeight) {
            setIsAtBottom(true); // 스크롤이 끝까지 도달하면 상태를 true로 설정
        } else {
            setIsAtBottom(false); // 끝이 아니면 false로 설정
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isAtBottom) {
          // 추가 데이터를 로드하거나 다른 작업을 실행
          console.log('Load more data...');
          postSuggestionData(selectedOption)
        }
      }, [isAtBottom, selectedOption]);

    const getSuggestionData = async (selectedOption) => {
        try {
            const response = await fetch(`https://ummai.cosh.kr/api//users/userInfo/randomSuggestion/${selectedOption}`, {
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

            const sdata = await response.json();
            console.log(sdata);
            setProfiles(sdata);
            console.log(profiles);

          } catch (error) {
            console.log('Error fetching profile data:', error); // 오류 처리
          }
    };

    const postSuggestionData = async (filter) => {
        try {
            const response = await fetch(`https://ummai.cosh.kr/api//users/userInfo/randomSuggestion/${filter}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include' // 쿠키를 포함하여 요청
            });
      
            // 요청이 성공적으로 처리되지 않은 경우 에러 처리
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const sdata = await response.json();
            console.log(sdata);

          } catch (error) {
            console.log('Error fetching profile data:', error); // 오류 처리
          }
    };

    return(
        <div className='container'>
            <div className='topBar'>
                Suggestion
            </div>

            <div className='dropdownBox'>
                <select id="selection" className="dropdown" value={selectedOption} onChange={handleChange}>
                    <option value="college">College</option>
                    <option value="major">Major</option>
                    <option value="country">Country</option>
                </select>
            </div>

            <div className='profileBox'>
                <img src={profile_test} alt='profile_image' className='profile_img' width={50} height={50} />
                <div className='profile_text_box'>    
                    <div className='profile_text'>Name : HwangJuHyuk</div>
                    <div className='profile_text'>Student Number : 2023015950</div>
                    <div className='profile_text'>Major : computer</div>
                    <div className='profile_text'>Nationality : South Korea</div>
                </div>
            </div>

            <div className='profileBox'>
                <img src={profile_test} alt='profile_image' className='profile_img' width={50} height={50} />
                <div className='profile_text_box'>    
                    <div className='profile_text'>Name : HwangJuHyuk</div>
                    <div className='profile_text'>Student Number : 2023015950</div>
                    <div className='profile_text'>Major : computer</div>
                    <div className='profile_text'>Nationality : South Korea</div>
                </div>
            </div>

            <div className='profileBox'>
                <img src={profile_test} alt='profile_image' className='profile_img' width={50} height={50} />
                <div className='profile_text_box'>    
                    <div className='profile_text'>Name : HwangJuHyuk</div>
                    <div className='profile_text'>Student Number : 2023015950</div>
                    <div className='profile_text'>Major : computer</div>
                    <div className='profile_text'>Nationality : South Korea</div>
                </div>
            </div>

            <div className='profileBox'>
                <img src={profile_test} alt='profile_image' className='profile_img' width={50} height={50} />
                <div className='profile_text_box'>    
                    <div className='profile_text'>Name : HwangJuHyuk</div>
                    <div className='profile_text'>Student Number : 2023015950</div>
                    <div className='profile_text'>Major : computer</div>
                    <div className='profile_text'>Nationality : South Korea</div>
                </div>
            </div>

            <div className='profileBox'>
                <img src={profile_test} alt='profile_image' className='profile_img' width={50} height={50} />
                <div className='profile_text_box'>    
                    <div className='profile_text'>Name : HwangJuHyuk</div>
                    <div className='profile_text'>Student Number : 2023015950</div>
                    <div className='profile_text'>Major : computer</div>
                    <div className='profile_text'>Nationality : South Korea</div>
                </div>
            </div>

        </div>
    )   
}

export default Suggestion;