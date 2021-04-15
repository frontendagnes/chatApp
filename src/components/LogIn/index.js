import React from "react";
import {
  LogInWrraper,
  LogInButton,
  LogInLabel,
  LogInInput,
  Wrapper,
  LogInParagrph
} from "./themeLogIn";
import Logo from '../Logo/';
import Footer from '../Footer';
function LogIn(porps) {
  return (
    <>
    <Wrapper>
      <Logo fontSize={48} top={10} left={10} />
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
      <Footer />
    </>
  );
}

export default LogIn;
