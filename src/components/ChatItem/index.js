import React, { useEffect, useState } from "react";
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
  isEdit: false,
  user: localStorage.getItem("name")
})
useEffect(() => {
  console.log(state.user)
})

const handleChange = (e) => {
  setState({
    [e.target.name]: e.target.value,
    update: e.target.value
  })
}

const DeleteItem = (id) => {
  const itemsRef = api.ref(`messages/${id}`)
  itemsRef.remove()
  }

const handleUpdateItem = (id) => {
const refItem = api.ref(`messages/${id}`)
refItem.update({
  content: state.update
})
}
const toggleEdit = () => {
  setState({
    isEdit: !state.isEdit
  })
  return state.isEdit

}
const handleEditInput = (id) => {
 const refItem = api.ref(`messages/${id}`)
  refItem.update({
    isEdit: toggleEdit()
  })
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
              <ChatItemDivContent>
                <span>
                {item.content}
                </span>
                {item.isEdit &&
                  <span>
                  <button onClick={() => handleUpdateItem(item.id) }>Update</button>
                  <input name={item.id} onChange={handleChange} />
                </span>
                }
                 {state.user === item.user &&
                   <button onClick={() => handleEditInput(item.id)}>edit</button>
               } 
              </ChatItemDivContent>
              <ChatItemButton onClick = {() => DeleteItem(item.id)}>Delete</ChatItemButton>  
            </ChatItemLi>
          );
        })}
      </ChatItemUl>
    </div>
  );
};

export default ChatItem;
