//ARRAY
var myArray = new Array(3).fill("Hola");
console.log(myArray); // ["Hola","Hola","Hola"]

//Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

//Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

//Algoritmo aleatorio
for (var member of myTeam) {
  const availability = [];
  for (let i = 0; i < 8; i++) {
    const isAvailable = Math.round(Math.random()) === 1; // Math.random() > 0.5
    availability.push(isAvailable);
  }
  member.availability = availability;
};


//Mostrar disponibilidad
for (var member of myTeam) {
  console.log("Disponibilidad de " + member.name);
  for (let i = 0; i < 8; i++) {
    let flag = "Sí";
    if (member.availability[i] === false) {
      flag = "No";
    }
    console.log("\t" + WORK_HOURS[i] + ": " + flag);
  }
  console.log(member);
};

//Encontrar hueco
for (let i = 0; i < WORK_HOURS.length; i++) {
  let franjaLibre = true;
  for (var member of myTeam) {
    const availability = member.availability[i];
    if (availability === false) {
      franjaLibre = false;
      break;
    }
  }

  if (franjaLibre) {
    console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
  }

  /* Otra forma -> push
  let arr = [];
  for (var member of myTeam) {
    const availability = member.availability[i];
    arr.push(availability);
  }
  console.log(arr, arr.every((value) => value === true));
  */
};