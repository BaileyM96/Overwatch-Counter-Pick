import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
display: flex;
justify-content: center;
font-weight: bolder;
align-items: center;

@media screen and (min-width: 1536px) {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const ClassIcon = styled(FontAwesomeIcon)`
width: 30px;
height: 30px;
padding-right: 10px;
`;

export const ClassLink1 = styled(ClassLink)`
display: flex;
justify-content: space-evenly;
`;

export const ClassName = styled.h4`

@media screen and (min-width: 1536px) {
    padding-left: 15px;
}
`;


export const BackContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
