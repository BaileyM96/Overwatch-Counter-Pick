import { styled } from "styled-components";


export const NavContainer = styled.footer`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: white;
width: 100%;
height: 70px;
position: fixed;
z-index: 1;
bottom: 0;
text-align: center;
`;

export const ClassLink = styled.a`
font-weight: bolder;
font-size: large;
`;

export const ClassLink1 = styled(ClassLink)`
display: flex;
justify-content: space-evenly;
/* flex-direction: row; */
`;


export const BackContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
