// here i am importing DinosData
import Data from "./dinos.js";


// data comes from userData.js i imported it
import { name, heightf, heighti, weight, diet } from "./userData.js";
// createElements

// here i am assigning a new variable from  dinosdata from dinos.js
const Dinosaurs = Data.Dinos;

// Create Dino Constructor
class DinoClass {
  constructor(species, weight, height, diet, where, when, fact, image) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = `images/${this.species.toLowerCase()}.png`;
    // console.log(this.diet)
  }

//   i am using methods inside class and using it in my atherFunc function 
// to practise using class methods

// comparing user diet and dinosaur diet and i am passing one param for the user form output
  userDiet(Diet) {
    //  console.log(Diet)
    console.log(this.diet);
    if (Diet === this.diet) {
      return `${this.species}'s ${this.diet}is the same as your diet`;
    } else if (this.diet === "carnivor") {
      return `${this.species} has ${this.diet}is different then yours`;
    } else if (this.diet === "herbavor") {
      return `${this.species} has ${this.diet} is not like yours`;
    } else {
      return `${this.species} has ${this.diet} it is not what sou use to eat`;
    }
  }

  // comparing user weit and dinosaur weit and i am passing one param for the user form output
  userWeight(userWeight) {
    let compare = Math.floor(Number(this.weight) - userWeight);
    if (compare > 0) {
      return `${this.species} is ${compare} then you`;
    } else {
      return `${this.species}'s ${this.weight} is less then yours `;
    }
  }

  // comparing user Height and dinosaur Height and i am passing one param for the user form output
  userHeight(userHeight) {
    // let compare = Math.floor(this.height - userHeight);

    if (this.height -userHeight > 0) {
      `${this.species}is ${this.species - userHeight} longer then you`;
    } else {
      `${this.species}'s ${this.height} is shorter  than you`;
    }
  }

//   random function
  static getRandom(min, max) {
    return this.species === "Pigeon"
      ? 3
      : Math.floor(Math.random() * (max - min) + min);
  }

  static click(){
    document.getElementById("btn").addEventListener("click", atherFunc);
  }

  static clearing(){
    document.getElementById("dino-compare").innerHTML = "";
  }
}

// here i wrote the code for geting userdata using IIFE function also i create object for user and dinosaout 
// i use human as species name to be easy to get image of human i am also using splice method to put the 5th position the human object
function atherFunc() {
  // Create user Object
  let human = new DinoClass(
    "human",
    null,
    null,
    null,
    null,
    null,
    "to be human is great"
  );

  // creating dino Object
  const dinosaurObj = Dinosaurs.map(
    (dinosaur) =>
      new DinoClass(
        dinosaur.species,
        dinosaur.weight,
        dinosaur.height,
        dinosaur.diet,
        dinosaur.where,
        dinosaur.when,
        dinosaur.fact
      )
  );

  // console.log(dinosaurObj);
  dinosaurObj.splice(4, 0, human);

// here is the code for geting the user values instantly after the user clicks the compare botton using IIFE function

  (function humanData() {
    (function validationFunc() {
      if (name.value === "") {
        name.classList.add("error");
        alert("add name please");
      }
      if (heightf.value === "") {
        heightf.classList.add("error");

        alert("add feet");
      }
      if (heighti.value === "") {
        heighti.classList.add("error");

        alert("add inches");
      }
      if (weight.value === "") {
        alert("add weight");
        weight.classList.add("error");

        alert("add ");
      }
    })();
    // here i add feet and inches and divide 12 to convert feet
    let height = Math.floor(
      (Number(heightf.value) + Number(heighti.value)) / 12
    );

    // console.log(name.value, height, weight.value, diet.value);
    
    // asigning human to the user input value
    human.name = name.value;
    human.height = height;
    human.weight = Number(weight.value);
    human.diet = diet.value.toLowerCase();
  })();

//   here i am iterating the mix data from user and dinosaurs and displaying 
  const mixDinoHumanObj = dinosaurObj.map((obj) => {
    const divTiles = document.createElement("div");
    divTiles.classList.add("grid-item");
    let image = document.createElement("img");
    let p = document.createElement("p");
    let h3 = document.createElement("h3");
    let fragment = document.createDocumentFragment();

    // here i am reverting the user data and image to it is right position
    image.src = obj.image;
    if (obj.species === "human") {
      const { name, fact } = human;
      h3.innerHTML = name;
      p.innerHTML = fact;
    } else if (obj.species === "Pigeon") {
      p.innerHTML = obj.species;
      p.innerHTML = obj.fact;
    } else {
      h3.innerHTML = obj.species;
      p.innerHTML = (function() {
     
//   ramdon method from dinoclass method with static
        const ramdomFunc = DinoClass.getRandom(0, 7);

        // console.log(ramdomFunc);

        // i am using switch to make the comparing and return the correct answers
        // console.log(obj.userDiet(human.diet));
        switch (ramdomFunc) {
          case 1:
            return obj.userHeight(human.height);
            break;
          case 2:
            return obj.userWeight(human.weight);
            break;
          case 3:
            return obj.userDiet(human.diet);
            break;
          case 4:
            return `The ${obj.species} where here ${obj.where}.`;
            break;
          case 5:
            return `The ${obj.species} found in ${obj.when}.`;
            break;
          default:
            return obj.fact;
        }
      })();
    }

    // here i am appending the species, image and fact in the DOM and displaying
    divTiles.appendChild(h3);
    divTiles.appendChild(image);
    divTiles.appendChild(p);
    return fragment.appendChild(divTiles);
  });
  const grid = document.getElementById("grid");

  mixDinoHumanObj.forEach((display) => grid.appendChild(display));

// callin clear method to clear the from
DinoClass.clearing();
}
// click method to from Dinosclass as static to call direct from Dinoclass
DinoClass.click();