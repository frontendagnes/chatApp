import React, { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import ChatList from "./components/ChatList";
import TopPanel from "./components/topPanel";
// import api from './firebase';

// const userContext = React.createContext(null)

function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const hanldeChange = (e) => {
    setUser(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (user !== "") {
      setIsLogged(true);
    }
    // const refItems = api.ref('mesagges')
    // const item = {
    //   user: user
    // }
    // refItems.push(item)
  
  };

  if (!isLogged){
    return <LogIn onChange={hanldeChange} value={user} onClick={handleClick} />
  } else{ 
  return(
        <div>
          <TopPanel user={user} setIsLogged={setIsLogged}/>
          <ChatList user={user}/>
        </div>
  )
  }
  // return (
  //   <div>
  //     {{ isLogged } ? (
  //    <LogIn onChange={hanldeChange} value={user} onClick={handleClick} />
  //     ) :  (
  //       <div>
  //         <TopPanel user={user} onClick={setIsLogged(true)} />
  //         <ChatList />
  //       </div>
  //     )
  //     }
  //   </div>
  // );
}

export default App;
