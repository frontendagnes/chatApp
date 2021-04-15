import styled from 'styled-components';

export const ChatItemUl = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`;

export const ChatItemLi = styled.li`
border: 2px solid black;
display: flex;
flex-flow: wrap column;
padding: 10px 10px;
width: 90%;
margin: 0 auto;
margin-top: 10px;
border-radius: 5px;
`;

export const ChatItemSpanName = styled.span`
width: 20%;
font-weight: bold;
font-size: 24px;
`;

export const ChatItemDivContent = styled.div`
display: flex;
justify-content: space-between;
    border: 1px dotted black;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 10px;
    border-radius: 5px;
`;


export const ChatItemBtn = styled.button`
transition: all 0.75s;
    background: transparent;
    border: transparent;
    font-size: 24px;
    cursor:pointer;
    color: ${props => props.delete ? "#ff0000" : "#008000"};
    &:hover{
        color: ${props => props.delete ? "#ff7e7e" : "#b5f5b5"};
    }
`

export const ChatItemBtnUpdate = styled.button`
transition: all 0.75s;
    width: 100px;
    font-size: 14px;
    margin-left: 5px;
    background-color: #008000;
    color: #ffffff;
    border: transparent;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #b5f5b5;
        color: #000000
    }
`
export const ChatItemInputUpdate = styled.input`
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #808080;
font-size: 16px;
`
export const ChatItemFound = styled.div`
display: flex;
justify-content: center;
fonr-size: 24px;
color: #ff0000;
margin-bottom: 50px;
`
