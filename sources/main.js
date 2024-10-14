const questions = [
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

let score = document.querySelector("#score");
let error = document.querySelector("#wrong");
let question = document.querySelector("#question");