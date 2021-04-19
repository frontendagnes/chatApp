import React from 'react';
import { Div, DivName } from './theme/themeFooter'
import Logo from '../Logo'

const Footer = () => {
return(
    <Div>
        <span>&copy; 2021</span> 
        <span><Logo  /></span>
        <DivName>created by: Agnieszka Kamińska</DivName>
    </Div>
)
}

export default Footer

