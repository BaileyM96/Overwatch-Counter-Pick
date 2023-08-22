import { damageCharacters } from "./Damage/DamageCharacters";
import { tankCharacters } from "./Tank/TankCharacters";
import { supportCharacters } from "./Support/SupportCharacter";

export const masterCharacterList = {
    ...damageCharacters.reduce((acc, character) => ({...acc, [character.name]: character }), {}),
    ...tankCharacters.reduce((acc, character) => ({...acc, [character.name]: character }), {}),
    ...supportCharacters.reduce((acc, character) => ({...acc, [character.name]: character}), {})
}