const questions =
    [
        {
            "question": "Who was the first President of the United States?",
            "answers": [
                
                { "text": "Thomas Jefferson", "correct": false },
                { "text": "Abraham Lincoln", "correct": false },
                { "text": "George Washington", "correct": true },
                { "text": "John Adams", "correct": false }
            ]
        },
        {
            "question": "Which ancient civilization built the Great Pyramid of Giza?",
            "answers": [
                { "text": "Ancient Egyptians", "correct": true },
                { "text": "Ancient Greeks", "correct": false },
                { "text": "Ancient Romans", "correct": false },
                { "text": "Mesopotamians", "correct": false }
            ]
        },
        {
            "question": "Who was the first female Prime Minister of the United Kingdom?",
            "answers": [
                
                { "text": "Theresa May", "correct": false },
                { "text": "Margaret Thatcher", "correct": true },
                { "text": "Queen Elizabeth I", "correct": false },
                { "text": "Angela Merkel", "correct": false }
            ]
        },
        {
            "question": "What event marked the beginning of World War I?",
            "answers": [
                
                { "text": "Signing of the Treaty of Versailles", "correct": false },
                { "text": "Invasion of Poland", "correct": false },
                { "text": "Bombing of Pearl Harbor", "correct": false },
                { "text": "Assassination of Archduke Franz Ferdinand", "correct": true }
            ]
        },
        {
            "question": "Who painted the Mona Lisa?",
            "answers": [
                
                { "text": "Michelangelo", "correct": false },
                { "text": "Vincent van Gogh", "correct": false },
                { "text": "Leonardo da Vinci", "correct": true },
                { "text": "Pablo Picasso", "correct": false }
            ]
        },
        {
            "question": "Which ancient civilization is known for developing the first system of writing?",
            "answers": [
                { "text": "Sumerians", "correct": true },
                { "text": "Ancient Egyptians", "correct": false },
                { "text": "Ancient Greeks", "correct": false },
                { "text": "Romans", "correct": false }
            ]
        },
        {
            "question": "Who was the leader of the Soviet Union during much of the Cold War?",
            "answers": [
                
                { "text": "Vladimir Putin", "correct": false },
                { "text": "Joseph Stalin", "correct": true },
                { "text": "Mikhail Gorbachev", "correct": false },
                { "text": "Leonid Brezhnev", "correct": false }
            ]
        },
        {
            "question": "Which city was the capital of the Byzantine Empire?",
            "answers": [
                
                { "text": "Rome", "correct": false },
                { "text": "Athens", "correct": false },
                { "text": "Alexandria", "correct": false },
                { "text": "Constantinople", "correct": true },
            ]
        },
        {
            "question": "Who wrote the Declaration of Independence for the United States?",
            "answers": [
                
                { "text": "George Washington", "correct": false },
                { "text": "Thomas Jefferson", "correct": true },
                { "text": "Benjamin Franklin", "correct": false },
                { "text": "John Adams", "correct": false }
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