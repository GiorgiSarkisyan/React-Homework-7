import React, { useState } from "react";
import '../css/globalStyles.css';
import '../css/style.css'
import '../css/font.css'
import UserButton from "../Components/UserButton";

function RightSide() {
  const [messages, setMessages] = useState([]);
  const [inputValueUser1, setInputValueUser1] = useState("");
  const [inputValueUser2, setInputValueUser2] = useState("");

  const handleMessages = (user, inputValue) => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { user, message: inputValue }]);
      if (user === "user1") {
        setInputValueUser1("");
      } else if (user === "user2") {
        setInputValueUser2("");
      }
    }
  };

  return (
    <div className="right-side-container">
      <div className="right-side-content">
        <div className="right-side-chat">
          <div className="right-side-chat-content">
            {messages.map((message, index) => (
              <div key={index} className={`user-chat ${message.user === "user1" ? "first-user-chat" : "second-user-chat"}`}>
                <div className="user-message-box">
                  {message.user === "user1" ? (
                    <>
                      <div className="user-message-icon">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="2" fill="#5536DA"/>
                        <path d="M23 23V21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H11C9.93913 17 8.92172 17.4214 8.17157 18.1716C7.42143 18.9217 7 19.9391 7 21V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0001 13C17.2093 13 19.0001 11.2091 19.0001 9C19.0001 6.79086 17.2093 5 15.0001 5C12.791 5 11.0001 6.79086 11.0001 9C11.0001 11.2091 12.791 13 15.0001 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <div className="user-message">
                        <p>{message.message}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="user-message">
                        <p>{message.message}</p>
                      </div>
                      <div className="user-message-icon">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="2" fill="#5536DA"/>
                        <path d="M23 23V21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H11C9.93913 17 8.92172 17.4214 8.17157 18.1716C7.42143 18.9217 7 19.9391 7 21V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0001 13C17.2093 13 19.0001 11.2091 19.0001 9C19.0001 6.79086 17.2093 5 15.0001 5C12.791 5 11.0001 6.79086 11.0001 9C11.0001 11.2091 12.791 13 15.0001 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-side-inputs">
          <div className="input-boxes">
            <div className="input-title">
              <h3>User 1 </h3>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={inputValueUser1}
                onChange={(e) => setInputValueUser1(e.target.value)}
              />
              <div className="button-box">
                <UserButton onClick={() => handleMessages("user1", inputValueUser1)}/>
              </div>
            </div>
          </div>
          <div className="input-boxes">
            <div className="input-title">
              <h3>User 2</h3>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={inputValueUser2}
                onChange={(e) => setInputValueUser2(e.target.value)}
              />
              <div className="button-box">
                <UserButton onClick={() => handleMessages("user2", inputValueUser2)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
