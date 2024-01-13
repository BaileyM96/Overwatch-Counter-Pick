import Card from '../components/Cards/Card';
import { TitleContainer, H1 } from './styled/Containers/Container.styled';


export default function CharacterSelect() {
    return (
        <>
        <TitleContainer>
            <img src={process.env.PUBLIC_URL + '/image/Overwatch_circle_logo.svg'} width='89px' height='89px' padding-bottom='10px' style={{paddingBottom: '20px'}} alt='overwatch logo'/>
            <H1>Overwatch</H1>
            <H1>Counter</H1>
        </TitleContainer>
        <Card />
        </>
    )
}