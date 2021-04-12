import React, { useState } from "react";
import {
  ChatItemUl,
  ChatItemLi,
  ChatItemSpanName,
  ChatItemDivContent,
  ChatItemButton,
  ChatItemBtnEdit,
  ChatItemBtnUpdate,
  ChatItemInputUpdate,
} from "./themeChatItem";
import api from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ChatItem = (props) => {
  function convertDate(timestamp) {
    const datatime = new Date(timestamp);
    return datatime.toLocaleDateString();
  }

  const [state, setState] = useState({
    update: "",
    user: localStorage.getItem("name"),
  });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
      update: e.target.value,
      user: localStorage.getItem("name"),
    });
  };

  const handleDeleteItem = (id) => {
    const itemsRef = api.ref(`messages/${id}`);
    itemsRef.remove();
  };

  const handleUpdateItem = (id, edit) => {
    const refItem = api.ref(`messages/${id}`);
    refItem.update({
      content: state.update,
      isEdit: !edit,
    });
    setState({
      user: localStorage.getItem("name"),
    });
  };

  const handleEditInput = (id, edit) => {
    const refItem = api.ref(`messages/${id}`);
    refItem.update({
      isEdit: !edit,
    });
  };
  return (
    <div>
      {props.items.length !== 0 ? (
        <ChatItemUl>
          {props.items.map((item) => {
            return (
              <ChatItemLi key={item.id}>
                <div>
                  <ChatItemSpanName>{item.user}</ChatItemSpanName>
                  <span>
                    {item.datetime ? `| ${convertDate(item.datetime)}` : ""}
                  </span>
                </div>
                <ChatItemDivContent>
                  <span>{item.content}</span>
                  {item.isEdit && (
                    <span>
                      <ChatItemInputUpdate
                        name={item.id}
                        onChange={handleChange}
                        placeholder="enter the text to be edited"
                      />
                      <ChatItemBtnUpdate
                        onClick={() => handleUpdateItem(item.id, item.isEdit)}
                      >
                        Update
                      </ChatItemBtnUpdate>
                    </span>
                  )}
                  {state.user === item.user && (
                    <ChatItemBtnEdit
                      className="btn"
                      onClick={() => handleEditInput(item.id, item.isEdit)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </ChatItemBtnEdit>
                  )}
                </ChatItemDivContent>
                <ChatItemButton onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </ChatItemButton>
              </ChatItemLi>
            );
          })}
        </ChatItemUl>
      ) : (
       <div> Not found </div>
      )}
    </div>
  );
};

export default ChatItem;
