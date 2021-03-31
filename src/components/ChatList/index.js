import React, { useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import AddItem from '../AddItem';
import api from '../../firebase';

const ChatList = (props) => {

const [items, setItems] = useState([])
const [text, setText] = useState('')
    useEffect(() => {
      api.ref('/messages').on('value', (data) => {
        let messages = data.val()
        let newState = []
        for (let message in messages){
          newState.push({
            id: message,
            content: messages[message].content,
            datetime: messages[message].datetime,
            user: messages[message].user
          })
        }
          setItems(newState)
      })

    }, [])
    console.log(items)

const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    const item = {
      content: text,
      user: props.user || "Nieznany",
      datetime: Date.now(),
    }
    const itemsRef = api.ref("messages")
    itemsRef.push(item)

  }
  const DeleteItem = (id) => {
    const itemsRef = api.ref(`messages/${id}`)
    console.log('do usuniecia ', itemsRef)
    itemsRef.remove()
  }

  return (
    <div>
      <ChatItem items={items} DeleteItem={() => DeleteItem(items.id)}/>
      <AddItem onChange={handleChange} value={text} onClick={handleClick}/>
    </div>
  );
};

export default ChatList;
