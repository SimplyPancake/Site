var text = "gone"
document.getElementById('neushoornPlaatje').style = " display: none;"
document.getElementById('welkomTekst').style = "display: none;"

setTimeout(function() {
  document.getElementById('neushoornPlaatje').style = "display: block;"
  document.getElementById('ldBarId').style = " display: none;"
  document.getElementById('welkomTekst').style = " display: block;"
  text = "here"
}, 1400);//1100 is het beste, maar 1400 maakt er iets menselijks van!

setTimeout(function() {
  text = "doneRead";
}, 1400 + 2300);//De vorige tijd + de tijd die je wilt zetten hoe lang het duurt om de tekst te lezen

function putAwayText(){
  if (text == "doneRead") {
  document.getElementById('welkomTekst').style = "display: none;"
  }
}
