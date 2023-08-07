import { CardImage, CardName, MainCard } from "./styled/Cards.styled";
import { damageCharacters } from "./Classes/Damage/DamageCharacters";
import { tankCharacters } from "./Classes/Tank/TankCharacters";
import { supportCharacters } from "./Classes/Support/SupportCharacter";
import { CharacterContainer } from "./styled/Containers/Container.styled";
import { HeaderContainer } from "./styled/Containers/header.styled";

export default function Card() {
    return (
        <>
        <HeaderContainer id="damage">
            <h3 style={{color: 'white'}}>Damage</h3>
        </HeaderContainer>
        <CharacterContainer>
            {/* <h3 style={{color: 'white'}}>Damage</h3> */}
            {damageCharacters.map(damage => (
                <MainCard key={damage.name}>
                    <CardImage>
                        <img src={damage.image} alt={damage.name}/>
                    </CardImage>
                    <CardName>{damage.name}</CardName>
                </MainCard>
            ))}
            </CharacterContainer>


           <HeaderContainer id="tank">
            <h3 style={{color: 'white'}}>Tank</h3>
           </HeaderContainer>
           <CharacterContainer>
            {tankCharacters.map(tank => (
                <MainCard key={tank.name}>
                    <CardImage>
                        <img src={tank.image} alt={tank.name}/>
                    </CardImage>
                    <CardName>{tank.name}</CardName>
                </MainCard>        
            ))}
            </CharacterContainer>


            <HeaderContainer id="support">
                <h3 style={{color: 'white'}}>Support</h3>
            </HeaderContainer>
        <CharacterContainer>
            {supportCharacters.map(support => (
                <MainCard key={support.name}>
                    <CardImage>
                        <img src={support.image} alt={support.name}/>
                    </CardImage>
                    <CardName>{support.name}</CardName>
                </MainCard>                 
             ))}
             </CharacterContainer>
       
        </>
    );
    
}