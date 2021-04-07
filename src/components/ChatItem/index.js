import React, { useState, useRef } from "react";
import { ChatItemUl, ChatItemLi, ChatItemSpanName, ChatItemDivConent, ChatItemButton } from './themeChatItem';
import api from '../../firebase';

const ChatItem = (props) => {
  function convertDate(timestamp){
    const datatime = new Date(timestamp);
    return datatime.toLocaleDateString();
}

// const [content, setContent] = useState('')
const [state, setState] = useState({
  update: '',
})

const spanUpadate = useRef();


const handleChange = (e) => {
  setState(
    {
      ...state,
      update: e.target.value
    })
}

const DisabledInput = () => {
  // setIsActive(!isActive)
  spanUpadate.current.style.display = 'none'
console.log(spanUpadate)

  }


const DeleteItem = (id) => {
  const itemsRef = api.ref(`messages/${id}`)
  itemsRef.remove()
  }

const UpdateItem = (id) => {
const refItem = api.ref(`messages/${id}`)
refItem.update({
  content: state.update
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
              <ChatItemDivConent>
                <button className='btn' onClick={DisabledInput}>edit...</button> 
                  <span>{item.content}</span>
                  <span className="spanUpdate" ref={spanUpadate}>
                    <input  
                    className="input"
                    name = {item.id}
                    onChange={handleChange}
                    value={state.update || item.content}
                    disabled={false}
                    /> 
                    <button onClick={() => UpdateItem(item.id)}>update</button>
                   </span>
 
                
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
