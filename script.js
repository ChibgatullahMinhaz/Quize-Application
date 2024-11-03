// home Page 
const startBtn = document.getElementById("startBtn");
const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");

function hideHomePage() {
    homePage.style.display = "none";
    quizPage.style.display = "block";
    localStorage.setItem("isHomePageHidden", "true");
}
if (localStorage.getItem("isHomePageHidden") === "true") {
    hideHomePage();
} else {
    homePage.style.display = "block";
    quizPage.style.display = "none";
}

startBtn.addEventListener('click', hideHomePage);
