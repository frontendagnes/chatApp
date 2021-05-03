import React, {useEffect, useState} from 'react'
import { Wrapper, Button } from './theme/themeNewMessges';
import api from '../../utility/firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NewMessages = () => {
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
    return() => {
        setInfo([])
    }
    }, [])

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
                        {(item.info !== '') &&      
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