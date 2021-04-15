import React, {useEffect, useState} from 'react'
import { Wrapper, Button } from './themeNewMessges';
import api from '../../firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NewMessages = (props) => {
    const [info, setInfo] = useState([])
    
    
    useEffect(() => {
        api.ref('/messages').on('value', (data) => {
            let infoStan = data.val();
            let newInfo = []

            for (let infoKey in infoStan){
                newInfo.push({
                    id: infoKey,
                    info: infoStan[infoKey].info,
                })
            }
            setInfo(newInfo)
        })

    }, [])
    // const hendleTimeOut = (e) => {
    //     e.setTimeout(handleRemoveItem, 2000)
    //     console.log("Załadowałem się")
    // }
    const handleUpdateInfo = (id) => {
        const refItem = api.ref(`messages/${id}`);
        refItem.update({
            info:''
        });
	}
        return(
        <>  
            {info.map((item) => {
                return(
                    <div key={item.id}>              
                        {(item.info && item.info !== '') &&      
                            <Wrapper>{item.info} <Button onClick={() => handleUpdateInfo(item.id)}><FontAwesomeIcon icon={faTimesCircle} /></Button></Wrapper>
                        }             
                    </div>
                )   
                })
            }
        </>
    )
}

export default NewMessages