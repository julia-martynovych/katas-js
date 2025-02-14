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

// function multiplicationTable(num){
//   for (let i = 1; i < 10; i++){
//   console.log(`${num} x ${i} = ${num*i}`)
// }
// }


// // 4. Crea una funcion que sea un contador de las ovejas que están dormidas

// const sleepSheep = [true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true, false]

// function sheepCounter(num) {
//   let count = 0;
//   sleepSheep.forEach(element => {
//     if (element === true) {
//       count++;
//     }
//   });
//   return count
// }
//   console.log(sheepCounter()); 


// console.log(`hola!`)

// 5. Crea un objeto planeta tierra, que tenga las siguientes propiedades: su
// distancia del sol,  sus vecinos (especificando que planeta tiene delante y
// cuál detrás), una lista de su composición atmosférica, y que también
// tenga un método saludar que devuelva en consola Hola soy el planeta
// tierra 🌍

// más tarde añade con código la propiedad satélite y dale el valor de
// luna, también añade la propiedad planeta habitado con el valor true, y
// posteriormente eliminalo.

// const planetaTierra = {
//   kmDelSol: 150000000,
//   composiciónAtmosférica: ["Nitrogeno", "Oxigeno", "Aragon"],
// };

// console.log(`Hola, soy planeta Tierra!`);
// console.log(planetaTierra)

// planetaTierra.satélite = "luna";
// planetaTierra.habitado = true;
// console.log(planetaTierra)

// delete planetaTierra.habitado;
// console.log(planetaTierra)

// const planetaTierra = {
//   kmDelSol: 150000000,

//   neighbor: {
//     delante: "Venus",
//     detras: "Marte",
//   },

//   compostion: ["Nitrogeno", "Oxigeno", "Aragon"],
  
//   greet: function () {
//     console.log("Hola, soy planeta Tierra")
//   },
// }
// 6. Basándote en la especificaciones del objeto anterior crea la clase planeta
// y haz instancias de, al menos dos planetas, más abajo te especifico las
// propiedades: 🪐🐱🚀
// nombre del planeta, km del sol, planetas vecinos, satélites, método saludar

// class Planeta {
//   constructor(nombreDelPlaneta, kmDelSol, planetasVecinos, satélites, métodoSaludar) {
//     this.nombreDelPlaneta = nombreDelPlaneta;
//     this.kmDelSol = kmDelSol;
//     this.planetasVecionos = planetasVecinos;
//     this.satélites = satélites;
//     this.métodoSaludar = métodoSaludar;
//   }
// }

// let marte = new Planeta("Marte", 227900000, "Tierra, Júpiter", "Deimos, Fobos", "None")
// let tierra = new Planeta("Tierra", 150000000, "Marte, Venus", "Luna", "Hola, mundo")

// console.log(tierra.kmDelSol)
// console.log(marte.planetasVecionos)

// class Animal {
//   constructor(nombre, especie) {
//     this.nombre = nombre;
//     this.especie = especie;
//   }
//   mostrarInfo() {
//     console.log(`Nombre: ${this.nombre}. Especie: ${this.especie}`)
//   }
// }
//   class Perro extends Animal {
//     constructor(nombre, raza) {
//       super(nombre, "Perro")
//       this.raza = raza;
//       this.vacunas = [];
//     }

//     agregarVacuna(vacuna) {
//       this.vacunas.push(vacuna)
//       console.log(`${vacuna} añadida para ${this.nombre}`)
//     }
//   }

// const perro1 = new Perro("Paco", "Yorkshire")
// console.log(perro1)

// perro1.agregarVacuna('Rabia')
// console.log(perro1)






// Clase Caballero que demuestra el principio de encapsulación
// class Caballero {
//     #durabilidadArmadura;  // Atributo privado usando # (característica moderna de JS)
//     constructor(durabilidadInicial, nombre) {
//         this.#durabilidadArmadura = durabilidadInicial;
//         this.nombre = nombre;
//     }

//     // Método público que permite recibir daño de manera controlada
//     recibirDaño(cantidadDaño) {
//         // Lógica interna que controla cómo se reduce la durabilidad
//       const dañoReal = Math.min(cantidadDaño, this.#durabilidadArmadura);
//       this.#durabilidadArmadura -= dañoReal;
//       return `${this.nombre} recibio ${dañoReal} puntos de daño. Durabilidad restante: ${this.#durabilidadArmadura}`;

        
//     }

//     // Método público para consultar el estado de la armadura
//     consultarEstadoArmadura() {
//       return `La armadura de ${this.nombre} tiene ${this.#durabilidadArmadura}`;
//     }

