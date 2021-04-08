import React, { useState } from "react";
import { ChatItemUl, ChatItemLi, ChatItemSpanName, ChatItemDivContent, ChatItemButton } from './themeChatItem';
import api from '../../firebase';
// import UpdateItem from './UpdateItem';

const ChatItem = (props) => {
  function convertDate(timestamp){
    const datatime = new Date(timestamp);
    return datatime.toLocaleDateString();
}

const [state, setState] = useState({
  update: '',
  isActive: false
})

const handleChange = (e) => {
  setState({
    [e.target.name]: e.target.value
  })
}

const DeleteItem = (id) => {
  const itemsRef = api.ref(`messages/${id}`)
  itemsRef.remove()
  }

const handleUpdateItem = (e, id) => {


  
const refItem = api.ref(`messages/${id}`)
console.log("up", state.update)
refItem.update({
  content: state.update
})
}

// const handleEditInput = () => {

// setState({
//   isActive: !state.isActive})
// }
  return (
    <div>
      <ChatItemUl>
        {props.items.map((item) => {
          return (
            <ChatItemLi key={item.id}>
              <div>
              <ChatItemSpanName>{item.user}</ChatItemSpanName>  <span>{item.datetime ? `| ${convertDate(item.datetime)}` : ''}</span>
              </div>
              <ChatItemDivContent>
                <span>{item.content}</span>
                <span>
                  {/* <button onClick={handleEditInput}>edit</button> */}
                  <input name={item.id} onChange={handleChange} value={state.update}/>
                  <button onClick={() => handleUpdateItem(item.id) }>Update</button>
                </span>
              </ChatItemDivContent>
              <ChatItemButton onClick = {() => DeleteItem(item.id)}>Delete</ChatItemButton>
              {/* <ChatItemButton onClick = {handleEditInput}>Update</ChatItemButton> */}
    
            </ChatItemLi>
          );
        })}
      </ChatItemUl>
    </div>
  );
};

export default ChatItem;
