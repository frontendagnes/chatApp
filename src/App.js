import React, { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import ChatList from "./components/ChatList";
import TopPanel from "./components/topPanel";

function App() {
  const [user, setUser] = useState(localStorage.getItem("name"));
  let [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));

  const hanldeChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (user !== "") {
      localStorage.setItem("isLogged", true);
      setIsLogged(localStorage.getItem("isLogged"));
    } else {
      return alert("enter nickname");
    }

    localStorage.setItem("name", user);
    setUser(localStorage.getItem("name"));
  };

  return (
    <div>
      {!isLogged ? (
        <LogIn onChange={hanldeChange} value={user} onClick={handleClick} />
      ) : (
        <div>
          <div>
            <span className='scrollBtn scrollBtn__Add'><a href='#scroll'>View or add a new entry</a></span> |
            <span className='scrollBtn scrollBtn__Search'><a href='#scrollSearchEngine'> Go to the search engine</a></span>
          </div>
          <TopPanel user={user} setIsLogged={setIsLogged} />
          <ChatList user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
