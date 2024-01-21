import { NavContainer, ClassLink, ClassLink1, BackContainer, ClassName, ClassIcon } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faShieldHalved, faMedkit, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

export default function Navbar({ showGoBack, onGoBack }) {
    return (
        <NavContainer>
            {showGoBack ? (
                <BackContainer>
                    <ClassLink1 onClick={onGoBack}>
                        <FontAwesomeIcon style={{width: '30px', height: '30px', paddingRight: '15px'}} icon={faArrowLeft} />
                    </ClassLink1>
                    <ClassLink1 onClick={onGoBack}>
                        <h4 style={{paddingRight: '25px'}}>Go Back</h4>
                    </ClassLink1>
                </BackContainer>
            ) : (
                <>
                <ClassLink as={Link} to="damage" smooth={true}>
                    <ClassIcon icon={faGun} />
                    <ClassName>Damage</ClassName>
                </ClassLink>


                <ClassLink as={Link} to="tank" smooth={true}>
                    <ClassIcon icon={faShieldHalved} />
                    <ClassName>Tank</ClassName>
                </ClassLink>


                <ClassLink as={Link} to="support" smooth={true}>
                    <ClassIcon icon={faMedkit} />
                    <ClassName>Support</ClassName>
                </ClassLink>
                </>
            )}
        </NavContainer>
    )
};