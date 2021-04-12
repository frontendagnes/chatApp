import styled from 'styled-components';

export const ChatItemUl = styled.ul`
list-style-type: none;
`;

export const ChatItemLi = styled.li`
border: 2px solid black;
display: flex;
flex-flow: wrap column;
padding: 10px 10px;
width: 800px;
margin: 10px auto;
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

export const ChatItemButton = styled.button`
    width: 200px;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: orangered;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: transparent;
    cursor: pointer;
    border-radius: 5px;
`;

export const ChatItemBtnEdit = styled.button`
    background: transparent;
    border: transparent;
    font-size: 24px;
    cursor:pointer;
`

export const ChatItemBtnUpdate = styled.button`
    width: 100px;
    font-size: 14px;
    margin-left: 5px;
    background-color: #008000;
    color: #ffffff;
    border: transparent;
    padding: 5px 10px;
    border-radius: 5px;
`
export const ChatItemInputUpdate = styled.input`
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #808080;
font-size: 16px;
`