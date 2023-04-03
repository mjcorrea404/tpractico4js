class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
}

const persona1 = new Persona("Patricia", 30, "32089319", "M", 54, 1.56, 1992);
console.log(persona1);

const generations = [
  { name: "Silent Generation", year: [1928, 1945], rasgo: "Austeridad" },
  { name: "Baby Boom", year: [1946, 1964], rasgo: "Ambicion" },
  { name: "Generación X", year: [1965, 1980], rasgo: "Obsesion por el exito" },
  { name: "Millennials", year: [1981, 1996], rasgo: "Frustracion" },
  { name: "Generación Z", year: [1997, 2012], rasgo: "Irreverencia" },
];
function mostrarGeneracion(nacimiento) {
    const generation = generations.find(generation => {
      return nacimiento >= generation.year[0] && nacimiento <= generation.year[1];
    });
    
    return generation;
  }
  function showGenerationMessage(nacimiento) {
    const generation = getGeneration(nacimiento);
    
    if (generation) {
      console.log(`La persona nacida en el año ${nacimiento} pertenece a la ${generation.name}, caracterizada por su ${generation.rasgo}.`);
    } else {
      console.log(`No se pudo determinar la generación de la persona nacida en el año ${nacimiento}.`);
    }
  }
  