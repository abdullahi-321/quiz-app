const questions = [
    {
        question: "Which is largest animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world",
        answers: [
            { text: "Khalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
{
        "question": "Which is the longest river in the world?",
        "answers": [
            { "text": "Amazon River", "correct": false },
            { "text": "Nile River", "correct": true },
            { "text": "Yangtze River", "correct": false },
            { "text": "Mississippi River", "correct": false }
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            { "text": "Venus", "correct": false },
            { "text": "Mars", "correct": true },
            { "text": "Jupiter", "correct": false },
            { "text": "Saturn", "correct": false }
        ]
    },
    {
        "question": "What is the chemical symbol for water?",
        "answers": [
            { "text": "Wo", "correct": false },
            { "text": "H2O", "correct": true },
            { "text": "O2", "correct": false },
            { "text": "H2", "correct": false }
        ]
    },
    {
        "question": "Which element is the lightest?",
        "answers": [
            { "text": "Hydrogen", "correct": true },
            { "text": "Helium", "correct": false },
            { "text": "Oxygen", "correct": false },
            { "text": "Nitrogen", "correct": false }
        ]
    },
    {
        "question": "Who wrote the play \"Romeo and Juliet\"?",
        "answers": [
            { "text": "William Shakespeare", "correct": true },
            { "text": "Charles Dickens", "correct": false },
            { "text": "Jane Austen", "correct": false },
            { "text": "Mark Twain", "correct": false }
        ]
    }
]

const questionEl = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-btns");
const buttons = document.querySelectorAll(".btn");
const nextBtn = document.querySelector("#next-btn");
let currentQuestionIndex = 0;
let score = 0;

startQuiz()



function showQuestion() {
    answerBtns.innerHTML = ``
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        let text = document.createElement("button");
        text.classList.add("btn");
        text.innerHTML = answer.text;
        answerBtns.appendChild(text)
        answer.correct ? text.classList.add("correctAns") : text.classList.add("wrongAns")
    })
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.onclick = () => btns.forEach(btn => btn.disabled = true)
    })
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            nextBtn.style.display = "block";
            
            if (btn.classList.contains("wrongAns")) {

                btn.classList.add("wrong")
            } else {
                btn.classList.add("correct");
                score++
                scoreText.innerHTML = `You got ${score} out of ${questions.length} questions right`
            }
            btns.forEach(btn => {
                btn.classList.contains("correctAns") ? btn.classList.add("correct") : "";
            })
        
        })
    })
}

nextBtn.onclick = () => {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            nextBtn.style.display = "none"
        } else {
            resetState()
            questionEl.innerHTML = `You scored ${score} out of ${questions.length}`
            nextBtn.innerHTML = "Play Again";
            nextBtn.style.display = "block"
        }
    } else {
        startQuiz();
    }
}

function resetState() {
    nextBtn.style.display = 'none'
    answerBtns.innerHTML = ``;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = `Next`;
    nextBtn.style.display = "none";
    showQuestion()
}