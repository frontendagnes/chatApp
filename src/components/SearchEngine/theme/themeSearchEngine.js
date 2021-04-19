import styled from 'styled-components';

export const SearchEngineDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column wrap;
font-size: 24px;
font-weight: 600;
margin: 50px;
`
export const SearchEngineInput = styled.input`
    padding: 10px 20px;
    width: 60%;
    height: 30px;
    border-radius: 5px;
    margin-top: -20px;
    @media (max-width: 700px) {
        width: 90%;
    }
`