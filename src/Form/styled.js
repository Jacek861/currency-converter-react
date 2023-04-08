import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 500px;
    margin: 20px 20px;
    background: lightgrey;
    border-radius: 10px;
    padding: 20px;
`;

export const StyledLabel = styled.label`
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledLabelText = styled.span`
    width: 100%;
    display: inline-block;
`;
  
export const StyledInput = styled.input`
    border: 1px solid black;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
`;
  
export const StyledSelect = styled.select`
    border: 1px solid black;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
`;

export const StyledParagrath = styled.p`
    font-size: 12px;
    text-align: center;
`;