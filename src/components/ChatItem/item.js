import React, {useContext, useState} from "react"
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
import api from "../../utility/firebase";
import authContext from "../../utility/Context";
const Item = ({id, datetime, content, localUser}) => {
    const [update, setUpdate] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const { user } = useContext(authContext)  

    const handleChange = (e) => {
        setUpdate(e.target.value)
      };
    
    const handleDeleteItem = (id) => {
        const itemsRef = api.ref(`messages/${id}`);
        itemsRef.remove();
      };
    
    const handleUpdateItem = (id) => {
        const refItem = api.ref(`messages/${id}`);
        refItem.update({
          content: update,
        });
      };
    
    const handleEditInput = () => {
        setIsEdit(!isEdit)
      };
    return(
        <ChatItemLi>
        <div>
          <ChatItemSpanName>{localUser} | </ChatItemSpanName>
          <span>
            { datetime }
          </span>
        </div>
        <ChatItemDivContent>
          <span>{content}</span>
          {isEdit && (
            <span>
              <ChatItemInputUpdate
                name={id}
                onChange={handleChange}
                value={update || content}
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
            <ChatItemBtn
              onClick={() => handleEditInput()}
              title='Update'
            >
              <FontAwesomeIcon icon={faEdit} />
            </ChatItemBtn>
            <ChatItemBtn delete onClick={() => handleDeleteItem(id)} title='Delete'>
              <FontAwesomeIcon icon={faTrashAlt} />
            </ChatItemBtn>
        </div>
           )} 
        </ChatItemDivContent>
      </ChatItemLi>              
    )
}

export default Item