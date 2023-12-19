const data = [{
    min: 0,
    max: 18.4,
    classification: 'Menor que 18.5',
    info:'Magreza',
    obesity:'0'
},

{   min: 18.5,
    max: 24.9,
    classification: 'Entre 18.5 e 24.9',
    info:'Normal',
    obesity:'0'
},

{   min: 24.9,
    max: 29.9,
    classification: 'Entre 25.0 e 29.9',
    info:'Sobrepeso',
    obesity:'I'
},

{   min: 30,
    max: 39.9,
    classification: 'Entre 30 e 39.9',
    info:'Obesidade',
    obesity:'II'
},
{   
    min: 40,
    max: 99.9,
    classification: '',
    info:'Obesidade grave',
    obesity:'III'
},
]

//Seleção de elementos

const imcTable = document.querySelector('.imc-table')
const heightInput = document.querySelector('height')
const weightInput = document.querySelector('weight')
