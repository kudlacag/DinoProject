// here i am importing DinosData
import Data from './dinos.js';

import { name, heightf, heighti, weight, diet } from './userData.js';
// createElements


// here i am assigning a new variable fro dinosdata
const Dinosaurs = Data.Dinos;


    // Create Dino Constructor
class DinoClass {
    constructor(species, weight, height, diet, where, when, fact, image){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = `images/${this.species.toLowerCase()}.png`;

    }

 useDiet(userDiet) {
        if (userDiet === this.diet) {
            return `${this.species}'s ${this.diet}is the same as your diet`;
        } else if (this.diet === 'carnivor') {
            return `${this.species} has ${this.diet}is different then yours`;
        } else if (this.diet === 'herbavor') {
            return `${this.species} has ${this.diet} is not like yours`;
        } else {
            return `${this.species} has ${this.diet} it is not what sou use to eat`;
        }
    };

   userWeight(userWeight){
        let compare = Math.floor(Number(this.weight) - userWeight);
        if(compare > 0){
            return `${this.species} is ${compare} then you`;
        }else {
            return `${this.species}'s ${this.weight} is less then yours `;

        }
        };

  userHeight(userHeight) {
  
   
            let compare = Math.floor(this.height - userHeight);
        
            if(compare > 0){
                `${this.species}is ${compare} longer then you`
            }else {
                `${this.species}'s ${this.height} is shorter  than you`;
            }
        };

}


function atherFunc(){




        // Create user Object
let human = new DinoClass('human', null, null, null, null, null, 'to be human is great');

// creating dino Object
const dinosaurObj = Dinosaurs.map(dinosaur =>
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



    // Use IIFE to get human data from form

    
     


    (function humanData(){

        (function validationFunc(){
    
            if(name.value === ""){
                name.classList.add('error');
                alert('add name please');

            } if(heightf.value === ""){
    
              heightf.classList.add('error')
           
            
              alert('add feet');
          } if(heighti.value === ""){
              heighti.classList.add('error');
    
              alert('add inches')
          } if(weight.value === ""){
            alert('add weight')
              weight.classList.add('error')
             
              alert('add ')
          } 
        })();
                let height = Math.floor((Number(heightf.value) + Number((heighti.value)))/12);

                console.log(name.value, height, weight.value, diet.value)
                human.name = name.value;
                human.height = height;
                human.weight = Number(weight.value);
                human.diet = diet.value.toLowerCase();



        })();
            dinosaurObj.splice(4,0,human);

            const tiles = dinosaurObj.map(obj =>{
                
const divTiles = document.createElement('div');
divTiles.classList.add('grid-item');
let image = document.createElement('img');
let p = document.createElement('p');
let h3 = document.createElement('h3');
let  fragment = document.createDocumentFragment();

image.src = obj.image;
  if(obj.species === 'human'){

    const {name, fact } = human;
      h3.innerHTML = name;
      p.innerHTML = fact;
  }
  else if(obj.species === 'Pigeon'){
   p.innerHTML = obj.species;
   p.innerHTML = obj.fact;
  } else{

 h3.innerHTML = obj.species;
 p.innerHTML = (_=> {

 function ramdomFunc(){
      
    return 1 + Math.floor(Math.random() * Math.floor(8));
       }


// console.log(obj.useDiet(human.diet))
const {userHeight, userWeight, userDiet, species, fact, where, when}=obj;
    switch(ramdomFunc){
       
        case 1:
           return userHeight(human.height);
            break;
        case 2:
           return userWeight(human.weight);
            break;
        case 3:
           return userDiet(human.diet);
            break;
        case 4:
           return `The ${species} where here ${where}.`;
            break;
        case 5:
           return `The ${species} found in ${when}.`;
            break;
        default:
           return fact;
            break;
    }
 

 })();


  }



  divTiles.appendChild(h3);
  divTiles.appendChild(image);
  divTiles.appendChild(p);
  return fragment.appendChild(divTiles);


            });
const grid = document.getElementById('grid');
tiles.forEach(tile=>grid.appendChild(tile));
 document.getElementById('dino-compare').innerHTML = '';

//   console.log('tiles', tiles)


}





document.getElementById('btn').addEventListener('click', atherFunc);





























// console.log(humanObject);




    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.



    // ramdomise dinosaurs results

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.



    // Generate Tiles for each Dino in Array

        // Add tiles to DOM
    // Remove form from screen


// On button click, prepare and display infographic
