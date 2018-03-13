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
  if (choice == botChoiceKind) {
    document.getElementById("response").innerHTML = "It's a tie! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //tie scenario
  } else if (choice == 1 && botChoiceKind == 3) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario
  } else if (choice == 2 && botChoiceKind == 1) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario
  } else if (choice == 3 && botChoiceKind == 2) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //win scenario
  } else if (choice == 1 && botChoiceKind == 2) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario
  } else if (choice == 2 && botChoiceKind == 3) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario
  } else if (choice == 3 && botChoiceKind == 1) {
    document.getElementById("response").innerHTML = "You win! You chose " + choiceKind[choice] + ", but the bot chose " + choiceKind[botChoiceKind];
    //lose scenario
  }
}
