import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Articles() {
    const {article_id} = useParams()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const fetchArticleData = async () => {
        try {
            const response = await fetch(`https://ummai.cosh.kr/api/board/article/${article_id}`, {
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
      
            const adata = await response.json(); // 응답을 JSON 형태로 변환
            console.log(adata);
            const data = adata.info;
            setTitle(data.title);
            setContent(data.content);
            setAuthor(data.author);
            console.log(data);
          } catch (error) {
            console.log('Error fetching profile data:', error); // 오류 처리
          }
      };

      useEffect(() => {
        fetchArticleData(); // 컴포넌트가 마운트되면 데이터 가져오기
      }, []);

    return(
        <div>
            <h1>{title}</h1>
            <div>{author}</div>
            <p>{content}</p>
        </div>
    )
}

export default Articles;