import React, { useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import AddItem from "../AddItem";
import SearchEngine from "../SearchEngine";
import api from "../../firebase";

const ChatList = (props) => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(items);

  useEffect(() => {
    api.ref("/messages").on("value", (data) => {
      let messages = data.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          content: messages[message].content,
          datetime: messages[message].datetime,
          user: messages[message].user,
          isEdit: messages[message].isEdit,
        });
      }
      setItems(newState);
      setSearch(newState);
    });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const item = {
      content: text,
      user: props.user || "Lola z przedszkola",
      datetime: Date.now(),
      isEdit: false,
    };
    if (text) {
      api
        .ref("messages")
        .push(item)
        .then(() => {
          setText("");
          // window.scrollTo(0, document.body.scrollHeight);
        })
        .catch((error) => console.log(error));
    } else {
      return alert("enter your message");
    }
  };

  return (
    <div>
      <SearchEngine items={items} setSearch={setSearch} />
      <ChatItem items={search} />
      <AddItem onChange={handleChange} value={text} onClick={handleClick} />
    </div>
  );
};

export default ChatList;
