import styled from 'styled-components';

export const Div = styled.div`
   display: flex;
   justify-content: space-between;
   flex-flow: row wrap;
   font-size: 22px;
   padding: 10px 40px;
   font-weight: 600;
   border-top: 1px solid grey;
   margin-bottom: 30px;
   @media (max-width: 700px){
      flex-flow: column wrap;
      align-items: left;
  }

`

export const DivName = styled.div`
font-size: 22px;
@media (max-width: 700px){
   margin-top: 30px;
}
`