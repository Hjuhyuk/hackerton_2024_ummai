import React from "react";
import '../styles/Writing.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Writing() {
    const [writingArticle, setWritingArticle] = useState({
        title: '',
        content: '',
        file: '',
    });

    const navigate = useNavigate();

    const handleIsSubmit = (e) => {
        if (writingArticle.title === '') {
            e.preventDefault();
            alert("You must write Title");
        } else if(writingArticle.content === '') {
            e.preventDefault();
            alert("You must write Content");
        } else {
            postArticleData();
            navigate('/tipboard');
        }

    }

    const postArticleData = async () => {
        try {
            const response = await fetch(`https://ummai.cosh.kr/api/board/article`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include', // 쿠키를 포함하여 요청
              body: JSON.stringify(writingArticle),
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
        
    }

    return (
        <div className="container">
            <div className="topBar">
                Tip Boarder
            </div>

            <div className="btnBox">
                <button className="btn" onClick={handleIsSubmit}>Submit</button>
            </div>

            <div className="titleBox">
                <input className="titleInput" type="text" placeholder="Please Write a Title"
                    onChange={(e) => setWritingArticle(prev => ({ ...prev, title: e.target.value }))} />
            </div>

            <div className="contentsBox">
                <textarea className="contentsInput" placeholder="Please Write Contents" 
                    onChange={(e) => setWritingArticle(prev => ({ ...prev, content: e.target.value }))} ></textarea>
            </div>

            <div className="attachmentBox">
                <button className="attachment">attachment</button>
            </div>
        </div>
    );
}

export default Writing;
