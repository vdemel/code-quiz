// select elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const score = document.getElementById("score");

// create questions

let questions = [
    {
        question : "Insert first question here",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "Insert second question here",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "Insert third question here",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "Insert fourth question here",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// ask a question

function askQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML - q.choiceD;

}

start.style.display = "none";
askQuestion();
quiz.style.display = "block";

start.addEventListener("click",startQuiz);

// start quiz

function startQuiz() {
    start.style.display = "none";
    askQuestion();
    quiz.style.display = "block";
    timer = setInterval(showCounter,-1000);
}

// timer


function showCounter() {
    timer --;
}

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score ++;
    }
    else(timer--);
}