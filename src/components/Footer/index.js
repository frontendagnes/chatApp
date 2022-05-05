import React from 'react';
import { Div, DivName } from './theme/themeFooter'
import Logo from '../Logo'

const Footer = () => {
return(
    <Div>
        <span>&copy; 2021</span> 
        <span><Logo  /></span>
        <DivName>by: <a href='https://frontend-agnes.pl'>frontend-agnes</a></DivName>
    </Div>
)
}

export default Footer

