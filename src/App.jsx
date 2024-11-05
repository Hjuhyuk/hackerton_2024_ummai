import Mainp from './components/pages/Mainp';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Sug from './components/pages/Suggestion';
import Chat from './components/pages/Chat';
import Tip from './components/pages/TipBoard';
import Notice from './components/pages/Notice';
import Navbar from './components/Navbar';
import FindId from './components/pages/FindId/index';
import FindPass from './components/pages/FindPass/index';
import Login from './components/pages/Login/index';
import Signup from './components/pages/SignUp/index';
import WritingPage from './components/pages/Writing';
import Article from './components/pages/Articles';

function App() {
  // useState로 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 새로고침 시 localStorage에서 로그인 상태 확인
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);  // 로그인이 되어있으면 상태 true로 설정
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // 로그인 시 localStorage에 저장
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // 로그아웃 시 localStorage에서 제거
  };

  return (
    <div className="App">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpass" element={<FindPass />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />

        <Route path="/" element={isLoggedIn ? <Mainp /> : <Navigate to="/login" />} />
        <Route path='/suggestion' element={isLoggedIn ? <Sug /> : <Navigate to="/login" />} />
        <Route path='/chat' element={isLoggedIn ? <Chat /> : <Navigate to="/login" />} />
        <Route path='/tipboard' element={isLoggedIn ? <Tip /> : <Navigate to="/login" />} />
        <Route path="/writing" element={isLoggedIn ? <WritingPage /> : <Navigate to="/login" />} />
        <Route path='/notice' element={isLoggedIn ? <Notice /> : <Navigate to="/login" />} />
        <Route path='/articles/:article_id' element={isLoggedIn ? <Article /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
