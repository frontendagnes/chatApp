import React from "react";
import {
  ChatItemUl,
  ChatItemFound,
} from "./theme/themeChatItem";
import Item from "./item";

const ChatItem = (props) => {
 return (
    <div>
      {props.items.length !== 0 ? (
        <ChatItemUl>
          {props.items.map((item) => {
            return (
               <Item
                  key={item.id} 
                  id={item.id}
                  datetime={item.datetime}
                  content={item.content}
                  localUser={item.user}
               />       
            );
          })}
        </ChatItemUl>
      ) : (
       <ChatItemFound> Not found </ChatItemFound>
      )}
    </div>
  );
};

export default ChatItem;
