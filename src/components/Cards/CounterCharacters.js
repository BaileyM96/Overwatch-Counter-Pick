    //add useState for changing of characters
   export const getCounterCharacter = (character, type) => {
        const counterMap = {
            'damage': {
                'Ashe': ['Doomfist','Echo','Genji', 'Reaper', 'Roadhog', 'Soldier 76', 'Sombra', 'Tracer'],
                'Bastion': ['Ana','Genji','Junkrat', 'Pharah', 'Roadhog', 'Sombra', 'Tracer', 'Zarya'],
                'Cassidy': ['Ana','Ashe','Bastion', 'Genji', 'Hanzo', 'Widowmaker'],
                'Echo': ['Ana','Ashe','Baptiste', 'Cassidy', 'DVA', 'JunkerQueen', 'Moira', 'Reaper', 'Soldier 76', 'Widowmaker', 'Zarya'],
                'Genji': ['Brigitte','Mei','Moira', 'Symmetra', 'Winston', 'Zarya'],
                'Hanzo': ['DVA','Genji','Lucio', 'Moira', 'Pharah', 'Sombra', 'Tracer', 'Wrecking Ball'],
                'Junkrat': ['Ashe','DVA','Cassidy', 'Echo', 'Genji', 'Lucio', 'Pharah', 'Reaper', 'Roadhog', 'Soldier 76', 'Sombra', 'Tracer', 'Wrecking Ball'],
                'Mei': ['Echo','Pharah', 'Reaper', 'Sombra', 'Tracer'],
                'Pharah': ['Ana','Ashe','Baptiste', 'Cassidy', 'DVA', 'Soldier 76', 'Sombra', 'Widowmaker'],
                'Reaper': ['Ana','Ashe','Echo', 'Junkrat', 'Pharah', 'Ramattra', 'Widowmaker'],
                'Sojourn': ['DVA','Lucio','Orisa', 'Reaper', 'Tracer', 'Sigma', 'Sombra', 'Zarya'],
                'Soldier 76': ['Ana','Cassidy','DVA', 'Junkrat', 'Reaper', 'Roadhog', 'Widowmaker'],
                'Sombra': ['Ana','Brigitte','Junkrat', 'Mei', 'Moira', 'Pharah', 'Winston', 'Zarya'],
                'Symmetra': ['Echo','Junkrat', 'Pharah', 'Reaper', 'Sombra', 'Tracer', 'Winston'],
                'Torbjourn': ['Ana','Bastion','Junkrat', 'Pharah', 'Sombra', 'Widowmaker'],
                'Tracer': ['Ana','Junkrat','Pharah', 'Sombra', 'Widowmaker'],
                'Widowmaker': ['DVA','Genji', 'Sombra', 'Tracer', 'Winston']
            },
            'tank': {
                'DVA': ['Brigitte', 'Doomfist', 'Moira', 'Reaper', 'Roadhog', 'Sigma', 'Symmetra', 'Winston', 'Zaraya'],
                'Doomfist': ['Ana', 'Ashe', 'Brigitte', 'Cassidy', 'Mei', 'Pharah', 'Roadhog'],
                'JunkerQueen': ['Ana', 'Ashe', 'Baptiste', 'Cassidy', 'Pharah', 'Soldier 76', 'Widowmaker', 'Zenyatta'],
                'Orisa': ['Ana', 'Ashe', 'Baptiste', 'DVA', 'Echo', 'Hanzo', 'Kiriko', 'Pharah', 'Reaper', 'Sojourn', 'Sombra', 'Soldier 76', 'Widowmaker', 'Zenyatta'],
                'Ramattra': ['Ana', 'Bastion', 'DVA', 'Kiriko', 'Orisa', 'Roadhog', 'Symmetra', 'Tracer', 'Zenyatta'],
                'Reinhardt': ['Ana', 'Brigitte', 'Junkrat', 'Mei', 'Pharah', 'Reaper', 'Sombra', 'Tracer'],
                'Roadhog': ['Ana', 'Genji', 'Echo', 'Junkrat', 'Pharah', 'Reaper', 'Sombra', 'Tracer', 'Widowmaker'],
                'Sigma': ['Genji', 'Lucio', 'Moira', 'Sombra', 'Symmetra', 'Tracer', 'Zarya'],
                'Winston': ['Ana', 'Brigitte', 'Mei', 'Roadhog'],
                'Wrecking Ball': ['Ana' ,'Brigitte', 'Mei', 'Roadhog', 'Torbjorn'],
                'Zarya': ['Ashe', 'Bastion', 'DVA', 'Echo', 'Pharah', 'Widowmaker']
            },
            'support': {
                'Ana': ['Echo', 'Genji', 'Lucio', 'Moira', 'Pharah', 'Sombra', 'Tracer'],
                'Baptiste': ['Ana', 'Echo', 'Genji', 'Hanzo', 'Lucio', 'Pharah', 'Reaper', 'Roadhog', 'Sombra', 'Tracer'],
                'Brigette': ['Cassidy', 'Bastion', 'DVA', 'Echo', 'Genji', 'Junkrat', 'Moira', 'Pharah', 'Sombra', 'Tracer', 'Widowmaker'],
                'Kiriko': ['Ana', 'Ashe', 'Baptiste', 'Cassidy', 'Doomfist', 'Genji', 'Moira', 'Reaper', 'Sojourn', 'Tracer', 'Widowmaker', 'Wrecking Ball'],
                'Lucio': ['Ashe', 'Cassidy', 'Moira', 'Soldier 76', 'Symmetra', 'Torbjorn', 'Winston', 'Zarya'],
                'Mercy': ['Ana', 'Ashe', 'Baptiste', 'Cassidy', 'Genji', 'Moira', 'Reaper', 'Roadhog', 'Soldier 76', 'Winston', 'Wrecking Ball'],
                'Moira': ['Ana', 'Ashe', 'Echo', 'Genji', 'Pharah', 'Reaper', 'Sojourn', 'Sombra', 'Soldier 76', 'Widowmaker'],
                'Zenyatta': ['DVA', 'Echo', 'Genji', 'Pharah', 'Reaper', 'Sigma', 'Tracer', 'Widowmaker']
            }
        }
        return counterMap[type][character.name] || []
    };
