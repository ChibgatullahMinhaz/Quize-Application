// const quizData = [
//     {
//         question: "What does HTML stand for?",
//         a: "Hyper Text Markup Language",
//         b: "Hyperlinks and Text Markup Language",
//         c: "High Text Markup Language",
//         d: "None of the above",
//         correct: "a",
//     },
//     {
//         question: "Which HTML element is used to define the title of a document?",
//         a: "<header>",
//         b: "<title>",
//         c: "<head>",
//         d: "<meta>",
//         correct: "b",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Creative Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Computer Style Sheets",
//         d: "Colorful Style Sheets",
//         correct: "b",
//     },
//     {
//         question: "Which property is used to change the font of an element in CSS?",
//         a: "font-weight",
//         b: "font-family",
//         c: "font-style",
//         d: "text-font",
//         correct: "b",
//     },
//     {
//         question: "How do you select an element with id 'demo' in CSS?",
//         a: "#demo",
//         b: ".demo",
//         c: "demo",
//         d: "demo()",
//         correct: "a",
//     },
//     {
//         question: "Which HTML attribute is used to define inline styles?",
//         a: "style",
//         b: "class",
//         c: "font",
//         d: "styles",
//         correct: "a",
//     },
//     {
//         question: "What is the correct CSS syntax to change the text color of a paragraph?",
//         a: "p {color: text-color;}",
//         b: "p {text-color: #000;}",
//         c: "p {color: #000;}",
//         d: "p {color: 'black';}",
//         correct: "c",
//     },
//     {
//         question: "Which is the correct JavaScript syntax to change the content of the HTML element?",
//         a: "document.getElementByName('demo').innerHTML = 'Hello World!';",
//         b: "document.getElementById('demo').innerHTML = 'Hello World!';",
//         c: "document.getElementById('demo').innerText = 'Hello World!';",
//         d: "document.getElementById('demo').innerHTML = Hello World!;",
//         correct: "b",
//     },
//     {
//         question: "Which of the following is a JavaScript framework?",
//         a: "React",
//         b: "HTML",
//         c: "CSS",
//         d: "XML",
//         correct: "a",
//     },
//     {
//         question: "Which event occurs when the user clicks on an HTML element?",
//         a: "onclick",
//         b: "onchange",
//         c: "onmouseover",
//         d: "onmouseclick",
//         correct: "a",
//     },
//     {
//         question: "Which built-in method returns the length of the string?",
//         a: "length()",
//         b: "size()",
//         c: "getLength()",
//         d: "length",
//         correct: "d",
//     },
//     {
//         question: "Which HTML element is used to define an unordered list?",
//         a: "<ul>",
//         b: "<ol>",
//         c: "<li>",
//         d: "<list>",
//         correct: "a",
//     },
//     {
//         question: "What does the 'this' keyword refer to in JavaScript?",
//         a: "The current function",
//         b: "The global object",
//         c: "The current object",
//         d: "None of the above",
//         correct: "c",
//     },
//     {
//         question: "How can you add a comment in JavaScript?",
//         a: "// This is a comment",
//         b: "<!-- This is a comment -->",
//         c: "' This is a comment",
//         d: "# This is a comment",
//         correct: "a",
//     },
//     {
//         question: "Which of the following is not a JavaScript data type?",
//         a: "Undefined",
//         b: "Boolean",
//         c: "Number",
//         d: "Character",
//         correct: "d",
//     },
//     {
//         question: "What is the purpose of the 'alt' attribute in an <img> tag?",
//         a: "To specify the width of the image",
//         b: "To provide alternative text for the image",
//         c: "To link the image",
//         d: "To set the height of the image",
//         correct: "b",
//     },
//     {
//         question: "How do you create a function in JavaScript?",
//         a: "function = myFunction()",
//         b: "function myFunction()",
//         c: "function:myFunction()",
//         d: "myFunction() = function",
//         correct: "b",
//     },
//     {
//         question: "What is the result of 2 + '2' in JavaScript?",
//         a: "22",
//         b: "4",
//         c: "undefined",
//         d: "Error",
//         correct: "a",
//     },
//     {
//         question: "Which CSS property controls the text size?",
//         a: "text-style",
//         b: "font-size",
//         c: "text-size",
//         d: "font-style",
//         correct: "b",
//     },
//     {
//         question: "Which of the following is a valid way to declare a variable in JavaScript?",
//         a: "var myVar;",
//         b: "variable myVar;",
//         c: "v myVar;",
//         d: "myVar = var;",
//         correct: "a",
//     },
//     {
//         question: "What does the 'display' property in CSS do?",
//         a: "Specifies how an element is displayed on the page",
//         b: "Changes the font of an element",
//         c: "Sets the background color of an element",
//         d: "Defines the margin of an element",
//         correct: "a",
//     },
//     {
//         question: "What is the purpose of the z-index property in CSS?",
//         a: "To control the vertical stacking order of elements",
//         b: "To set the font size",
//         c: "To define the border thickness",
//         d: "To set the opacity of an element",
//         correct: "a",
//     },
//     {
//         question: "Which of the following is used to create a hyperlink in HTML?",
//         a: "<link>",
//         b: "<a>",
//         c: "<href>",
//         d: "<url>",
//         correct: "b",
//     },
//     {
//         question: "What is the correct way to include a JavaScript file in an HTML document?",
//         a: "<script src='file.js'>",
//         b: "<script href='file.js'>",
//         c: "<javascript src='file.js'>",
//         d: "<js src='file.js'>",
//         correct: "a",
//     },
//     {
//         question: "Which CSS property is used to change the background color?",
//         a: "background-color",
//         b: "color",
//         c: "bgcolor",
//         d: "background",
//         correct: "a",
//     },
//     {
//         question: "What is the output of typeof NaN in JavaScript?",
//         a: "number",
//         b: "undefined",
//         c: "object",
//         d: "NaN",
//         correct: "a",
//     },
//     {
//         question: "Which HTML tag is used to define an internal style sheet?",
//         a: "<css>",
//         b: "<style>",
//         c: "<script>",
//         d: "<style-sheet>",
//         correct: "b",
//     },
//     {
//         question: "What does the 'async' attribute do in a script tag?",
//         a: "Loads the script asynchronously",
//         b: "Delays the script execution",
//         c: "Executes the script immediately",
//         d: "Blocks the loading of the HTML",
//         correct: "a",
//     },
//     {
//         question: "Which operator is used to assign a value to a variable in JavaScript?",
//         a: "=",
//         b: "==",
//         c: "===",
//         d: ":=",
//         correct: "a",
//     },
//     {
//         question: "What is a closure in JavaScript?",
//         a: "A function that returns another function",
//         b: "A way to create private variables",
//         c: "A function that can be called outside of its scope",
//         d: "Both a and b",
//         correct: "d",
//     },
//     {
//         question: "Which of the following is used to iterate over an array in JavaScript?",
//         a: "forEach()",
//         b: "for()",
//         c: "map()",
//         d: "All of the above",
//         correct: "d",
//     }, {
//         question: "Which HTML element is used to specify a footer for a document or section?",
//         a: "<footer>",
//         b: "<bottom>",
//         c: "<section>",
//         d: "<aside>",
//         correct: "a",
//     },
//     {
//         question: "What is the correct HTML for creating a text input field?",
//         a: "<input type='text'>",
//         b: "<textfield>",
//         c: "<input type='textfield'>",
//         d: "<textinput>",
//         correct: "a",
//     },
//     {
//         question: "Which CSS property is used to control the spacing between words?",
//         a: "letter-spacing",
//         b: "word-spacing",
//         c: "spacing",
//         d: "text-spacing",
//         correct: "b",
//     },
//     {
//         question: "What is the default value of the position property in CSS?",
//         a: "static",
//         b: "relative",
//         c: "absolute",
//         d: "fixed",
//         correct: "a",
//     },
//     {
//         question: "Which HTML element is used to define an image?",
//         a: "<img>",
//         b: "<image>",
//         c: "<pic>",
//         d: "<src>",
//         correct: "a",
//     },
//     {
//         question: "How do you create a checkbox in HTML?",
//         a: "<input type='check'>",
//         b: "<input type='checkbox'>",
//         c: "<checkbox>",
//         d: "<input check='true'>",
//         correct: "b",
//     },
//     {
//         question: "What is the purpose of the 'src' attribute in the <img> tag?",
//         a: "To specify the source of the image",
//         b: "To specify the height of the image",
//         c: "To specify the width of the image",
//         d: "To specify the alt text of the image",
//         correct: "a",
//     },
//     {
//         question: "What does the CSS property 'overflow' control?",
//         a: "How content is displayed when it exceeds the container",
//         b: "The visibility of an element",
//         c: "The display of an element",
//         d: "The spacing of an element",
//         correct: "a",
//     },
//     {
//         question: "Which method is used to remove the last element from an array in JavaScript?",
//         a: "pop()",
//         b: "shift()",
//         c: "slice()",
//         d: "splice()",
//         correct: "a",
//     },
//     {
//         question: "What is the output of 'console.log(typeof null);' in JavaScript?",
//         a: "object",
//         b: "null",
//         c: "undefined",
//         d: "NaN",
//         correct: "a",
//     },
//     {
//         question: "Which of the following is a correct way to declare a constant variable in JavaScript?",
//         a: "const myConst = 10;",
//         b: "constant myConst = 10;",
//         c: "const = myConst 10;",
//         d: "const myConst;",
//         correct: "a",
//     },
//     {
//         question: "What does the 'flex' property in CSS do?",
//         a: "Defines the flexibility of a flex item",
//         b: "Sets the display of an element to flex",
//         c: "Controls the positioning of an element",
//         d: "Changes the background of an element",
//         correct: "a",
//     },
//     {
//         question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
//         a: "title",
//         b: "alt",
//         c: "src",
//         d: "longdesc",
//         correct: "b",
//     },
//     {
//         question: "What is the correct way to write a JavaScript array?",
//         a: "var colors = (1: 'red', 2: 'green', 3: 'blue')",
//         b: "var colors = ['red', 'green', 'blue']",
//         c: "var colors = 'red', 'green', 'blue'",
//         d: "var colors = {red, green, blue}",
//         correct: "b",
//     },
//     {
//         question: "Which of the following is used to prevent a form from being submitted in JavaScript?",
//         a: "event.preventDefault()",
//         b: "form.stopSubmission()",
//         c: "return false;",
//         d: "form.cancel()",
//         correct: "a",
//     },
//     {
//         question: "What does the ':hover' pseudo-class do in CSS?",
//         a: "Styles an element when the mouse is over it",
//         b: "Styles an element when it is clicked",
//         c: "Styles an element when it is focused",
//         d: "Styles an element when it is active",
//         correct: "a",
//     },
//     {
//         question: "Which of the following JavaScript statements will not throw an error?",
//         a: "var x = 5 / 0;",
//         b: "var x = null;",
//         c: "var x = NaN;",
//         d: "All of the above are valid",
//         correct: "d",
//     },
//     {
//         question: "What is the output of '2 == '2'' in JavaScript?",
//         a: "true",
//         b: "false",
//         c: "undefined",
//         d: "Error",
//         correct: "a",
//     },
//     {
//         question: "Which of the following is a block-scoped variable in JavaScript?",
//         a: "var",
//         b: "let",
//         c: "const",
//         d: "Both b and c",
//         correct: "d",
//     },
// ];

