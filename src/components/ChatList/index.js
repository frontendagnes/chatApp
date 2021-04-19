import React, { useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import AddItem from "../AddItem";
import SearchEngine from "../SearchEngine";
import api from "../../firebase";
import { ChatListWrapper } from './theme/themeChatList';
import NewMessages from '../ChatItem/NewMessages';
import Footer from '../Footer';

const ChatList = (props) => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(items);

  useEffect(() => {
    let ref = api.ref("/messages");
    ref.on("value", (data) => {
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
      ArchivingMessages(ref)
    });

  }, []);

const ArchivingMessages = (ref) => {
  let now = Date.now();
  let cutoff = now - 2 * 60 * 60 * 1000;
  let old = ref.orderByChild('datetime').endAt(cutoff).limitToLast(1);
    old.on('child_added', function(snapshot) {
      snapshot.ref.remove();
  });

}

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const item = {
      content: text,
      user: props.user,
      datetime: Date.now(),
      isEdit: false,
      info: `${props.user} send message`,
    };
    if (text) {
      api
        .ref("messages")
        .push(item)
        .then(() => {
          setText("");
          window.scrollTo(0, document.body.scrollHeight);
        })
        .catch((error) => console.log(error));
    } else {
      return alert("enter your message");
    }
  };

  return (
    <ChatListWrapper>
      <NewMessages /> 
      <SearchEngine items={items} setSearch={setSearch} />
      <ChatItem items={search} />
      <AddItem onChange={handleChange} value={text} onClick={handleClick} />
      <Footer />
    </ChatListWrapper>
  );
};

export default ChatList;
