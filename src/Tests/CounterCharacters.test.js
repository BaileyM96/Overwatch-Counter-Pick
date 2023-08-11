import { getCounterCharacter } from "../components/Cards/CounterCharacters";

describe('getCounterCharacter', () => {
    it('should return the correct counter characters for the givin character', () => {
        const character = { name: 'Lucio'};
        const type = 'support';

        const expectedCounters = ['Ashe', 'Cassidy', 'Moira', 'Soldier 76', 'Symmetra', 'Torbjorn', 'Winston', 'Zarya']
        const result = getCounterCharacter(character, type);

        expect (result).toEqual(expectedCounters);
    })
})