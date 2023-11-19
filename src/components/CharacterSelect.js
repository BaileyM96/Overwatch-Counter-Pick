import Card from '../components/Cards/Card';
import { TitleContainer } from './styled/Containers/Container.styled';


export default function CharacterSelect() {
    return (
        <>
        <TitleContainer>
            <img src={process.env.PUBLIC_URL + '/image/Overwatch_circle_logo.svg'} width='89px' height='89px' alt='overwatch logo'/>
            <h1 style={{color: 'white'}}>Overwatch</h1>
            <h1 style={{color: 'white'}}>Counter</h1>
        </TitleContainer>
        <Card />

        
        {/* <Navbar /> */}
        </>
    )
}