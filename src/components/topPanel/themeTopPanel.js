import styled from 'styled-components';


export const TpoPanelHeader = styled.header`
display: flex;
justify-content: space-between;
margin-right: 20px;
margin-top: 10px;
padding: 30px;
-webkit-box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
min-width: 96%;
margin: 0 auto;
position: fixed;
top: 0;
background: #ffffff;

`;
export const TopPanleSpan = styled.span`
font-size: 24px;
@media (max-width: 550px) {
    font-size: 18px;
}
`;
export const TopPanleSpanTop = styled.span`
font-size: 36px;
@media (max-width: 550px) {
    font-size: 28px;
}
`;
export const TopPanelButton = styled.button`
transition: all 0.75s;
cursor: pointer;
margin-left: 10px;
border: transparent;
background: transparent;
font-size: 28px;
color: #ff0000;
margin-right: 10px;
&:hover{
    color: #ff7e7e;
}
`;
export const Wrapper = styled.div`
height: 110px;
`