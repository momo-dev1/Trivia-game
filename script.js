// Select Elements

let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

// Set Options

let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;


async function getQuestions() {
    const res = await fetch("./questions.json")
    const data = await res.json()
    const questionsCount = data.length

    createBullets(questionsCount)
    addQuestionsData(data[currentIndex], questionsCount)
}

getQuestions()


function createBullets(num) {
    countSpan.innerHTML = num

    for (let i = 0; i < num; i++) {
        let bullets = document.createElement("span")
        if (i === 0) {
            bullets.className = "active"
        }
        bulletsSpanContainer.appendChild(bullets)
    }

}

function addQuestionsData(obj, count) {

    let questionTitle = `<h2>${ obj["title"] }</h2>`

    quizArea.innerHTML = questionTitle


    for (let i = 1; i <= 4; i++) {
        let answerDiv = document.createElement("div")
        answerDiv.className = "answer"

        let radioInput = document.createElement("input")

        radioInput.id = `answer_${ i }`
        radioInput.className = "question"
        radioInput.type = "radio"
        radioInput.dataset.answer = `${ obj[`answer_${ i }`] }`

        let label = document.createElement("label")
        let labelText = document.createTextNode(obj[`answer_${ i }`])
        label.htmlFor = `answer_${ i }`
        label.appendChild(labelText)

        answerDiv.appendChild(radioInput)
        answerDiv.appendChild(label)

        answersArea.appendChild(answerDiv)

    }

}
