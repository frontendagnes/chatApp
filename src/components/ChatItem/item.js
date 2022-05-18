import React, { useContext, useState } from "react";
import {
  ChatItemLi,
  ChatItemSpanName,
  ChatItemDivContent,
  ChatItemBtn,
  ChatItemBtnUpdate,
  ChatItemInputUpdate,
} from "./theme/themeChatItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import api, { remove, update, ref } from "../../utility/firebase";
import authContext from "../../utility/Context";

const Item = ({ id, datetime, content, localUser }) => {
  const [updateText, setUpdateText] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useContext(authContext);

  const convertDate = (timestamp) => {
    const datatime = new Date(timestamp);
    return datatime.toLocaleString("pl-PL");
  };
  
  const handleChange = (e) => {
    setUpdateText(e.target.value);
  };

  const handleDeleteItem = (id) => {
    const itemsRef = ref(api, `messages/${id}`);
    remove(itemsRef);
  };

  const handleUpdateItem = (id) => {
    const refItem = ref(api, `messages/${id}`);
    update(refItem, {
      content: updateText,
    });

    setUpdateText("");
    setIsEdit(false);
  };

  const handleEditInput = () => {
    setIsEdit(!isEdit);
  };
  return (
    <ChatItemLi>
      <div>
        <ChatItemSpanName>{localUser} | </ChatItemSpanName>
        <span>{convertDate(datetime)}</span>
      </div>
      <ChatItemDivContent>
        <span>{content}</span>
        {isEdit && (
          <span>
            <ChatItemInputUpdate
              name={id}
              onChange={handleChange}
              value={updateText || content}
              placeholder="enter the text to be edited"
            />
            <ChatItemBtnUpdate
              onClick={() => handleUpdateItem(id, isEdit)}
              title="Update"
            >
              Update
            </ChatItemBtnUpdate>
          </span>
        )}
        {user === localUser && (
          <div>
            <ChatItemBtn onClick={() => handleEditInput()} title="Update">
              <FontAwesomeIcon icon={faEdit} />
            </ChatItemBtn>
            <ChatItemBtn
              delete
              onClick={() => handleDeleteItem(id)}
              title="Delete"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </ChatItemBtn>
          </div>
        )}
      </ChatItemDivContent>
    </ChatItemLi>
  );
};

export default Item;
