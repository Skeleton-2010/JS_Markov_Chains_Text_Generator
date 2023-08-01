let counterText = document.querySelector(".txtCounter");
let wordRange = document.querySelector(".inpWordRange");
let btnStartGen = document.querySelector(".btnStartGen");

let txtInComp = document.querySelector(".inpTextBase");
let txtOutGen = document.querySelector(".outTextGen");

let startGen = new Audio("./Aud/Start.wav");
let newWord = new Audio("./Aud/NewWord.wav");
let endGen = new Audio("./Aud/End.wav");
let click = new Audio("./Aud/Click.wav");

let textInput;
let textLenght = 100;
let textArray = [];
let pickedWord = "";
let wordsAvailable = [];
let generatedText = "";

function generateText() {
  textArray = textInput.split(" ");
  wordsAvailable = textArray;
  generatedText = "";

  for (let i = 0; i < textLenght; i++) {
    pickedWord =
      wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
    if (pickedWord != undefined){
      generatedText += pickedWord + " ";
    }
    wordsAvailable = [];


    if (pickedWord != undefined){
      for (let word = 0; word < textArray.length - 1; word++) {
        if (textArray[word] == pickedWord) {
          wordsAvailable[wordsAvailable.length] = textArray[word + 1];
        }
      }
    } else {
      wordsAvailable = textArray;
    }
    
  }
  return generatedText;
  
}

wordRange.addEventListener("input", () => {
  counterText.textContent = wordRange.value;
  textLenght = wordRange.value;
  click.play();
});

btnStartGen.addEventListener("click", () => {
  startGen.play();
  textInput = String(txtInComp.value);
  txtOutGen.textContent = generateText();
});
