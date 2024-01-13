import { styled } from "styled-components";

export const CardImage = styled.div`
width: 167px;
height: 167px;
background: #cfcfcf;
`;

export const CardName = styled.div`
display: flex;
width: 167px;
height: 49.12px;
background-color: white;
color: black;
justify-content: center;
align-items: center;
`;

//The border color needs to be orange when It is clicked
export const MainCard = styled.div`
height: 216px;
width: 167px;
border: ${(props) => (props.onClick ? 'none' : '5px solid #f06414')};
box-shadow: ${(props) => (props.onClick ? 'none' : '0 0 25px  #f06414')};
`;

export const ClassName = styled.h2`
color: white;
padding-bottom: 1%;
`;