import React from 'react';


const UpdateItem = (props) => {

    // const [update, setUpdate] = useState('')
    
    const handleChange = (e) => {
      props.setUpdate(e.target.value)
    }
    
    return(
      <div>
        <input onChange={handleChange} value={props.value}/>
        <button onClick={props.onClick}>update</button>
     </div>
    )
    
    }

export default UpdateItem