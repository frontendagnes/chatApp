import React from "react";
import {
  LogInWrraper,
  LogInButton,
  LogInLabel,
  LogInInput,
  Wrapper,
  LogInParagrph
} from "./themeLogIn";

function LogIn(porps) {
  return (
    <Wrapper>
      <LogInWrraper>
        <LogInLabel>
          <LogInParagrph>Wprowadź nickname*</LogInParagrph>
          <LogInInput
            onChange={porps.onChange}
            value={porps.value}
            placeholder="your nick"
          />
        </LogInLabel>
        <LogInButton onClick={porps.onClick}>Done</LogInButton>
      </LogInWrraper>
    </Wrapper>
  );
}

export default LogIn;
