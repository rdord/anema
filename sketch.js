var nameData, animalData, stonesData;

function randomJSONValue(data, val) {
  var rand = floor(random(0, data[val].length - 1));

  return data[val][rand];
}

function preload() {
  nameData = loadJSON('data.json'); 
  animalData = loadJSON('animals.json'); 
  stonesData = loadJSON('decorative-stones.json');  
}

function setup() {
  noCanvas();
  var name = randomJSONValue(nameData, 'names').toUpperCase();
  var nameLength = name.length;
  var nameDiv = createDiv('');
  nameDiv.addClass('back');
  // style .back
  var nameHTML = createP(name); 
  nameHTML.parent(nameDiv);
  nameHTML.addClass('main');
  // style .main

  var stone = randomJSONValue(stonesData, 'decorative stones');
  println(stone);
  // get stone pattern img from an API
  // apply as bg img to the .back

  var animals = [];

  for (var i=0; i<nameLength; i++) {
    var animal = randomJSONValue(animalData, 'animals');
    animals.push(animal);   
    println(animal); 
    // get animal img or silluete from an API
  }
  // fill every letter of the 'name' with an animal bg img

}