const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "High Text Markup Language",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        a: "<header>",
        b: "<title>",
        c: "<head>",
        d: "<meta>",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "b",
    },
]

const startBtn = document.getElementById("startBtn");
const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answerBtn");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("toggleImg");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const finalScore = document.getElementById("finalScore");
const scoreDisplay = document.getElementById("scoreDisplay");

// Quiz State
let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let timeLeft = 30;
let timer;
let isMusicPlaying = localStorage.getItem("isMusicPlaying") === "true";
let userSelections = JSON.parse(localStorage.getItem("userSelections")) || [];

// Set up initial page state
function setupPage() {
    if (localStorage.getItem("isQuizComplete") === "true") {
        showResult();
    } else if (localStorage.getItem("isQuizStarted") === "true") {
        startQuiz();
    }
}
setupPage();

// Start quiz

startBtn.addEventListener("click", () => {
    backgroundMusic.play();
    localStorage.setItem("isQuizStarted", "true");
    localStorage.setItem("isMusicPlaying", "true");
    startQuiz();
});

window.onload = () => {
    if (localStorage.getItem("isMusicPlaying") === "true") {
        backgroundMusic.play();
    }
    if (localStorage.getItem("isQuizStarted") === "true") {
        startQuiz();
    }
};

backgroundMusic.addEventListener("pause", () => {
    localStorage.setItem("isMusicPlaying", "false");
});



