import React, { useContext, useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import AddItem from "../AddItem";
import SearchEngine from "../SearchEngine";
import NewMessages from '../ChatItem/NewMessages';
import Footer from '../Footer';
import authContext from "../../utility/Context";
import api from "../../utility/firebase";
const ChatList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(items);
  const { user } = useContext(authContext)
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
        });
      }
      setItems(newState);
      setSearch(newState);
      ArchivingMessages(ref)
    });
    return () => {
      setItems([])
    }
  }, []);

const ArchivingMessages = (ref) => {
  let now = Date.now();
  let cutoff = now - 24 * 60 * 60 * 1000;
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
      user: user,
      datetime: Date.now(),
      info: `${user} send message`,
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
