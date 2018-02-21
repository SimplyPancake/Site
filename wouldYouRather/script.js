// ------------------------------------------------------------------------------------------
var genres;
// genre 1 = "Rather be advantage with disadvantage or rather be disadvantage with advantage";
// genre 2 = "corresponderende vragen"
var voordeelArray;
var voordeel = [];
var aantalVoordeel = 7;
voordeel[1] = "have anything transform to gold when you want"
voordeel[2] = "be able to do anything you want"
voordeel[3] = "know all the things of the world"
voordeel[4] = "be able to decide the fate of life and death of anyone"
voordeel[5] = "be able to see into your own future"
voordeel[6] = "be able to talk to animals"
voordeel[7] = "eat what you want and not get fat"

var nadeelArray;
var nadeel = [];
var aantalNadeel = 8;
nadeel[1] = "never live in a house ever again"
nadeel[2] = "die at the age of 30"
nadeel[3] = "never be able to share secrets with anyone"
nadeel[4] = "lose the person you care about most"
nadeel[5] = "be responsible for the death of a child"
nadeel[6] = "never watch a TV show or movie ever again"
nadeel[7] = "go to jail for something you didnt do"
nadeel[8] = "always be 20 minutes late"
//------------------------------------------------------------------
var cVragen = [];
var cVragenAntwoord = [];
var cVragenArray;
var cVragenAantal = 11;
cVragen[1] = "Have to kill the animal for every meat you eat"
cVragenAntwoord[1] = "Never eat meat again"
cVragen[2] = "Tea"
cVragenAntwoord[2] = "Coffee"
cVragen[3] = "Control the elements"
cVragenAntwoord[3] = "Control time"
cVragen[4] = "Eat a pinecone"
cVragenAntwoord[4] = "Eat an acorn"
cVragen[5] = "Buy a PS4"
cVragenAntwoord[5] = "Buy an XBOX(don't)"
cVragen[6] = "Be stoned to death"
cVragenAntwoord[6] = "Be grounded to death"
cVragen[7] = "Inform a room of first grade students that their favorite pets have died tragically"
cVragenAntwoord[7] = "Explain to a room of first grade students how sex works in graphic detail"
cVragen[8] = "Constantly be smelling poop that nobody else can smell"
cVragenAntwoord[8] = "Smell like poop and not know it"
cVragen[9] = "Have everyone else in the world sound like Gilbert Gottfried"
cVragenAntwoord[9] = "Eat only roadkill for the rest of my life"
cVragen[10] = "Have taste buds on my butthole"
cVragenAntwoord[10] = "Poop through my mouth"
cVragen[11] = "Always have to say everything on my mind"
cVragenAntwoord[11] = "Never be able to speak again"

//------------------------------------------------------------------------------------------------------------
var clicksBlue = 0;
var clicksRed = 0;

console.log("You can ignore the errors above!")

function cycleQuestions() {
  console.clear();
  console.log("Rode cliks: " + clicksRed);
  console.log("Blauwe clicks: " + clicksBlue);
  console.log("Totale clicks: " + (clicksRed + clicksBlue));

  genres = Math.floor((Math.random() * 2) + 1);
  //randomize een nummer van 1 tot en met 3 tot het variabel genresArray
  if (genres == 1) {
    //Als genresArray hetzelfde is als 2, doe dit script
    voordeelArray = Math.floor((Math.random() * aantalVoordeel) + 1);
    nadeelArray = Math.floor((Math.random() * aantalNadeel) + 1);
    document.getElementById("redTekst").innerHTML = "Rather " + voordeel[voordeelArray] + ", but " + nadeel[nadeelArray];
    voordeelArray = Math.floor((Math.random() * aantalVoordeel) + 1);
    nadeelArray = Math.floor((Math.random() * aantalNadeel) + 1);
    document.getElementById("blueTekst").innerHTML = "Rather " + voordeel[voordeelArray] + ", but " + nadeel[nadeelArray];
  }

  if (genres == 2) {
    //Dit is de modus van exact corresponderende vragen
    cVragenArray = Math.floor((Math.random() * cVragenAantal) + 1);
    //Als de vraag not niet is gesteld, stel dan een vraag
    document.getElementById("redTekst").innerHTML = cVragen[cVragenArray]
    document.getElementById("blueTekst").innerHTML = cVragenAntwoord[cVragenArray]
  }

  if ((clicksRed + clicksBlue > 0)){
    document.getElementById("rectWhite").style = "display: block; visibility: visible;";
  } else {
    document.getElementById("rectWhite").style = "display: none; visibility: hidden;";
  }
}

//----------------------------------------------------------------------------------------------------
// Load google charts

function redClick() {
  clicksRed = clicksRed + 1;
}

function blueClick() {
  clicksBlue = clicksBlue + 1;
}

google.charts.load('current', {
  'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['totaal', 'totalClicks'],
    ['Blue clicks', clicksBlue],
    ['Red clicks', clicksRed],
  ]);

  var availHeight = screen.availHeight;
  var availWidth = screen.availWidth;

  // Optional; add a title and set the width and height of the chart
  var options = {
    // 'title': 'Colours clicked',
    'width': availWidth,
    'height': availHeight
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
