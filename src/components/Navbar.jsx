import React from "react";
import './styles/Navbar.css';
import home from './assets/home_icon.png';
import sug from './assets/suggest_icon.png';
import chat from './assets/chat_icon.png';
import tip from './assets/tip_icon.png';
import notice from './assets/notice_icon.png';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="wrapper">
      <div>
        <Link to='/' className="nav-link">
            <img src={home} alt="home icon" className="icon" />
        </Link>
      </div>

      <div>
        <Link to='/suggestion' className="nav-link">
            <img src={sug} alt="suggest icon" className="icon" />
        </Link>
      </div>

      <div>
        <Link to='/chat' className="nav-link">
            <img src={chat} alt="chat icon" className="icon" />
        </Link>
      </div>

      <div>
        <Link to='/tipboard' className="nav-link">
            <img src={tip} alt="tip icon" className="icon" />
        </Link>
      </div>

      <div>
        <Link to='/notice' className="nav-link">
            <img src={notice} alt="notice icon" className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
