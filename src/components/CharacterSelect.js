//Add the overwatch Image to this component
import overwatchlogo  from '../images/overwatchlogo.png';
import Card from './Card';
import { TitleContainer } from './styled/Containers/Container.styled';

export default function CharacterSelect() {
    return (
        <>
        <TitleContainer>
            <img src={overwatchlogo} width='89px' height='89px' alt='overwatch logo'/>
            <h1 style={{color: 'white'}}>Overwatch Counter</h1>
            <h3 style={{color: 'white'}}>Choose who you want to counter</h3>
        </TitleContainer>
        <h3 style={{color: 'white'}}>Damage</h3>
        <Card />
        </>
    )
}