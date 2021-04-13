import React from "react";
import { Wrapper, TopPanleSpan, TpoPanelHeader, TopPanelButton, TopPanleSpanTop } from "./themeTopPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './style.css';
const TopPanel = (props) => {
  const handleClick = () => {
    localStorage.removeItem("isLogged");
    props.setIsLogged(localStorage.getItem("isLogged"));
  };
  return (
<Wrapper>
    <TpoPanelHeader className="header">
        <TopPanleSpanTop>
            <FontAwesomeIcon icon={faComments} />
            <span>ChatApp</span>
        </TopPanleSpanTop>
        <TopPanleSpan>
            <span> Witaj! <b>{props.user}</b> |</span>
            <TopPanelButton onClick={handleClick} title="Log Out"><FontAwesomeIcon icon={faSignOutAlt } /></TopPanelButton>
        </TopPanleSpan>
    </TpoPanelHeader>
</Wrapper>
  );
};
export default TopPanel;
