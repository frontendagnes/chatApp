import styled from 'styled-components';

export const AddItemDiv = styled.div`
// position: fixed;
text-align: center;
margin-bottom:30px;
left:10px;
`;

export const AddItemInput = styled.input`
padding: 10px 20px;
width: 50%;
height: 40px;
color: black;
border-radius: 5px
`;

export const AddItemButton = styled.button`
transition: all 0.75s;
font-size: 36px;
border: transparent;
background: transparent;
cursor: pointer;
color: #008000;
&:hover{
    color: #b5f5b5;
}
`;