var nameData, stonesData, stoneImg;

function fetchImg(url) {
  // body...
}

function randomJSONValue(data, val) {
  var rand = floor(random(0, data[val].length - 1));

  return data[val][rand];
}

function preload() {
  var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDk8gwNe0f5Ue7uls-ir8U1Mj7UAjJvMeo&cx=011671385966262302368:8judhukhxa0&q=granite+texture&searchType=image&alt=json&num=1';

  nameData = loadJSON('data.json'); 
  animalData = loadJSON('animals.json'); 
  stonesData = loadJSON('decorative-stones.json');
  stoneImg = loadJSON(url);
  
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
  $('.main').lettering();

  var stone = randomJSONValue(stonesData, 'decorative stones');
  println(stone);
  console.log(stoneImg.items[0].link);

  var chars = document.querySelectorAll('.main > span');
  var main = document.querySelectorAll('.main');

  // chars.forEach((char) => char.style.backgroundImage = `url(images/${stone}.JPG)`);
  for(var i=0; i<chars.length; i++){
    // add img url from the api
    chars[i].style.backgroundImage = 'url(../images/granite.JPG)';
  }

  // svg fallback polyfill
  main[0].backgroundClipPolyfill({
    'patternID' : 'mypattern',
    // add img url from the api
    'patternURL' : '../images/granite.JPG',
    'class' : 'main'
  }); 

}

