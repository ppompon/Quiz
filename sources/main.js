//--------------------------------------QUIZ-DATA--------------------------------------//
const data = [
    {
        question: "Qual o país com a maior extensão territorial?" ,
        choices: ["Rússia", "Brasil", "Canadá", "África"],
        correct: "Rússia",
    },
    {
        question: "Qual o país mais populoso do mundo?" ,
        choices: ["China", "Índia", "Estados Unidos", "Japão"],
        correct: "China",
    },
    {
        question: "Qual é o país que tem a maior biodiversidade?" ,
        choices: ["Brasil", "Colômbia", "Austrália", "México"],
        correct: "Brasil",
    },
    {
        question: "A vida aquática é maior em qual destes países?" ,
        choices: ["Austrália", "Indonésia", "Estados Unidos", "Portugal"],
        correct: "Austrália",
    },
    {
        question: "Qual país tem a maior altitude média?" ,
        choices: ["Nepal", "Chile", "Peru", "Equador"],
        correct: "Nepal",
    },
    {
        question: "Em altura, qual o país mais baixo do mundo?" ,
        choices: ["Maldivas", "Tuvalu", "Bangladesh", "Kiribati"],
        correct: "Maldivas",
    }
]
//--------------------------------------SELECTOR--------------------------------------//
let questionText = document.querySelector("#question");
let scoreId = document.querySelector("#score");
let errorId = document.querySelector("#wrong");
let next = document.querySelector("#next");
let observation = document.querySelector("#observation");
let options = document.querySelectorAll(".option");
let area = document.querySelector(".optionsArea");
//--------------------------------------GLOBAL VARIABLES--------------------------------------//
let currentIndex = -1;
let score = 0;
let errors = 0;
let selected = false;
//--------------------------------------FUNCTIONS--------------------------------------//
function loadData(){
    selected = false;
    
    currentIndex++;
    const package = data[currentIndex];
    observation.textContent = "";
    questionText.textContent = package.question;
    
    shuffleChoices(data[currentIndex].choices);

    for(let i = 0; i < options.length; i++) {
        options[i].textContent = package.choices[i];
    }
}
function verifyAnswer(e){
    const package = data[currentIndex];
    let answer = e.target.innerText;
    
    
    if(selected) {
        observation.textContent = "Go to the next question!";
        return;
    }

    if (answer == package.correct) {
        score++;
        scoreId.textContent = "Score: " + score;
        observation.textContent = "You got it right! That's correct!";
    } else {
        errors++;
        errorId.textContent = "Errors: " + errors;
        observation.textContent = "Wrong! The correct answer is: " + package.correct;
        }
        selected = true;
}
function shuffleChoices(array){
    let index = array.length;
    let randomIndex;
    let temporaryValue;
    
    while (0 !== index) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        
        temporaryValue = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
function finish(){
    if (currentIndex == 5) {
        observation.textContent = "Congratulations!!";
        questionText.textContent = "You've finished the quiz!";
        area.remove();
        next.remove();
    } else {
        loadData();
    }
}
//--------------------------------------EVENTS--------------------------------------//
options.forEach((button) => button.addEventListener("click", verifyAnswer));
next.addEventListener("click", function(){
    if(!selected){
        observation.textContent = "Select an option first!";
    } else {
        selected = false;
        finish();
    }
});

loadData();