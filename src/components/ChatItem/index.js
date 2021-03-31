import React from "react";
import { ChatItemUl, CahtItemLi, ChatItemSpanName, ChatItemDivConent, ChatItemButton } from './themeChatItem';
const ChatItem = (props) => {
  function convertDate(timestamp){
    const datatime = new Date(timestamp);
    return datatime.toLocaleDateString();
}
  return (
    <div>
      <ChatItemUl>
        {props.items.map((item) => {
          return (
            <CahtItemLi key={item.id}>
              <div>
              <ChatItemSpanName>{item.user}</ChatItemSpanName>  <span>{item.datetime ? `| ${convertDate(item.datetime)}` : ''}</span>
              </div>
              <ChatItemDivConent>{item.content}</ChatItemDivConent>
              <ChatItemButton onClick = {props.DeleteItem}>Delete</ChatItemButton>
            </CahtItemLi>
          );
        })}
      </ChatItemUl>
    </div>
  );
};

export default ChatItem;
