import React from 'react';
import { Div, SpanName } from './themeFooter'
import Logo from '../Logo'

const Footer = () => {
return(
    <Div>
        <span>&copy; 2021 <Logo /></span>
        <SpanName>created by: Agnieszka Kamińska</SpanName>
    </Div>
)
}

export default Footer

