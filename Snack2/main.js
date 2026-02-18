// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Juve',
        points: 0,
        fouls: 0
    },
    {
        name: 'Hellas',
        points: 0,
        fouls: 0
    },
]
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];
    console.log(thisTeam);
    thisTeam.points = getRandomInteger(1, 100)
    thisTeam.fouls = getRandomInteger(1, 50)
    
}

console.log(teams);
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];

    newTeams.push({
        name: thisTeam.name,
        fouls: thisTeam.fouls
    })
}

console.log(newTeams);