function startQuiz() {
    homePage.style.display = "none";
    quizPage.style.display = "block";
    scoreDisplay.style.display = "none";
    resultPage.style.display = "none";
    loadQuestion();
    startTimer();
    scoreDisplay.style.display = "none";
    if (isMusicPlaying) {
        backgroundMusic.play().catch(error => {
            console.error("Playback failed:", error);
        });
    }

}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = ` QS: ${currentQuizData.question}`;
    answerButtons.forEach(button => {
        const answerKey = button.getAttribute("data-answer");
        button.innerText = currentQuizData[answerKey];
        button.classList.remove("correct", "wrong", "selected");
        button.disabled = false;
    });
    scoreDisplay.innerText = `Score: ${score}`;
    nextBtn.disabled = true;
    currentQuestionNumber.innerText = currentQuestion + 1;
    const totalQuestions = quizData.length;
    document.getElementById("totalQuestions").innerText = totalQuestions;
}

// Timer
function startTimer() {
    timeLeft = 30;
    timerElement.innerText = `Left Time: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Left Time: ${timeLeft}`;
        if (timeLeft <= 30) {
            quizPage.style.backgroundColor =" #CCE2C2";
        }
         if (timeLeft <= 15) {
            quizPage.style.backgroundColor ="  #D4D69F8C";

        } 
         if(timeLeft <= 5) {
            quizPage.style.backgroundColor ="  #DBADAD";
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextQuestion();
        }
        
    }, 1000);
   
}

