import React from "react";
import { AddItemDiv, AddItemInput, AddItemButton } from "./theme/themeAddItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AddItem = (props) => {
  return (
    <AddItemDiv>
      <form onSubmit={props.onClick}>
        <AddItemInput
          id="scroll"
          onChange={props.onChange}
          value={props.value}
          placeholder="Enter text"
        />
        <AddItemButton type="submit" title="Send">
          <FontAwesomeIcon icon={faPaperPlane} />
        </AddItemButton>
      </form>
    </AddItemDiv>
  );
};

export default AddItem;
