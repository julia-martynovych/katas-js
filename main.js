// const listadoPlanetas = ['Narnia', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Pluton', 'Mercurio']
// listadoPlanetas.shift();
// const planetaMercurio = listadoPlanetas.pop();
// listadoPlanetas.unshift(planetaMercurio);
// const planetaPluton = listadoPlanetas.pop();
// console.log(listadoPlanetas);

// const buttonGreet = document.getElementById("button_greet")

// console.log(buttonGreet)

// buttonGreet.addEventListener("click", function () {
//     console.log("Hola desde botton");
//     alert("Hola. Esto es un alert");
// }
// )

//*Crea una función para felicitar el cumpleaños que pueda
//  darte respuesta en tres idiomas ( español, inglés y Alemán) 
// y que tenga una respuesta con iconos, en el caso de que no sea
//  ninguno de los tres idiomas🎂.*/

// function happyBirthday(name, language){
//     switch (language) {
//         case "es": console.log("Feliz cumpleaños, " + name);
//             break; 
//         case "en": console.log("Happy birthday, " + name);
//             break;
//         case "de": console.log("Alles Gute zum Geburtstag, " + name);
//             break;
//          default:  console.log("🎂, " + name)
// }
// };

// happyBirthday("Maria", "de");

// function dice(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(dice(1, 6))


// function dice() {
//   let aleatoryNumber = Math.floor(Math.random() * 6) + 1;
//   return aleatoryNumber
// }
// // console.log(Math.floor(Math.random() * 6) + 1);
// console.log(dice())


//
// function multipliers(num) {
//   const arrayOp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   console.log(`La tabla del numero ${num} es:`)
//   arrayOp.forEach((arrayValue) => {
//     console.log(`${num} x ${arrayValue} = ` + num * arrayValue)
//   });
// };

// const num = prompt("Introduce el numero a sacar la tabla:");
// console.log("_________________________________");

// multipliers(num);

function multiplicationTable(num){
  for (let i = 1; i < 10; i++){
  console.log(`${num} x ${i} = ${num*i}`)
}
}


// Crea una funcion que sea un contador de las ovejas que están dormidas

const sleepSheep = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true, false]

function sheepCounter(num) {
  let count = 0;
  sleepSheep.forEach(element => {
    if (element === true) {
      count++;
    }
  });
  return count
}
  console.log(sheepCounter()); 


// console.log(`hola!`)