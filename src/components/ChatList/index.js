import React, { useContext, useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import AddItem from "../AddItem";
import SearchEngine from "../SearchEngine";
import NewMessages from "../ChatItem/NewMessages";
import Footer from "../Footer";
import authContext from "../../utility/Context";
import api, { ref, onValue, push } from "../../utility/firebase";
const ChatList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(items);
  const { user } = useContext(authContext);

  useEffect(() => {
    const refDoc = ref(api, "messages");

    const unsuscribe = onValue(refDoc, (snapshot) => {
      const data = snapshot.val();
      const newState = [];
      for (let message in data) {
        newState.push({
          id: message,
          content: data[message].content,
          datetime: data[message].datetime,
          user: data[message].user,
        });
      }
      setItems(newState);
      setSearch(newState);
    });
   
    return () => {
      unsuscribe();
    };
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault()
    const item = {
      content: text,
      user: user,
      datetime: Date.now(),
      info: `${user} send message`,
    };

    if (text) {
      const docRef = ref(api, "messages");

      push(docRef, item)
        .then(() => {
          setText("");
          window.scrollTo(0, document.body.scrollHeight);
        })
        .catch((error) => console.log("Adding message error>>", error.message));
    } else {
      return alert("enter your message");
    }
  };

  return (
    <div>
      <NewMessages />
      <SearchEngine items={items} setSearch={setSearch} />
      <ChatItem items={search} />
      <AddItem onChange={handleChange} value={text} onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default ChatList;
