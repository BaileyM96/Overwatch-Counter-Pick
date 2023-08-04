import { CardImage, CardName, MainCard } from "./styled/Cards.styled";
import { damageCharacters } from "./Classes/Damage/DamageCharacters";
import { CharacterContainer } from "./styled/Containers/Container.styled";

export default function Card() {
    return (
        <CharacterContainer>
            {damageCharacters.map(damage => (
                <MainCard key={damage.name}>
                    <CardImage>
                        <img src={damage.image} alt={damage.name}/>
                    </CardImage>
                    <CardName>{damage.name}</CardName>
                </MainCard>
                
            ))}
        </CharacterContainer>
    );
    
}