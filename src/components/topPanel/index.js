import React from 'react'
import { TopPanleSpan, TpoPanelHeader, TopPanelButton } from './themeTopPanel'
const TopPanel = (props) => {

    const handleClick = () =>{
        props.setIsLogged(false);
}
return(
    <TpoPanelHeader>
     <TopPanleSpan> Witaj! <b>{props.user}</b></TopPanleSpan> | <TopPanelButton onClick={handleClick}>LogOut</TopPanelButton>
    </TpoPanelHeader>
)

}
export default TopPanel