// Answer selection
answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(timer);
        const selectedAnswer = button.getAttribute("data-answer");
        userSelections[currentQuestion] = selectedAnswer;

        if (selectedAnswer === quizData[currentQuestion].correct) {
            score++;
            button.classList.add("correct");
            correctSound.play();
        } else {
            button.classList.add("wrong");
            wrongSound.play();
            highlightCorrectAnswer();
        }

        answerButtons.forEach(btn => {
            btn.disabled = true;
        });

        nextBtn.disabled = false;
        scoreDisplay.innerText = `Score: ${score}`;
        localStorage.setItem("userSelections", JSON.stringify(userSelections));
    });
});

// // Function to highlight the correct answer
function highlightCorrectAnswer() {
    const correctButton = Array.from(answerButtons).find(btn =>
        btn.getAttribute("data-answer") === quizData[currentQuestion].correct
    );

    if (correctButton) {
        correctButton.classList.add("correct");
        localStorage.setItem("highlightedAnswer", correctButton.getAttribute("data-answer"));
    }
}

// Function to load the highlighted answer from localStorage
function loadHighlightedAnswer() {
    const highlightedAnswer = localStorage.getItem("highlightedAnswer");
    if (highlightedAnswer) {
        const highlightedButton = Array.from(answerButtons).find(btn =>
            btn.getAttribute("data-answer") === highlightedAnswer
        );
        if (highlightedButton) {
            highlightedButton.classList.add("correct");
        }
    }
}

window.onload = function () {
    loadHighlightedAnswer();
};
highlightCorrectAnswer();

// Next button
nextBtn.addEventListener("click", handleNextQuestion);

function handleNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        localStorage.setItem("currentQuestion", currentQuestion);
        loadQuestion();
        startTimer();
    } else {
        localStorage.setItem("isQuizComplete", "true");
        showResult();

    }
}

// Show result
function showResult() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    finalScore.innerText = score;
    scoreDisplay.style.display = "block";
    localStorage.setItem("score", score);
}

// Restart quiz
document.getElementById("restartBtn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

// Music toggle
musicToggle.addEventListener("click", () => {
    isMusicPlaying = !isMusicPlaying;
    localStorage.setItem("isMusicPlaying", isMusicPlaying);

    if (isMusicPlaying) {
        backgroundMusic.play();
        musicToggle.src = "img/Volume_Up_.svg";
    } else {
        backgroundMusic.pause();
        musicToggle.src = "img/Volume_Mute_.svg";
    }
});

// Exit Quiz
function exitQuiz() {
    document.getElementById("exitQuizBtn").addEventListener("click", () => {
        localStorage.removeItem("isQuizStarted");
        localStorage.removeItem("currentQuestion");
        localStorage.removeItem("score");
        localStorage.removeItem("userSelections");
        localStorage.removeItem("isQuizComplete");
        location.reload();
    });
}
exitQuiz()