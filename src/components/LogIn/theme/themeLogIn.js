import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 90vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px){
        height: 75vh;
    }
`;
export const LogInWrraper = styled.div`
    width: 40%;
    border: 2px solid black;   
    padding: 30px 40px;
    border-radius: 10px; 
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    @media (max-width: 700px){
        width: 70%;
    }
`;

export const LogInButton = styled.button`
    background-color: orangered;
    border-radius: 5px;
    border: transparent;
    cursor: pointer;
    width: 50%;
    padding: 10px 0;
    color: white;
    font-weight: bold;
    font-size: 16px;
    `;

export const LogInLabel = styled.label`
    font-size: 18px;
    font-weight:600;
`;

export const LogInParagrph = styled.p`
     font-weight: bold;
`;
export const LogInInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    margin-bottom: 20px;
`;

