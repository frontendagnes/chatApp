import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Logo = (props) => {
const style = {
    fontSize: props.fontSize,
    position: 'absolute',
    top: props.top + 'px',
    left: props.left + 'px',
    bottom: props.bottom + 'px',
    right: props.right + 'px',
    color: props.color
}

return(
    <div style={style}><FontAwesomeIcon icon={faComments}/>ChatApp</div>
)
}
export default Logo
