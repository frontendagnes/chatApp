import React from 'react'
import { AddItemDiv, AddItemInput, AddItemButton } from './themeAddItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import NewMessages from '../ChatItem/NewMessages';
const AddItem = (props) => {

  
    return(
        <AddItemDiv>
            <AddItemInput onChange = {props.onChange} value={props.value} placeholder="Enter text" />
            <AddItemButton onClick = {props.onClick} title="Send"><FontAwesomeIcon icon={faPaperPlane}/></AddItemButton>

        </AddItemDiv>
    )
}

export default AddItem