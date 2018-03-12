const coords = [
  [92, 81],
  [81, 47],
  [81, 03]
];
var touchX = 50,
  touchY = 50,
  placementX, placementY;
coords[[92, 81]] = "https://goo.gl/8cm9HU";
coords[[81, 47]] = "https://goo.gl/azAT2j";
coords[[81, 03]] = "https://goo.gl/htsTmk";

console.log("Please ignore the errors, HTML is being a retard again...");
// ----------------------------------------------------------------------------------------------------------------
var text = "gone";
document.getElementById('neushoornPlaatje').style = " display: none;"
document.getElementById('welkomTekst').style = "display: none;"

setTimeout(function() {
  document.getElementById('neushoornPlaatje').style = "display: block;"
  document.getElementById('ldBarId').style = " display: none;"
  document.getElementById('welkomTekst').style = " display: block;"
  text = "here"
}, 1400); //1100 is het beste, maar 1400 maakt er iets menselijks van!

setTimeout(function() {
  text = "doneRead";
}, 1400 + 2900); //De vorige tijd + de tijd die je wilt zetten hoe lang het duurt om de tekst te lezen

function putAwayText() {
  if (text == "doneRead") {
    document.getElementById('welkomTekst').style = "display: none;"
    var timeout;
    document.onmousemove = function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        changePic();
      }, 2000);
    }
  }
}
// ----------------------------------------------------------------------------------------------------------------
function logCoords() {
  var cX = event.clientX;
  var cY = event.clientY;
  //Krijg variabelen als 'clientsizeX' en 'clientsizeY'
  //Zie: https://i.stack.imgur.com/6xPdH.png    We gaan 'windowWidth' gebruiken
  var wWidth = window.innerWidth;
  var wHeight = window.innerHeight;
  //Nu krijg ik ook de windowWidth en Height. Hier wordt de app op gebaseerd.
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords3 = "window size: - X: " + wWidth + ", Y: " + wHeight;
  var percentX = Math.round(cX / wWidth * 100);
  var percentY = Math.round(cY / wHeight * 100);
  //Het percentage is de relatie tussen de X  en Y coords van het browser-window en de size van het browser-window

  console.clear();
  console.log(coords1);
  console.log(coords3);
  console.log("X: " + percentX + " Y: " + percentY);
  touchX = percentX;
  touchY = percentY;
}
// ----------------------------------------------------------------------------------------------------------------
function changePic() {
  let closest = [null, null];
  let distance = 142; //Square root of 100^2 + 100^2

  for (const [x, y] of coords) {
    let d = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);
    // let d = Math.sqrt((Math.sqrt(touchX - x), 2) + Math.sqrt((touchY - y), 2));
    if (d < distance) {
      closest = [x, y];
      distance = d;
    }
  }
  console.log(closest);
  console.log(coords[closest]);
  document.getElementById("neushoornPlaatje").src = coords[closest]
}