const questions =[
    {
        "question": "What is the chemical symbol for water?",
        "answers": [
            {"text": "H2O", "correct": true},
            {"text": "CO2", "correct": false},
            {"text": "NaCl", "correct": false},
            {"text": "O2", "correct": false}
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [

            {"text": "Venus", "correct": false},
            {"text": "Jupiter", "correct": false},
            {"text": "Mars", "correct": true},
            {"text": "Saturn", "correct": false}
        ]
    },
    {
        "question": "What is the smallest bone in the human body?",
        "answers": [
            {"text": "Stapes", "correct": true},
            {"text": "Tibia", "correct": false},
            {"text": "Femur", "correct": false},
            {"text": "Radius", "correct": false}
        ]
    },
    {
        "question": "What is the chemical symbol for gold?",
        "answers": [

            {"text": "Ag", "correct": false},
            {"text": "Au", "correct": true},
            {"text": "Fe", "correct": false},
            {"text": "Pt", "correct": false}
        ]
    },
    {
        "question": "Which of the following is not a greenhouse gas?",
        "answers": [
            {"text": "Nitrous oxide", "correct": false},
            {"text": "Methane", "correct": false},
            {"text": "Oxygen", "correct": true},
            {"text": "Carbon dioxide", "correct": false}
        ]
    },
    {
        "question": "What is the process by which plants make their food called?",
        "answers": [

            {"text": "Respiration", "correct": false},
            {"text": "Fermentation", "correct": false},
            {"text": "Photosynthesis", "correct": true},
            {"text": "Decomposition", "correct": false}
        ]
    },
    {
        "question": "What is the unit of measurement for electrical resistance?",
        "answers": [
            {"text": "Watt", "correct": false},
            {"text": "Volt", "correct": false},
            {"text": "Ampere", "correct": false},
            {"text": "Ohm", "correct": true},
        ]
    },
    {
        "question": "What is the chemical formula for table salt?",
        "answers": [
            {"text": "NaCl", "correct": true},
            {"text": "HCl", "correct": false},
            {"text": "NaOH", "correct": false},
            {"text": "NH3", "correct": false}
        ]
    },
    {
        "question": "What is the Earth's primary source of energy?",
        "answers": [
            {"text": "Geothermal energy", "correct": false},
            {"text": "Sun", "correct": true},
            {"text": "Nuclear energy", "correct": false},
            {"text": "Fossil fuels", "correct": false}
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