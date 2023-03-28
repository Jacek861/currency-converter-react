import styled from "styled-components";

export const DivButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    width: 60%;
    border: none;
    background-color: lightslategrey;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 2px 2px 10px black;
    transition: background 2s, transform 0.5s;

    &:hover {
        color: brown;
        background-color: rgb(255, 255, 255);
        transform: scale(1.1)
    }
`;