const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timeLeftElement = document.getElementById('time-left')
const scoreContainerElement = document.getElementById('score-container')
const score = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex
// let timeLeft = 75
// let timerElement = setInterval(timeLeft,-1000)

// localStorage.setItem('score', timeLeft);


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1)
    nextButton.classList.remove('hide')
    else {
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
        // scoreContainerElement.remove('hide')
        // localStorage.getItem('score')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// var timer = setInterval(function() {
//     if (timeLeftElement > 1 {
//         timerEl.textContent = "Timer " + timeLeftElement;
//         timeLeftElement--;
//     }
//     else if (answerChoice = wrong){
//         timeLeftElement -15;
//     }
// })

// function getScore() {
//     scoreContainerElement.remove('hide')
//     score.textContent = "Your score is" + timeLeft;
// }

const questions = [
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false}
        ]
    },
    {
        question: 'Commonly used data types do not include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true}
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed with _______.',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: true},
            {text: 'parenthesis', correct: false},
            {text: 'square brackets', correct: false}
        ]
    },
]