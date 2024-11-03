const startBtn = document.getElementById("startBtn");
const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("toogleImg");

// Ensure localStorage has initial values
if (localStorage.getItem("isMusicPlaying") === null) {
    localStorage.setItem("isMusicPlaying", "true");
}

// Function to hide the home page and show the quiz page
function hideHomePage() {
    homePage.style.display = "none";
    quizPage.style.display = "block";
    localStorage.setItem("isHomePageHidden", "true");
    if (localStorage.getItem("isMusicPlaying") === "true") {
        backgroundMusic.play();
    }
}

// Show or hide pages based on localStorage
if (localStorage.getItem("isHomePageHidden") === "true") {
    hideHomePage();
} else {
    homePage.style.display = "block";
    quizPage.style.display = "none";
}
startBtn.addEventListener('click', hideHomePage);

// Music control 
if (localStorage.getItem("isMusicPlaying") === "true") {
    backgroundMusic.play();
    musicToggle.src = "img/Volume_Up_.svg"; 
} else {
    musicToggle.src = "img/Volume_Mute_.svg"; 
}

// Toggle music 
musicToggle.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.src = "img/Volume_Up_.svg"; 
        localStorage.setItem("isMusicPlaying", "true"); 
    } else {
        backgroundMusic.pause();
        musicToggle.src = "img/Volume_Mute_.svg"; 
        localStorage.setItem("isMusicPlaying", "false"); 
    }
});
