import React, { useState, useRef, useEffect } from "react";
import { ChatItemUl, ChatItemLi, ChatItemSpanName, ChatItemDivConent, ChatItemButton } from './themeChatItem';
import api from '../../firebase';
import UpdateItem from './UpdateItem';

const ChatItem = (props) => {
  function convertDate(timestamp){
    const datatime = new Date(timestamp);
    return datatime.toLocaleDateString();
}

// const [content, setContent] = useState('')
const [update, setUpdate] = useState('')
const [isActive, setIsActive] = useState(false)
let inputRef = useRef()

// const handleChange = (e) => {
//   setUpdate(e.target.value)
// }

const DeleteItem = (id) => {
  const itemsRef = api.ref(`messages/${id}`)
  itemsRef.remove()
  }

const handleUpdateItem = (id) => {
const refItem = api.ref(`messages/${id}`)
refItem.update({
  content: update
})
}

const EditInput = (e) => {
  e.preventDefault()
const name = (n) => {

    
  // return(
  //   n = inputRef.current
  // )
} 
console.log(name())
setIsActive(!isActive)
// if(item === name){
// setIsActive(!isActive)
//   // inputRef.current.disabled = false
// }
}
  return (
    <div>
      <ChatItemUl>
        {props.items.map((item) => {
          return (
            <ChatItemLi key={item.id}>
              <div>
              <ChatItemSpanName>{item.user}</ChatItemSpanName>  <span>{item.datetime ? `| ${convertDate(item.datetime)}` : ''}</span>
              </div>
              <ChatItemDivConent>
                <button onClick={EditInput}>edit...</button>
                <span>{item.content}</span>
                {
                  isActive && item.id  ? <UpdateItem  setUpdate={setUpdate} value={update || item.content} onClick={() => handleUpdateItem(item.id)} /> : ''
                }
                </ChatItemDivConent>
              <ChatItemButton onClick = {() => DeleteItem(item.id)}>Delete</ChatItemButton>
            </ChatItemLi>
          );
        })}
      </ChatItemUl>
    </div>
  );
};

export default ChatItem;
