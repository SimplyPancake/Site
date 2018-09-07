document.getElementById('plaatjeTie').style = "display: none;"
document.getElementById('btn').style = "display: none;"
var choice;
var botChoiceKind;
var choiceKind = [1,2,3];
choiceKind[1] = "Rock";
choiceKind[2] = "Paper";
choiceKind[3] = "Scissors";

function choose1() {
  choice = 1;
  console.log(choice);
  botChoose()
  compare();
}

function choose2() {
  choice = 2;
  console.log(choice);
  botChoose()
  compare();
}

function choose3() {
  choice = 3;
  console.log(choice);
  botChoose()
  compare();
}

function botChoose() {
  botChoiceKind = Math.floor((Math.random() * 3) + 1);
  console.log(botChoiceKind);
}

function compare() {
  // document.getElementById('plaatjeRock').style = "display: none;"
  // document.getElementById('plaatjePaper').style = "display: none;"
  // document.getElementById('plaatjeScissors').style = "display: none;"

  // var s = document.getElementById('plaatjeRock').style;
  // s.opacity = 1;
  // (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();


  if (choice == botChoiceKind) {
    document.getElementById("response").innerHTML = "It's a tie! You and the bot both chose  " + choiceKind[choice];
    //tie scenario, You choose the same
  } else if (choice == 1 && botChoiceKind == 3) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario, you choose Rock, but bot chooses scissors
    var s = document.getElementById('plaatjePaper').style;
  } else if (choice == 2 && botChoiceKind == 1) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario, you choose paper, but bot chose rock
    var s = document.getElementById('plaatjeScissors').style;
  } else if (choice == 3 && botChoiceKind == 2) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario, you choose scissors, but bot chose paper
    var s = document.getElementById('plaatjeRock').style;
  } else if (choice == 1 && botChoiceKind == 2) {
    document.getElementById("response").innerHTML = "You lose! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario, you chose rock but bot chose paper
    var s = document.getElementById('plaatjeScissors').style;
  } else if (choice == 2 && botChoiceKind == 3) {
    document.getElementById("response").innerHTML = "You lose! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario, you chose paper, but bot chose scissors
    var s = document.getElementById('plaatjeRock').style;
  } else if (choice == 3 && botChoiceKind == 1) {
    document.getElementById("response").innerHTML = "You lose! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario, you chose scissors, but bot chose rock
    var s = document.getElementById('plaatjePaper').style;
  }

  if (s !== document.getElementById('plaatjePaper').style && s !== document.getElementById('plaatjeScissors').style && s !== document.getElementById('plaatjeRock').style) {
    // document.getElementById('plaatjeTie').style = "display: block;"
    document.getElementById('plaatjeTie').style = "display: block;"
  } else {
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
  }
  document.getElementById('btn').style = "display: block;"
  document.getElementById('plaatjePaper').onclick = "";
  document.getElementById('plaatjeRock').onclick = "";
  document.getElementById('plaatjeScissors').onclick = "";
}