//     // Método privado para reparar la armadura (solo usado internamente)
//     #repararArmadura(cantidad) {
//       this.#durabilidadArmadura += cantidad;
//       if (this.#durabilidadArmadura > 100) {
//         this.#durabilidadArmadura = 100;
//       }
//         }
    

//     // Método público que usa el método privado de manera controlada
//     visitarHerrero() {
//       this.#repararArmadura(50);
//       return `El herrero ha reparado la armadura`
//     }
// }
// class Enemigo {
//   constructor(nombre, poderAtaque) {
//     this.nombre = nombre;
//     this.poderAtaque = poderAtaque; 
//   }
//   atacarCaballero(caballero) {
//     return caballero.recibirDaño(this.poderAtaque)
//   }
// }
// const caballero = new Caballero(100, "Sir Falo");
// const dragon = new Enemigo("Dragón Feroz", 30);

// // console.log(caballero.#durabilidadArmadura) - no se puede utilizar porque no está en la classe

// console.log(caballero.consultarEstadoArmadura());
// console.log(dragon.atacarCaballero(caballero));
// console.log(caballero.consultarEstadoArmadura());
// console.log(dragon.atacarCaballero(caballero));
// console.log(dragon.atacarCaballero(caballero));
// console.log(caballero.visitarHerrero());
// console.log(caballero.visitarHerrero());
// console.log(caballero.consultarEstadoArmadura());


// CLASE BASE (SUPERCLASE)

class Personaje {
  constructor(nombre, fuerza, destreza) {
    this.nombre = nombre;
    this.fuerza = fuerza;       // Para ataques físicos
    this.destreza = destreza;   // Para habilidad/precisión
  }

  // Método genérico que será sobrescrito
  atacar() {
    return `${this.nombre} usa un ataque básico`;
  }
}
// // ======================
// // CABALLERO (SUBCLASE)
// // ======================
// class Caballero extends Personaje {
//   constructor(nombre, fuerza, destreza) {
//     super(nombre, fuerza, destreza);
//     this.arma = 'espada pesada';
//   }

//   // Polimorfismo
//   atacar() {
//     const daño = this.fuerza * 2;
//     return `${this.nombre} blande su ${this.arma} y causa ${daño} puntos de daño`;
//   }
// }

// const caballero = new Caballero("Tony", 15, 8);
// console.log(caballero.atacar());

// const personaje = new Personaje("Rico", 12, 3);
// console.log(personaje.atacar());

// // ======================
// // MAGO (SUBCLASE)
// // ======================
// class Mago extends Personaje {
//   constructor(nombre, fuerza, destreza, nivelMagia) {
//     super(nombre, fuerza, destreza);
//     this.nivelMagia = nivelMagia;
//     this.hechizos = ["bola de fuego", "ventisca", "electrocutar"];
//   }

//   // Método específico del Mago
//   hechizoAleatorio() {
//     return this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
//   }

//   // Polimorfismo: Atacar usando magia
//   atacar() {
//     const hechizo = this.hechizoAleatorio();
//     const daño = this.nivelMagia * 3;
//     return `${this.nombre} lanza ${hechizo} y causa ${daño} puntos de daño magico`
//   }
// }

// const mago = new Mago("Harry", 1000, 3, 20);
// console.log(mago.atacar());
// console.log(mago.atacar());
// console.log(mago.atacar());

// PÍCARO (SUBCLASE)
// ======================
class Picaro extends Personaje {
  constructor(nombre, fuerza, destreza) {
    super(nombre, fuerza, destreza);
    this.arma = "daga dual 🗡️";
  }

  // Polimorfismo: Ataque complejo con lógica adicional
  atacar() {
    const baseDaño = this.destreza * 2;
    let resultado = `${this.nombre} usa ${this.arma} `;
    
    // Probabilidad de ataque crítico (30%)
    if (Math.random() < 0.3) {
      const critico = baseDaño * 2;
      resultado += `¡CRÍTICO! ${critico} puntos de daño 💥`;
    } 
    // Probabilidad de ataque doble (50%)
    else if (Math.random() < 0.5) {
      resultado += `con doble golpe: ${baseDaño} + ${baseDaño} = ${baseDaño * 2} daño ✨`;
    } 
    // Ataque normal
    else {
      resultado += `y causa ${baseDaño} puntos de daño`;
    }
    
    return resultado;
  }
}

const picaro = new Picaro("Juan", 200, 100);
console.log(picaro.atacar());
console.log(picaro.atacar());
console.log(picaro.atacar());
console.log(picaro.atacar());