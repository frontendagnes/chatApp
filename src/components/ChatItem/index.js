import React, { useState } from "react";
import {
  ChatItemUl,
  ChatItemLi,
  ChatItemSpanName,
  ChatItemDivContent,
  ChatItemBtn,
  ChatItemBtnUpdate,
  ChatItemInputUpdate,
  ChatItemFound,
} from "./themeChatItem";
import api from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
                        title="Update"
                      >
                        Update
                      </ChatItemBtnUpdate>
                    </span>
                  )}
                  {state.user === item.user && (
                    <div>
                    <ChatItemBtn
                      className="btn"
                      onClick={() => handleEditInput(item.id, item.isEdit)}
                      title='Update'
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </ChatItemBtn>
                    <ChatItemBtn delete onClick={() => handleDeleteItem(item.id)} title='Delete'>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </ChatItemBtn>
                </div>
                  )}
                </ChatItemDivContent>
              </ChatItemLi>                       
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
