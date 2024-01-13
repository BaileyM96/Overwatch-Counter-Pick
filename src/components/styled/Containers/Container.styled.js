import { styled } from "styled-components";

export const CharacterContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
font-weight: bolder;
margin-bottom: 75px;
column-gap: 16px;
row-gap: 16px;
`;

export const H1 = styled.h1`
margin: 10px;
color: white;
font-size: 41px;
`;


export const TitleContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 10%;

@media screen and (min-width: 2560px) {
    margin-top: 0;
}

@media screen and (min-width:1640px) {
    margin-top: 3%;
}
`;

export const NameContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;