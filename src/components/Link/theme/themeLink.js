import styled from 'styled-components';

export const Btn = styled.span`
    position: fixed;
    right: 10px;
    z-index: 1;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  `
  export const Link = styled.a`
  transition: all 0.75s;
  display: block;
  text-decoration: none;
  &:link{
    color: #0000ff;
  }
  &:visited{
    color: #0000ff; 
  }
  &:hover{
      color: #8f8fff;
  }
  `
  export const Add = styled(Btn)`
  top: 110px;
  `
  export const Search = styled(Btn)`
  top: 150px;
  `