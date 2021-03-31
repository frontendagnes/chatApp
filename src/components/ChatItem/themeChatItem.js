import styled from 'styled-components';

export const ChatItemUl = styled.ul`
list-style-type: none;
`;

export const CahtItemLi = styled.li`
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

export const ChatItemDivConent = styled.div`
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