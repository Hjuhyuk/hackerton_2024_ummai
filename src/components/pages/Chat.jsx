import React, { useState } from "react";
import '../styles/Chat.css';

function Chat() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    const newSwitchState = !isSwitchOn;
    setIsSwitchOn(newSwitchState);
    
    fetch('https://ummai.cosh.kr/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        switchState: newSwitchState,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <div className="topBar">
        Chat
      </div>
      
      <div className="switch-container">
        <span className="switch-label">Chatting Allow</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isSwitchOn} 
            onChange={handleSwitchChange} 
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Chat;
