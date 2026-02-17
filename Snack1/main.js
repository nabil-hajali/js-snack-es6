
// Creare un array di oggetti:
//create an array with objects
const bici = [
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // describe name and weight of the bikes
    {
        nome: 'Bianchi',
        peso: '6.6',
    },
    {
        nome: 'Colnago',
        peso: '6.5',
    },
    {
        nome: 'Pinarello',
        peso: '7.35',
    },
    {
        nome: 'Atala',
        peso: '18',
    }
]
//initialize a for condition
for (let i = 0; i < bici.length; i++) {
    const pesoBici = bici[i];
    console.log(pesoBici.peso);
    
    
}


// Stampare a schermo la bici con peso minore.