import styled from "styled-components";

export const MainModal = styled.div`
    background-color: white;
    border-radius: 12px;
    width: 415px;
    height: 222px;
    position: absolute;
    top: 30%;
    left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    :hover{
        cursor: pointer;
    }
    
    h2{
        font-size: 32px;        
    }
    
    p{
        font-size: 16px;
    }`