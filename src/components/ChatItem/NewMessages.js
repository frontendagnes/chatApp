import React, { useEffect, useState } from "react";
import { Wrapper, Button } from "./theme/themeNewMessges";
import api, { ref, onValue, update } from "../../utility/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NewMessages = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const refDoc = ref(api, "/messages");

    const unsuscribe = onValue(refDoc, (data) => {
      const infoState = data.val();
      const newInfo = [];
      for (let infoKey in infoState) {
        newInfo.push({
          id: infoKey,
          info: infoState[infoKey].info,
        });
      }
      setInfo(newInfo);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  const handleUpdateInfo = (id) => {
    const refItem = ref(api, `messages/${id}`);
    update(refItem, {
      info: "",
    });
  };
  return (
    <>
      {info.map((item) => {
        return (
          <div key={item.id}>
            {item.info !== "" && (
              <Wrapper>
                {item.info}{" "}
                <Button onClick={() => handleUpdateInfo(item.id)}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </Button>
              </Wrapper>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NewMessages;
