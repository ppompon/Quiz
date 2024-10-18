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

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

// loadData ✓
    // Save data to var
    // Show question according to index
    // Show choices according to index
// verifyAnswer
// selectedChoice
// nextData
// resetQuiz



let questionText = document.querySelector("#question");
let score = document.querySelector("#score");
let error = document.querySelector("#wrong");
let next = document.querySelector("#next");
let options = document.querySelectorAll(".option");

let currentIndex = 0;

function loadData(){
    const package = data[currentIndex];
    questionText.textContent = package.question;
    
    for(let i = 0; i < options.length; i++) {
        options[i].textContent = package.choices[i];
    }
}

function verifyAnswer(e){
    console.log(e.target.innerText);
}

options.forEach((button) => button.addEventListener("click", verifyAnswer));

loadData();