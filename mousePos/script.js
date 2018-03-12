// ----------------------------------------------------------------------------------------------------------------
const coords = [
  [92, 81],
  [81, 47],
  [81, 03]
];
var touchX = 50,
  touchY = 50;
coords[[92, 81]] = "https://goo.gl/8cm9HU";
coords[[81, 47]] = "https://goo.gl/azAT2j";
coords[[81, 03]] = "https://goo.gl/htsTmk";

console.log("Please ignore the errors, HTML is being a retard again...");
// ----------------------------------------------------------------------------------------------------------------


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
