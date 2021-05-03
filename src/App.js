import React, { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import ChatList from "./components/ChatList";
import TopPanel from "./components/topPanel";
import Links from './components/Link';
import { Provider as ChatProvider} from './utility/Context';
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
      <ChatProvider value={{user, setUser}} >
      {!isLogged ? (
        <LogIn onChange={hanldeChange} value={user ? user : ''} onClick={handleClick} />
      ) : (
        <div>
          <Links />
          <TopPanel user={user} setIsLogged={setIsLogged} />
          <ChatList user={user} />
        </div>
      )}
      </ChatProvider>
    </div>
    
  );
}

export default App;
