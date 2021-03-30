// debugger;    
// let nombre;
// let edad;
// nombre = prompt("Ingrese su nombre");
// edad = parseInt(prompt("Ingrese su edad"));
// console.log(nombre);
// console.log(typeof(nombre));
// console.log(edad);
// console.log(typeof(edad));


function Saludar(p1){//Parametro de entrada
    console.log(`Hola ${p1}`);
    return null;
}
Saludar(prompt("Ingrese su nombre"));
Saludar("Miguel Angel");
Saludar("Marly");
Saludar("Orlando");
Saludar("Fabian");

//Codigo en secuencia
let saludar;
saludar = "Miguel Angel";
console.warn(`Hola ${saludar}`);
saludar = "Marly";
console.warn(`Hola ${saludar}`);
saludar = "Orlando";
console.warn(`Hola ${saludar}`);
saludar = "Fabian";
console.warn(`Hola ${saludar}`);