var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'immagini/IMG_1681%202%20copia.jpg') {
      myImage.setAttribute ('src','immagini/IMG-20180330-WA0001 copia.jpg');
    } else {
      myImage.setAttribute ('src','immagini/IMG_1681%202%20copia.jpg');
    }
}
// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Inserisci il tuo nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Travelling is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Travelling is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}