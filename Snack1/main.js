
// Creare un array di oggetti:
//create an array with objects
const bici = [
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // describe name and weight of the bikes
    {
        nome: 'Bianchi',
        peso: 6.6,
    },
    {
        nome: 'Colnago',
        peso: 6.5,
    },
    {
        nome: 'Pinarello',
        peso: 7.35,
    },
    {
        nome: 'Atala',
        peso: 18,
    }
]
//initialize a for condition
//sostituisce con il peso minore
let pesoMinore = bici[0].peso;
for (let i = 0; i < bici.length; i++) {
    const pesoObg = bici[i];
    console.log(pesoObg);
    
    if(pesoMinore > pesoObg.peso){
        pesoMinore = pesoObg.peso
    }
    
}

console.log(pesoMinore);

    // sostituisce con il peso maggiore
 /*    let pesoMinore = bici[0].peso;
for (let i = 0; i < bici.length; i++) {
    const pesoObg = bici[i];
    console.log(pesoObg);
    
    if(pesoMinore < pesoObg.peso){
        pesoMinore = pesoObg.peso
    }
    
}
    
    console.log(pesoMinore);
     */

//console.log(pesoBiciInferiore);



// Stampare a schermo la bici con peso minore.