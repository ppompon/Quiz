const package = [
    {
        question: "Qual o país com a maior extensão territorial?" ,
        options: ["Rússia", "Brasil", "Canadá", "África"],
        correct: "Rússia",
    },
    {
        question: "Qual o país mais populoso do mundo?" ,
        options: ["China", "Índia", "Estados Unidos", "Japão"],
        correct: "China",
    },
    {
        question: "Qual é o país que tem a maior biodiversidade?" ,
        options: ["Brasil", "Colômbia", "Austrália", "México"],
        correct: "Brasil",
    },
    {
        question: "A vida aquática é maior em qual destes países?" ,
        options: ["Austrália", "Indonésia", "Estados Unidos", "Portugal"],
        correct: "Austrália",
    },
    {
        question: "Qual país tem a maior altitude média?" ,
        options: ["Nepal", "Chile", "Peru", "Equador"],
        correct: "Nepal",
    },
    {
        question: "Em altura, qual o país mais baixo do mundo?" ,
        options: ["Maldivas", "Tuvalu", "Bangladesh", "Kiribati"],
        correct: "Maldivas",
    }
]

let questionText = document.querySelector("#question");
let score = document.querySelector("#score");
let error = document.querySelector("#wrong");
let next = document.querySelector("#next");
let options = document.querySelectorAll(".option");

let currentIndex = 0;

questionText.textContent = package[currentIndex].question;

for (let currentIndex = 0; currentIndex < options.length; currentIndex++) {
    options[currentIndex].textContent = package[currentIndex].options[currentIndex];
    }
function testa(){
    alert("test");
}
next.addEventListener("click", testa);