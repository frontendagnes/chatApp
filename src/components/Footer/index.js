import React from 'react';
import { Div, SpanName } from './themeFooter'
import Logo from '../Logo'

const Footer = () => {
return(
    <Div>

        <span>&copy; 2021</span>
        <span><Logo /></span>
        <SpanName>created by: <br />Agnieszka Kamińska</SpanName>
    </Div>
)
}

export default Footer

