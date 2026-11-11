
let x = '10';
let y = '20';
let z = parseInt(x) + parseInt(y);
console.log(z);

let car =  {
    model: 'benz GLE469',
    color: 'black',
    year: 2020,
    engine: 'V8',
    tire: 'Michelin',
}

let carModel = car.model;

if (carModel === 'benz GLE460') {
    console.log('The car model is benz GLE460.');
} else {
    console.log('The car model is not benz GLE460.');
}


 let getCarInfo = (car) => {
    return `The car model is ${car.model}, color is ${car.color}, year is ${car.year}, engine type is ${car.engine}, and tire brand is ${car.tire}.`;
 }

console.log(getCarInfo(car));

let numbers = [1, 2, 3, 4, 5];
let firstNumber = numbers[0];
let secondNumber = numbers[1];
console.log(`First number: ${firstNumber}, Second number: ${secondNumber}`);


const chrisAge =  18;

// const status = chrisAge >= 18 ? "Adult" : "Minor";

switch (chrisAge) {
    case 18:
        console.log("Chris is an adult.");
        break;
    case 17:
        console.log("Chris is a minor.");
        break;
    default:
        console.log("Chris's age is not specified.");
}

console.log(`Chris's age is ${chrisAge}.`);
