import { NavContainer, ClassLink } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faShieldHalved, faMedkit, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

export default function Navbar({ showGoBack, onGoBack }) {

    return (
        <NavContainer>
            {showGoBack ? (
                <>
                <ClassLink onClick={onGoBack}>
                     <FontAwesomeIcon style={{width: '30px', height: '30px'}} icon={faArrowLeft} />
                </ClassLink>
                <Link as={Link} to="damage" smooth={true}>
                    <h4 style={{paddingRight: '10px'}}>Go Back</h4>
                </Link>
                </>
            ) : (
                <>
                <ClassLink as={Link} to="damage" smooth={true}>
                    <FontAwesomeIcon style={{width: '30px', height: '30px', paddingLeft: '15px'}}  icon={faGun} />
                </ClassLink>

                <Link as={Link} to="damage" smooth={true}>
                    <h4 style={{paddingRight: '10px'}}>Damage</h4>
                </Link>

                <ClassLink as={Link} to="tank" smooth={true}>
                    <FontAwesomeIcon style={{width: '30px', height: '30px'}}  icon={faShieldHalved} />
                </ClassLink>

                <Link as={Link} to="tank" smooth={true}>
                    <h4>Tank</h4>
                </Link>

                <ClassLink as={Link} to="support" smooth={true}>
                    <FontAwesomeIcon  style={{width: '30px', height: '30px', paddingLeft: '15px'}}  icon={faMedkit} />
                </ClassLink>

                <Link as={Link} to="support" smooth={true}>
                    <h4 style={{paddingRight: '15px'}}>Support</h4>
                </Link> 
                </>
            )}
        </NavContainer>
    )
};