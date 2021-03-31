import React from 'react'
import { AddItemDiv, AddItemInput, AddItemButton } from './themeAddItem'
const AddItem = (props) => {

  
    return(
        <AddItemDiv>
            <AddItemInput onChange = {props.onChange} value={props.value} placeholder="Text" />
            <AddItemButton onClick = {props.onClick}>Send text</AddItemButton>
        </AddItemDiv>
    )
}

export default AddItem