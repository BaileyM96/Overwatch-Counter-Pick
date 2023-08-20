import { styled } from "styled-components";

export const CounterContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
column-gap: 16px;
row-gap: 16px;
align-items: center;
text-align: center;
`;

export const FadeIn = styled.div`
opacity: ${(props) => (props.visible ? 1 : 0)};
transition: opacity 0.3s ease-in;
`;