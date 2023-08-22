import { CardImage, CardName, MainCard } from "../styled/Cards.styled";
import { damageCharacters } from "../Classes/Damage/DamageCharacters";
import { tankCharacters } from "../Classes/Tank/TankCharacters";
import { supportCharacters } from "../Classes/Support/SupportCharacter";
import { CharacterContainer, } from "../styled/Containers/Container.styled";
import { HeaderContainer } from "../styled/Containers/header.styled";
import { CounterContainer, FadeIn } from "./CounterCharacter.styled";
import { Fade } from "react-bootstrap";

//Hook
import { getCounterCharacter } from "./CounterCharacters";
import { useState } from "react";

export default function Card() {
    //allow the selected character to stay on screen
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [open, setOpen] = useState(false)

    function handleCounter(character, type) {
        //gets the array of counters for a character based off of character type
        //create a new object for us to call that adds the character to the object and the type and gives us the counters of the character
        const viewedHero = {
            ...character,
            type,
            counters: getCounterCharacter(character, type),
        };
        setSelectedCharacter(viewedHero);
        setOpen(true);
        console.log('Its highnoon somewhere', viewedHero.counters)
    }
    return (
        <>
        { !selectedCharacter ? (
        <>
        <HeaderContainer id="damage">
            <h3 style={{color: 'white'}}>Damage</h3>
        </HeaderContainer>
        <CharacterContainer>
            {/* <h3 style={{color: 'white'}}>Damage</h3> */}
            {damageCharacters.map(damage => (
                <MainCard key={damage.name} onClick={() => handleCounter(damage, 'damage' )}>
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
                <MainCard key={tank.name} onClick={() => handleCounter(tank, 'tank')}>
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
                <MainCard key={support.name} onClick={() => handleCounter(support, 'support')}>
                    <CardImage>
                        <img src={support.image} alt={support.name}/>
                    </CardImage>
                    <CardName>{support.name}</CardName>
                </MainCard>                 
             ))}
             </CharacterContainer>
            </>
        ) : (
            <>
                <Fade in={open}>
                <CharacterContainer>
                    <MainCard>
                        <CardImage>
                            <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                        </CardImage>
                        <CardName>{selectedCharacter.name}</CardName>
                    </MainCard>
                </CharacterContainer>
                </Fade>
            <HeaderContainer>
                <h3 style={{color: 'white'}}>Counters</h3>
            </HeaderContainer>
            <CounterContainer>
                {/* <MainCard> */}
                    {selectedCharacter.counters.map(counter => (
                        <FadeIn visible={open}>
                        <div key={counter.name}>
                            {console.log(counter.image)}
                            <CardImage key={counter.name}>
                                <img src={counter.image} alt={counter.name}/>
                            </CardImage>
                            {/* {console.log(counter.name)} */}
                            <CardName>{counter.name}</CardName>
                        </div>
                        </FadeIn>
                    ))}
                {/* </MainCard> */}
            </CounterContainer>
            </>
        )}
        </>
    );
}